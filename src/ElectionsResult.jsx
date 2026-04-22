import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import logo from './assets/img/votelive-logo.png'
import { doc, getDoc } from "firebase/firestore";
import { db } from "./firebase/firebase";


const ElectionsResult = () => {
    const { electionId } = useParams()
    const navigate = useNavigate()

    const electinObject = {
        title: "SUG Presidential Election 2025",
        createdBy: "Oluwamayowa",
        createdByUid: "uid_abc123",
        eligibleVoters: ["200100", "200200", "200300", "200400", "200500", "200600", "200700", "200800", "200900", "200200", "200300", "200400", "200100", "200200", "200100", "200200", "200300", "200400"],
        positions: [
            {
                title: "President",
                candidates: [{ name: "Ade Bello", votes: 4 }, { name: "Chidi Okonkwo", votes: 1 }, { name: "Timi Dakolo", votes: 2 }],
            },
            {
                title: "Vice President",
                candidates: [{ name: "Fatima Yusuf", votes: 5 }, { name: "Tolu Adeyemi", votes: 2 }],
            },
            {
                title: "Secretary",
                candidates: [{ name: "Gboye David", votes: 1 }, { name: "Peter Adesike", votes: 6 }],
            }
        ],
        voters: ["200100", "200200", "200300", "200400", "200300", "200400", "200500"],
        duration: 48,
        status: "pending",
        createdAt: new Date(),
        totalVotes: 0,
    };
    const [electionObject, setelectionObject] = useState({})


    async function getElections() {
        try {
            let docRef = doc(db, "elections", electionId)
            const snapshot = await getDoc(docRef)
            if (snapshot.exists()) {
                const electionData = snapshot.data();
                console.log(electionData)
                setelectionObject(electionData)
            }
        } catch (err) {
            console.log("Error detected:", err)
        }
    }

    useEffect(() => {
        getElections()
    }, [])

    if (!electionObject.positions) return <p>Loading...</p>
    const winner = electionObject.positions[0].candidates.reduce((biggest, current) => current.votes > biggest.votes ? current : biggest)

    const runnerUp = electionObject.positions[0].candidates
        .filter(c => c.name !== winner.name)
        .reduce((biggest, current) =>
            current.votes > biggest.votes ? current : biggest
        )
    return (
        <div className="font-montserrat max-w-full ">
            <div className='max-w-full bg-white border-b border-gray-100'>
                <div className='flex justify-between items-center w-full font-montserrat max-w-7xl justify-self-center py-4 max-sm:flex max-sm:justify-between max-sm:items-center max-sm:px-3'>
                    <div className='max-sm:w-fit'>
                        <img src={logo} alt="logo" className='h-16 w-auto object-contain max-sm:h-12' />
                    </div>
                    <div className='flex gap-8 max-sm:gap-2'>
                        <p onClick={() => navigate('/dashboard')} className="text-[13px] text-gray-500">Back to Dashboard</p>
                    </div>
                </div>
            </div>
            <div className="mt-10 max-w-7xl justify-self-center w-full">
                {electionObject.status == "pending" ?
                    <div>
                        <div className="grid grid-cols-[75%_25%] border border-gray-300 p-6 rounded-2xl max-sm:grid-cols-1">
                            <div>
                                <div className="flex items-center gap-1 border border-gray-400 w-fit px-2 py-1 rounded-2xl">
                                    <div className="flex items-center justify-center h-4 w-4 bg-blue-200 rounded-full">
                                        <div className="h-2 w-2 bg-custom-blue rounded-full"></div>
                                    </div>
                                    <p className="text-gray-700 font-sans text-[13px]">LIVE ELECTION</p>
                                </div>
                                <div>
                                    <p className="text-blue-950 text-[40px] font-semibold">{electionObject.title}</p>
                                    <p className="w-2xl text-gray-500">Real-time results are updating as verified ballots come in. Students can monitor participation, leading candidates, and time remainig before voting closes</p>
                                    <div className="text-gray-600 flex gap-4 my-3">
                                        <div className="flex items-center gap-2">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4.5 h-4.5">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z" />
                                            </svg>
                                            <p>{electionObject.eligibleVoters.length} registered voters</p>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4.5 h-4.5">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 6v.75m0 3v.75m0 3v.75m0 3V18m-9-5.25h5.25M7.5 15h3M3.375 5.25c-.621 0-1.125.504-1.125 1.125v3.026a2.999 2.999 0 0 1 0 5.198v3.026c0 .621.504 1.125 1.125 1.125h17.25c.621 0 1.125-.504 1.125-1.125v-3.026a2.999 2.999 0 0 1 0-5.198V6.375c0-.621-.504-1.125-1.125-1.125H3.375Z" />
                                            </svg>
                                            <p>{electionObject.voters.length} votes have been cast so far</p>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4.5 h-4.5">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 0 0 6 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0 1 18 16.5h-2.25m-7.5 0h7.5m-7.5 0-1 3m8.5-3 1 3m0 0 .5 1.5m-.5-1.5h-9.5m0 0-.5 1.5m.75-9 3-3 2.148 2.148A12.061 12.061 0 0 1 16.5 7.605" />
                                            </svg>
                                            <p>Results refreshes in real time</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-blue-100 p-4 rounded-xl">
                                <p className="font-mono text-[14px] text-gray-600">TURNOUT RATE</p>
                                <p className="text-5xl font-sans font-semibold my-2">04:32:12</p>
                                <p className="text-[13px] text-gray-500">Voting is still open. Rankimgs may change until the countdown reaches zero and the results are displayed</p>
                            </div>
                        </div>
                        <div className="grid grid-cols-[3fr_1fr] my-4 gap-4 max-sm:grid-cols-1">
                            <div>
                                <div className="border border-gray-300 p-6 rounded-2xl">
                                    <p className="text-[22px] font-sans font-semibold text-gray-700">Live Election Monitor</p>
                                    <p className="text-gray-500">Current turnout and leaderboard base on verified ballots already received on the platform</p>
                                    <div className="bg-blue-100 p-4 my-2 rounded-2xl">
                                        <p className="text-gray-500 font-sans">LIVE COUNTDOWN</p>
                                        <div className="flex items-center justify-between font-raleway text-gray-500">
                                            <p className="text-[14px]">Voting closes automatically when the timer ends.</p>
                                            <div className="flex items-center gap-1 bg-gray-100 border border-gray-100 w-fit px-2 py-1 rounded-2xl">
                                                <div className="flex items-center justify-center h-4 w-4 bg-blue-200 rounded-full">
                                                    <div className="h-2 w-2 bg-custom-blue rounded-full"></div>
                                                </div>
                                                <p className="text-gray-700 font-raleway text-[13px]">UPDATING NOW</p>
                                            </div>
                                        </div>
                                        <div className="my-4 flex gap-[5%]">
                                            <div className="w-[20%] bg-white p-3 h-fit rounded-2xl grid items-center justify-center text-center">
                                                <p className="font-sans text-[35px] text-blue-950">04</p>
                                                <p className="font-raleway text-[14px]">Hours</p>
                                            </div>
                                            <div className="w-[20%] bg-white p-3 h-fit rounded-2xl grid items-center justify-center text-center">
                                                <p className="font-sans text-[35px] text-blue-950">32</p>
                                                <p className="font-raleway text-[14px]">Minutes</p>
                                            </div>
                                            <div className="w-[20%] bg-white p-3 h-fit rounded-2xl grid items-center justify-center text-center">
                                                <p className="font-sans text-[35px] text-blue-950">12</p>
                                                <p className="font-raleway text-[14px]">Seconds</p>
                                            </div>
                                            <div className="w-[20%] bg-white p-3 h-fit rounded-2xl grid items-center justify-center text-center">
                                                <p className="font-sans text-[35px] text-blue-950">{(electionObject.voters.length / electionObject.eligibleVoters.length * 100).toFixed(1)}%</p>
                                                <p className="font-raleway text-[14px]">Turnout</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    {electionObject.positions.map((position) => (
                                        <div className="border border-gray-300 rounded-2xl p-4 mt-4">
                                            <div className="flex items-center">
                                                <p className="text-blue-950 font-sans text-[22px] font-semibold">{position.title}</p>
                                            </div>
                                            {position.candidates.map((candidate, canIndex) => (
                                                <div>
                                                    <hr className="text-gray-300 my-3" />
                                                    <div className="flex justify-between items-center">
                                                        <div className="flex gap-4">
                                                            <div className="bg-blue-600 flex items-center justify-center rounded-full text-white h-8 w-8">
                                                                <p>{canIndex + 1}</p>
                                                            </div>
                                                            <div>
                                                                <div className="flex justify-between gap-10">
                                                                    <p className=" text-blue-950 font-semibold text-[17px]">{candidate.name}</p>
                                                                    <p className="text-gray-600">{(candidate.votes / electionObject.voters.length * 100).toFixed(0)}%</p>
                                                                </div>
                                                                <div className="bg-blue-100 h-2 rounded-2xl w-full my-2">
                                                                    <div style={{ width: `${(candidate.votes / electionObject.voters.length) * 100}%` }} className={`bg-blue-600 h-2 rounded-2xl`}></div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div>
                                                            <p className="text-[20px] text-blue-950 font-extrabold font-raleway">{candidate.votes} votes</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="border border-gray-300 p-6 rounded-2xl h-fit">
                                <p className="text-[22px] font-sans font-semibold text-gray-700">Live Snapshot</p>
                                <p className="font-raleway text-gray-500 text-[14px]">A simple view of participation and election activity while voting is still open</p>
                                <div className="grid grid-cols-2 gap-3 mt-4">
                                    <div className="bg-gray-100 w-full rounded-lg grid items-center py-3.5 px-4">
                                        <p className="text-[13px] text-gray-600">Positions</p>
                                        <p className="text-[30px] text-blue-950 font-sans">{electionObject.positions.length}</p>
                                    </div>
                                    <div className="bg-gray-100 w-full rounded-lg grid items-center py-3.5 px-4">
                                        <p className="text-[13px] text-gray-600">Candidates</p>
                                        <p className="text-[30px] text-blue-950 font-sans">{electionObject.positions.reduce((total, position) => total + position.candidates.length, 0)}</p>
                                    </div>
                                    <div className="bg-gray-100 w-full rounded-lg grid items-center py-3.5 px-4">
                                        <p className="text-[13px] text-gray-600">Votes Cast</p>
                                        <p className="text-[30px] text-blue-950 font-sans">{electionObject.voters.length}</p>
                                    </div>
                                    <div className="bg-gray-100 w-full rounded-lg grid items-center py-3.5 px-4">
                                        <p className="text-[13px] text-gray-600">Turnout</p>
                                        <p className="text-[30px] text-blue-950 font-sans">{(electionObject.voters.length / electionObject.eligibleVoters.length * 100).toFixed(1)}%</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div> :

                    <div>
                        <div>
                            <div className="grid grid-cols-[75%_25%] border border-gray-300 p-6 rounded-2xl">
                                <div>
                                    <div className="flex items-center gap-1 border border-gray-400 w-fit px-2 py-1 rounded-2xl">
                                        <div className="flex items-center justify-center h-4 w-4 bg-gray-200 rounded-full">
                                            <div className="h-2 w-2 bg-gray-500 rounded-full"></div>
                                        </div>
                                        <p className="text-gray-700 font-sans text-[13px]">CONCLUDED ELECTION</p>
                                    </div>
                                    <div>
                                        <p className="text-blue-950 text-[40px] font-semibold">{electionObject.title}</p>
                                        <p className="w-2xl text-gray-500">Final certified results for the {electionObject.title}, voting is closed, all ballots have been counted, all published ranking is now locked.</p>
                                        <div className="text-gray-600 flex gap-4 my-3">
                                            <div className="flex items-center gap-2">
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4.5 h-4.5">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z" />
                                                </svg>
                                                <p>{electionObject.eligibleVoters.length} registered voters</p>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4.5 h-4.5">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 6v.75m0 3v.75m0 3v.75m0 3V18m-9-5.25h5.25M7.5 15h3M3.375 5.25c-.621 0-1.125.504-1.125 1.125v3.026a2.999 2.999 0 0 1 0 5.198v3.026c0 .621.504 1.125 1.125 1.125h17.25c.621 0 1.125-.504 1.125-1.125v-3.026a2.999 2.999 0 0 1 0-5.198V6.375c0-.621-.504-1.125-1.125-1.125H3.375Z" />
                                                </svg>
                                                <p>{electionObject.voters.length} votes have been cast so far</p>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4.5 h-4.5">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 0 0 6 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0 1 18 16.5h-2.25m-7.5 0h7.5m-7.5 0-1 3m8.5-3 1 3m0 0 .5 1.5m-.5-1.5h-9.5m0 0-.5 1.5m.75-9 3-3 2.148 2.148A12.061 12.061 0 0 1 16.5 7.605" />
                                                </svg>
                                                <p>Results refreshes in real time</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="bg-blue-100 p-4 rounded-xl">
                                    <p className="font-mono text-[14px] text-gray-600">TURNOUT RATE</p>
                                    <p className="text-5xl font-sans font-semibold my-2">{(electionObject.voters.length / electionObject.eligibleVoters.length * 100).toFixed(1)}%</p>
                                    <p className="text-[13px] text-gray-500">{(electionObject.voters.length / electionObject.eligibleVoters.length * 100).toFixed(1) > 50 ?
                                        <p>A strong turnout across all eligible voters! The community showed up and made their voices heard. These results carry strong democratic weight.</p> :
                                        <p>Turnout was lower than expected. While the results are valid, they may not fully reflect the views of all eligible voters. Encourage wider participation next time.</p>
                                    }</p>
                                </div>
                            </div>
                            <div className="grid grid-cols-[3fr_1fr] my-4 gap-4">
                                <div>
                                    <div className="border border-gray-300 p-6 rounded-2xl">
                                        <p className="text-[22px] font-sans font-semibold text-gray-700">Declared Winner</p>
                                        <p className="text-gray-500">{electionObject.voters.length} total ballots</p>
                                        <div className="bg-blue-100 p-4 my-2 flex rounded-2xl">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-10 w-10 text-blue-600">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 18.75h-9m9 0a3 3 0 0 1 3 3h-15a3 3 0 0 1 3-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0H9.497m5.007 0a7.454 7.454 0 0 1-.982-3.172M9.497 14.25a7.454 7.454 0 0 0 .981-3.172M5.25 4.236c-.982.143-1.954.317-2.916.52A6.003 6.003 0 0 0 7.73 9.728M5.25 4.236V4.5c0 2.108.966 3.99 2.48 5.228M5.25 4.236V2.721C7.456 2.41 9.71 2.25 12 2.25c2.291 0 4.545.16 6.75.47v1.516M7.73 9.728a6.726 6.726 0 0 0 2.748 1.35m8.272-6.842V4.5c0 2.108-.966 3.99-2.48 5.228m2.48-5.492a46.32 46.32 0 0 1 2.916.52 6.003 6.003 0 0 1-5.395 4.972m0 0a6.726 6.726 0 0 1-2.749 1.35m0 0a6.772 6.772 0 0 1-3.044 0" />
                                            </svg>
                                            <div>
                                                <div>
                                                    <p className="text-[25px] text-blue-950 font-bold font-sans">{winner.name}</p>
                                                    <p>{electionObject.positions[0].title}</p>
                                                    <div>

                                                    </div>
                                                </div>
                                                <div>

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        {electionObject.positions.map((position) => (
                                            <div className="border border-gray-300 rounded-2xl p-4 mt-4">
                                                <div className="flex items-center">
                                                    <p className="text-blue-950 font-sans text-[22px] font-semibold">{position.title}</p>
                                                </div>
                                                {position.candidates.map((candidate, canIndex) => (
                                                    <div>
                                                        <hr className="text-gray-300 my-3" />
                                                        <div className="flex justify-between items-center">
                                                            <div className="flex gap-4">
                                                                <div className="bg-blue-600 flex items-center justify-center rounded-full text-white h-8 w-8">
                                                                    <p>{canIndex + 1}</p>
                                                                </div>
                                                                <div>
                                                                    <div className="flex justify-between gap-10">
                                                                        <p className=" text-blue-950 font-semibold text-[17px]">{candidate.name}</p>
                                                                        <p className="text-gray-600">{(candidate.votes / electionObject.voters.length * 100).toFixed(0)}%</p>
                                                                    </div>
                                                                    <div className="bg-blue-100 h-2 rounded-2xl w-[700px] my-2">
                                                                        <div style={{ width: `${(candidate.votes / electionObject.voters.length) * 700}px` }} className={`bg-blue-600 h-2 rounded-2xl`}></div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div>
                                                                <p className="text-[20px] text-blue-950 font-extrabold font-raleway">{candidate.votes} votes</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                <div className="border border-gray-300 p-6 rounded-2xl h-fit">
                                    <p className="text-[22px] font-sans font-semibold text-gray-700">Live Snapshot</p>
                                    <p className="font-raleway text-gray-500 text-[14px]">A simple view of participation and election activity while voting is still open</p>
                                    <div className="grid grid-cols-2 gap-3 mt-4">
                                        <div className="bg-gray-100 w-full rounded-lg grid items-center py-3.5 px-4">
                                            <p className="text-[13px] text-gray-600">Positions</p>
                                            <p className="text-[30px] text-blue-950 font-sans">{electionObject.positions.length}</p>
                                        </div>
                                        <div className="bg-gray-100 w-full rounded-lg grid items-center py-3.5 px-4">
                                            <p className="text-[13px] text-gray-600">Candidates</p>
                                            <p className="text-[30px] text-blue-950 font-sans">{electionObject.positions.reduce((total, position) => total + position.candidates.length, 0)}</p>
                                        </div>
                                        <div className="bg-gray-100 w-full rounded-lg grid items-center py-3.5 px-4">
                                            <p className="text-[13px] text-gray-600">Votes Cast</p>
                                            <p className="text-[30px] text-blue-950 font-sans">{electionObject.voters.length}</p>
                                        </div>
                                        <div className="bg-gray-100 w-full rounded-lg grid items-center py-3.5 px-4">
                                            <p className="text-[13px] text-gray-600">Turnout</p>
                                            <p className="text-[30px] text-blue-950 font-sans">{(electionObject.voters.length / electionObject.eligibleVoters.length * 100).toFixed(1)}%</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                }
            </div>
        </div>
    );
}

export default ElectionsResult;