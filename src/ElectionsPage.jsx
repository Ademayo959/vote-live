import { useState, useEffect } from "react"
import { useParams, useNavigate } from "react-router-dom"
import { getDoc, doc, updateDoc, increment, arrayUnion } from "firebase/firestore"
import { db } from "./firebase/firebase"
import { auth } from "./firebase/firebase"



const ElectionsPage = () => {
    const { electionId } = useParams()
    const navigate = useNavigate()
    //election state
    const [election, setelection] = useState(null)
    //user Data state
    const [userdata, setuserdata] = useState(null)
    //countdown states
    const [timeLeft, setTimeLeft] = useState(null);
    const [isFinished, setIsFinished] = useState(false);


    async function getElections() {
        try {
            let docRef = doc(db, "elections", electionId)
            const snapshot = await getDoc(docRef)
            if (snapshot.exists()) {
                const electionData = snapshot.data();
                setelection(electionData)
                console.log(electionData)
            }
        } catch (err) {
            console.log("Error detected:", err)
        }
    }

    useEffect(() => {
        getElections()
        async function getUserDetails(params) {
            const Userreference = doc(db, "users", auth.currentUser.uid)
            const Usersnapshot = await getDoc(Userreference)
            let Userdata = Usersnapshot.data();
            setuserdata(Userdata)
        }
        getUserDetails()

    }, [])

    //countdown useffect
    useEffect(() => {
        if (!election?.createdAt) return;

        // handle Firestore timestamp
        const createdAtMs = election.createdAt.toMillis
            ? election.createdAt.toMillis()
            : new Date(election.createdAt).getTime();

        const durationInMs = election.duration * 24 * 60 * 60 * 1000;
        const endTime = createdAtMs + durationInMs;

        const interval = setInterval(() => {
            const remaining = endTime - Date.now();

            setTimeLeft(remaining);

            if (remaining <= 0) {
                setIsFinished(true);
                clearInterval(interval);
            }
        }, 1000);

        return () => clearInterval(interval);
    }, [election?.createdAt, election?.duration, electionId]);

    //ballot state
    const [ballot, setballot] = useState({})

    const handleSelectCandidate = (positionTitle, candidateIndex) => {
        setballot({ ...ballot, [positionTitle]: candidateIndex })
    }

    async function handleElectionVote() {
        try {
            //checking if the election has ended
            if (isFinished) {
                alert("Voting has ended");
                return;
            }
            //checking if we have elections
            if (!userdata) return;
            // 1. Check if user's matric number is in eligibleVoters — if not, return
            if (!election.eligibleVoters.includes(userdata.matricNumber)) {
                return;
            }
            // 2. Check if user's uid is already in election's voters array — if yes, return
            if (election.voters.includes(auth.currentUser.uid)) {
                return;
            }
            // 3. Check if all positions have selections in ballot — if not, return
            if (Object.keys(ballot).length !== election.positions.length) {
                return;
            }
            // 4. Fetch election, deep clone positions, increment selected candidate votes
            const updatedElections = structuredClone(election.positions)
            Object.entries(ballot).forEach(([positionTitle, candidateIndex]) => {
                const posIndex = updatedElections.findIndex((p) => p.title === positionTitle)
                updatedElections[posIndex].candidates[candidateIndex].votes += 1
            })
            // 5. updateDoc election — new positions array, increment totalVotes, arrayUnion uid to voters
            const docRef = doc(db, "elections", electionId)
            await updateDoc(docRef, { positions: updatedElections, totalVotes: increment(1), voters: arrayUnion(auth.currentUser.uid) })
            // 6. updateDoc user — arrayUnion electionId to votedElections
            const userRef = doc(db, "users", auth.currentUser.uid)
            await updateDoc(userRef, { votedElections: arrayUnion(electionId) })
            //calling getElection again
            getElections()
            navigate(`/election/${electionId}/results`)
        } catch (err) {
            console.log("Error detected:", err)
        }
    }

    useEffect(() => {
        if (!election || !userdata) {
            return;
        }
        if (!election?.eligibleVoters) return;
        if (!election.eligibleVoters.includes(userdata.matricNumber) || isFinished || election.voters.includes(auth.currentUser.uid)) {
            navigate(`/election/${electionId}/results`)
        }

    }, [election, userdata, isFinished])

    const formatTimeParts = (ms) => {
        if (!ms || ms <= 0) {
            return { hours: "00", minutes: "00", seconds: "00" };
        }

        const totalSeconds = Math.floor(ms / 1000);

        const hours = Math.floor(totalSeconds / 3600).toString().padStart(2, "0");
        const minutes = Math.floor((totalSeconds % 3600) / 60).toString().padStart(2, "0");
        const seconds = (totalSeconds % 60).toString().padStart(2, "0");

        return { hours, minutes, seconds };
    };

    const { hours, minutes, seconds } = formatTimeParts(timeLeft);


    if (!election) return <p>Loading...</p>
    return (
        <div className="bg-accent-blue">
            <div className="font-montserrat bg-accent-blue max-w-6xl mx-auto max-sm:px-3">
                <div className="border-b py-4 border-b-gray-400">
                    <div className="flex justify-between items-center">
                        {!isFinished ?
                            <div className="flex gap-1 items-center my-4 bg-red-50 w-fit px-2 py-1 rounded-3xl border border-red-600">
                                <div className="h-2 w-2 bg-red-600 rounded-full"></div>
                                <p className=" text-red-600 text-[12px] font-semibold">LIVE ELECTION</p>
                            </div> :
                            <div className="flex gap-1 items-center my-4 bg-gray-50 w-fit px-2 py-1 rounded-3xl border border-gray-600">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4 text-gray-600">
                                    <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm-1.72 6.97a.75.75 0 1 0-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 1 0 1.06 1.06L12 13.06l1.72 1.72a.75.75 0 1 0 1.06-1.06L13.06 12l1.72-1.72a.75.75 0 1 0-1.06-1.06L12 10.94l-1.72-1.72Z" clipRule="evenodd" />
                                </svg>
                                <p className=" text-gray-600 text-[12px] font-semibold">CLOSED</p>
                            </div>}
                        <div className="flex gap-2 items-center transition-all hover:-mt-1">
                            <p onClick={() => navigate('/dashboard')} className="text-[13px] text-gray-500">Back to Dashboard</p>
                        </div>
                    </div>
                    <div>
                        <p className="font-extrabold text-[35px]">{election.title}</p>
                    </div>
                    <div className="flex gap-4 items-center">
                        <div className="flex gap-1 text-gray-700">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-4 w-4">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z" />
                            </svg>
                            <p className="text-[13px]">{election.eligibleVoters.length} Registered Voters</p>
                        </div>
                        <div className="flex gap-1 text-gray-700">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-4 w-4">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z" />
                            </svg>
                            <p className="text-[13px]"> Ends on {(new Date((election.createdAt.toMillis() + election.duration * 24 * 60 * 60 * 1000))).toLocaleDateString()}</p>
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-[2fr_1fr] gap-12 my-10 max-sm:grid-cols-1">
                    <div>
                        {election.positions.map((position, posIndex) => (
                            <div key={posIndex} className="border border-gray-300 my-4 p-4 rounded-xl">
                                <div className="grid gap-2">
                                    <p className="text-[25px] font-extrabold">{position.title}</p>
                                    <div>
                                        <p className="text-[14px] text-gray-500">Select one Candidate</p>
                                    </div>
                                    <hr className="mb-6 text-gray-300" />
                                </div>
                                <div className="grid grid-cols-2 w-full px-2 gap-6 max-sm:grid-cols-1">
                                    {position.candidates.map((candidate, canIndex) => (
                                        <div key={canIndex}>
                                            <div onClick={() => { handleSelectCandidate(position.title, canIndex) }} className={ballot[position.title] === canIndex ? `bg-blue-100 border border-blue-600 rounded-md p-5 grid gap-2 text-center w-80 max-w-100 max-sm:w-full` : `bg-white border border-gray-200 rounded-md p-5 grid gap-2 text-center w-80 max-w-100 max-sm:w-full`}>
                                                <div className="justify-self-center bg-gray-100 p-6 rounded-full">
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-10 w-10 text-gray-400">
                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                                    </svg>
                                                </div>
                                                <p className="text-[17px] font-extrabold">{candidate.name}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                    <div>
                        <div className="bg-custom-blue text-white text-center p-4 m-4 rounded-xl grid gap-2">
                            <p className="text-[13px]">TIME REMAINING</p>
                            <p className="text-[25px]">{hours}:{minutes}:{seconds}</p>
                        </div>
                        <div className="bg-white border border-gray-300 p-4 rounded-xl">
                            <p className="text-custom-blue font-extrabold text-[19px]">My Ballot</p>
                            <div className="grid gap-2 my-4">
                                {election.positions.map((position, posIndex) => (
                                    <div key={posIndex} className="flex bg-gray-100 py-3 px-2 rounded-lg text-gray-600 justify-between">
                                        <p>{position.title}</p>
                                        <p>{ballot[position.title] !== undefined ? position.candidates[ballot[position.title]].name : "-"}</p>
                                    </div>
                                ))}
                            </div>
                            <div>
                                <div onClick={handleElectionVote} className="bg-custom-blue text-white py-2 px-2 rounded-lg text-center">
                                    <p>Submit Vote</p>
                                </div>
                                <p className="text-[12px] text-gray-400 text-center my-2 px-4">Please note action cannot be undone after submission</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ElectionsPage;