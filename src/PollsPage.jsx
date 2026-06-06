import logo from './assets/img/votelive-logo.png'
import { Link } from 'react-router-dom';
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { doc } from "firebase/firestore";
import { auth, db } from "./firebase/firebase";
import { getDoc, runTransaction,arrayUnion } from "firebase/firestore";
import ElectionLoadingScreen from './ElectionLoadingScreen';

const PollsPage = () => {
    const { pollId } = useParams()
    const [polldata, setPolldata] = useState({})
    const [lockedPolls, setLockedPolls] = useState({})

    async function getPoll() {
        try {
            const docRef = doc(db, "polls", pollId)
            const snapshot = await getDoc(docRef)

            setPolldata(snapshot.data());
        } catch (err) {
            console.log("Error detected:", err)
        }
    }

    useEffect(() => {
        getPoll()
    }, [])

    useEffect(() => {
        async function getUser() {
            const Userreference = doc(db, "users", auth.currentUser.uid)
            const Usersnapshot = await getDoc(Userreference)
            let Userdata = Usersnapshot.data();
            if (!Userdata.votedPolls) {
                return;
            } else {
                const locked = {};
                Userdata.votedPolls.forEach(id => locked[id] = true);
                setLockedPolls(locked);
            }
        }
        getUser()
    }, [])

    async function handleVote(pollId, optionIndex) {

        if (lockedPolls[pollId]) return;

        setLockedPolls((prev) => ({ ...prev, [pollId]: true }))

        const Userreference = doc(db, "users", auth.currentUser.uid)
        //const Usersnapshot = await getDoc(Userreference)
        //let Userdata = Usersnapshot.data();
        //if (Userdata.votedPolls && Userdata.votedPolls.includes(pollId)) return;

        try {

            await runTransaction(db, async (transaction) => {
                let reference = doc(db, "polls", pollId);
                const snapshot = await transaction.get(reference);
                let data = snapshot.data();
                //console.log(data)

                const newOptions = [...data.options]
                newOptions[optionIndex].votes += 1

                transaction.update(reference, { options: newOptions, totalVotes: data.totalVotes + 1 })
                transaction.update(Userreference, { votedPolls: arrayUnion(pollId) })
            })

            getPoll()
        } catch (err) {
            console.log(err)
        }
    }

    if (!polldata.createdBy) return <ElectionLoadingScreen />
    return (
        <div className='font-raleway'>
            <div className='max-w-xl mx-auto max-sm:px-2'>
                <div className='flex justify-between items-center my-6'>
                    <div className='max-sm:w-fit'>
                        <img src={logo} alt="logo" className='h-13 w-auto object-contain max-sm:h-11' />
                    </div>
                    <div>
                        <p className='max-sm:text-[13px] max-sm:w-50'>Want to create your own polls? <Link to="/signup"><span className='text-blue-600'>Sign up free</span></Link></p>
                    </div>
                </div>
                <div className='border border-gray-300 p-4 rounded-2xl'>
                    <div className=''>
                        <div className='grid grid-cols-[0.1fr_1fr] gap-x-2 items-center'>
                            <div className='h-10 w-10 font-extrabold font-sans text-blue-600 flex items-center justify-center bg-blue-100 rounded-full object-cover max-sm:w-8 max-sm:h-8' >
                                <p className="text-[17px]">{polldata.createdBy.charAt(0).toUpperCase()}</p>
                            </div>
                            <div className='flex justify-between items-center '>
                                <div>
                                    <p className='text-extrabold'>{polldata.createdBy}</p>
                                    <p className='text-[14px] text-gray-600 font raleway'>{`Posted ${Math.floor((new Date() - polldata.createdAt.toDate()) / (1000 * 60 * 60)) > 24 ? `${(Math.floor((new Date() - polldata.createdAt.toDate()) / (1000 * 60 * 60)) / 24).toFixed(0)} days ago` : `${Math.floor((new Date() - polldata.createdAt.toDate()) / (1000 * 60 * 60))} hrs ago`} `}</p>
                                </div>
                                <div className='h-7 w-13 bg-red-100 flex items-center justify-center rounded-md'>
                                    <p className='font-raleway text-red-600'>HOT</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div>
                            <p className='my-4 text-2xl'>{polldata.question} ?</p>
                        </div>
                        <div className='grid gap-y-3'>
                            {polldata.options.map((option, optIndex) => (
                                <div onClick={() => {
                                    if (!lockedPolls[pollId]) {
                                        handleVote(pollId, optIndex)
                                    }
                                }} className={`w-full h-10 bg-blue-50 flex items-center justify-between rounded-md max-sm:w-full ${lockedPolls[pollId] ? "pointer-events-none bg-gray-100" : "cursor-pointer"
                                    }`}>
                                    <div style={{ width: polldata.totalVotes === 0 ? "0%" : `${(option.votes / polldata.totalVotes) * 100}%` }} className={`h-10 z-0 bg-blue-100 flex items-center rounded-md whitespace-nowrap`}>
                                        <p className='ml-2 z-10'>{option.option}</p>
                                    </div>
                                    <p className='z-20 mr-2 font-sans text-blue-500'>{polldata.totalVotes === 0 ? 0 : Math.floor((option.votes / polldata.totalVotes) * 100)}%</p>
                                </div>
                            ))}
                        </div>
                        <hr className='my-4 text-gray-300' />
                        <div className='text-gray-500 flex gap-4 justify-between'>
                            <div className='flex gap-2 items-center'>
                                <span className='flex items-center'>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-4 w-5">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z" />
                                    </svg>
                                    <p className='font-raleway'>{polldata.totalVotes} voted</p>
                                </span>
                                <span className='flex items-center'>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-4 w-5">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                    </svg>
                                    <p className='font-raleway text-[15px]'>{polldata.createdAt.toDate().toLocaleDateString()}</p>
                                </span>
                            </div>
                            <a href={`https://wa.me/?text=${encodeURIComponent(`https://votelive.click/polls/${pollId}`)}`}>
                                <div className='flex gap-2 items-center border border-gray-300 px-2 py-1 rounded-lg'>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.0} stroke="currentColor" className="h-4 w-4">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M7.217 10.907a2.25 2.25 0 1 0 0 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186 9.566-5.314m-9.566 7.5 9.566 5.314m0 0a2.25 2.25 0 1 0 3.935 2.186 2.25 2.25 0 0 0-3.935-2.186Zm0-12.814a2.25 2.25 0 1 0 3.933-2.185 2.25 2.25 0 0 0-3.933 2.185Z" />
                                    </svg>
                                    <p>Share</p>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PollsPage;