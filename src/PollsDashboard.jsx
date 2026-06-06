import { useState, useEffect } from "react"
import { Link } from "react-router-dom";
import { collection, getDoc, getDocs, doc, arrayUnion, runTransaction } from "firebase/firestore";
import { auth, db } from "./firebase/firebase";
import HelpModal from "./HelpModal";
import CreatePollModal from "./CreatePollModal";


const PollsDashboard = ({ setactiveTab, userName }) => {
    let [polls, setpolls] = useState([])
    const [isModalActive, setIsModalActive] = useState(false);
    const [isCreatePollModal, setIsCreatePollModal] = useState(false)
    //loading state
    const [IsLoading, setIsLoading] = useState(true)



    async function getPolls() {
        try {
            let collectionRef = collection(db, "polls");
            const snapshot = await getDocs(collectionRef)
            const pollsArray = snapshot.docs.map((doc) => ({
                id: doc.id,
                ...doc.data()
            }))
            //console.log(pollsArray)
            setpolls(pollsArray)

            const sorted = pollsArray.sort(
                (a, b) => b.createdAt.toDate() - a.createdAt.toDate()
            );

            setpolls(sorted);
            setIsLoading(false)
        } catch (err) {
            console.log("Error detected", err)
        }
    }

    useEffect(() => {

        getPolls();
    }, [])


    const [lockedPolls, setLockedPolls] = useState({})

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

            setpolls(prev => prev.map(p => {
                if (p.id !== pollId) return p;
                const newOptions = [...p.options];
                newOptions[optionIndex] = { ...newOptions[optionIndex], votes: newOptions[optionIndex].votes + 1 };
                return { ...p, options: newOptions, totalVotes: p.totalVotes + 1 };
            }));
        } catch (err) {
            console.log(err)
        }
    }

    return (
        <div>
            <div className='bg-white border-b border-gray-200 max-[840px]:hidden'>
                <div className='flex justify-between p-6'>
                    <div className='flex items-center gap-2'>
                        <p className="text-gray-500 cursor-pointer" onClick={() => setactiveTab("MainDashboardPage")}>Dashboard</p>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-4 w-4 text-gray-500">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                        </svg>
                        <p className="cursor-pointer">Polls & Surveys</p>
                    </div>
                    <div className='flex gap-4'>
                        <div onClick={() => { setIsModalActive(true) }} className='cursor-pointer p-2 border border-gray-300 w-10 flex items-center justify-center rounded-full h-10 text-gray-600'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-5 w-5">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z" />
                            </svg>
                        </div>
                        <div onClick={getPolls} className='cursor-pointer p-2 border border-gray-300 w-10 flex items-center justify-center rounded-full h-10 text-gray-600'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-5 w-5">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99" />
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
            <div className="px-6 mt-4 max-sm:px-2">
                <div className="flex justify-between max-sm:w-full">
                    <div>
                        <p className="font-extrabold text-2xl font-montserrat max-sm:text-[16px]">Polls & Surveys</p>
                        <p className="text-gray-500 font-raleway font-extralight max-[840px]:text-[12px] max-sm:w-48">Participate in campus discussions or create your own.</p>
                    </div>
                    <div
                        onClick={() => { if (userName) setIsCreatePollModal(true) }}
                        className={`flex cursor-pointer bg-custom-blue text-white w-40 h-10 px-2 items-center justify-center rounded-lg text-sm font-raleway gap-2 max-sm:w-[30%] ${!userName ? "opacity-50 cursor-not-allowed" : ""}`}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                        </svg>
                        <p className='max-sm:text-[12px]'>Create New Poll</p>
                    </div>
                </div>
            </div>
            <div className="flex gap-2 px-6 mt-4 items-center max-sm:px-3">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-6 w-6 text-red-700">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.362 5.214A8.252 8.252 0 0 1 12 21 8.25 8.25 0 0 1 6.038 7.047 8.287 8.287 0 0 0 9 9.601a8.983 8.983 0 0 1 3.361-6.867 8.21 8.21 0 0 0 3 2.48Z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 18a3.75 3.75 0 0 0 .495-7.468 5.99 5.99 0 0 0-1.925 3.547 5.975 5.975 0 0 1-2.133-1.001A3.75 3.75 0 0 0 12 18Z" />
                </svg>
                <p className="text-xl">Trending Now</p>
            </div>
            <div className='grid grid-cols-2 gap-10 px-6 my-4 max-[840px]:px-4 max-[840px]:grid-cols-1'>
                {IsLoading ? Array(6).fill(0).map((_, i) => (
                    <div key={i} className="border border-gray-300 p-6 gap-1 h-80 w-106 rounded-lg grid animate-pulse max-[840px]:w-full">
                        <div className="bg-gray-200 h-12 rounded w-full"></div>
                        <div className="bg-gray-200 h-6 rounded w-2/4"></div>
                        <div className="bg-gray-200 h-10 rounded w-full"></div>
                        <div className="bg-gray-200 h-10 rounded w-full"></div>
                        <hr className="text-gray-200 " />
                        <div className="bg-gray-200 h-8 rounded w-full"></div>
                    </div>
                )) : polls.map((poll) => (
                    <div key={poll.id} className='w-full h-fit rounded-lg bg-white shadow-md p-6 max-[840px]:w-full'>
                        <div className=''>
                            <div className='grid grid-cols-[0.1fr_1fr] gap-x-2 items-center'>
                                <div className='h-8 w-8 font-extrabold font-sans text-blue-600 flex items-center justify-center bg-blue-100 rounded-full object-cover max-sm:w-8 max-sm:h-8' >
                                    <p className="text-[17px]">{poll.createdBy.charAt(0)}</p>
                                </div>
                                <div className='flex justify-between items-center '>
                                    <div>
                                        <p className='text-extrabold'>{poll.createdBy}</p>
                                        <p className='text-[14px] text-gray-600 font raleway'>{`Posted ${Math.floor((new Date() - poll.createdAt.toDate()) / (1000 * 60 * 60)) > 24 ? `${(Math.floor((new Date() - poll.createdAt.toDate()) / (1000 * 60 * 60)) / 24).toFixed(0)} days ago` : `${Math.floor((new Date() - poll.createdAt.toDate()) / (1000 * 60 * 60))} hrs ago`} `}</p>
                                    </div>
                                    <div className='h-7 w-13 bg-red-200 flex items-center justify-center rounded-md'>
                                        <p className='font-raleway text-red-600'>HOT</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <p className='my-4'>{poll.question}</p>
                        </div>
                        <div className='grid gap-y-3'>
                            {poll.options.map((option, optIndex) => (
                                <div onClick={() => {
                                    if (!lockedPolls[poll.id]) {
                                        handleVote(poll.id, optIndex)
                                    }
                                }} className={`w-full h-10 bg-blue-50 flex items-center justify-between rounded-md max-sm:w-full ${lockedPolls[poll.id] ? "pointer-events-none bg-gray-100" : "cursor-pointer"
                                    }`}>
                                    <div style={{ width: poll.totalVotes === 0 ? "0%" : `${(option.votes / poll.totalVotes) * 100}%` }} className={`h-10 z-0 bg-blue-100 flex items-center rounded-md whitespace-nowrap`}>
                                        <p className='ml-2 z-10'>{option.option}</p>
                                    </div>
                                    <p className='z-20 mr-2 font-sans text-blue-500'>{poll.totalVotes === 0 ? 0 : Math.floor((option.votes / poll.totalVotes) * 100)}%</p>
                                </div>
                            ))}
                        </div>
                        <hr className='my-4 text-gray-400' />
                        <div className='text-gray-500 flex justify-between '>
                            <div className="flex items-center gap-4">
                                <span className='flex items-center'>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-4 w-5">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z" />
                                    </svg>
                                    <p className='font-raleway'>{poll.totalVotes} voted</p>
                                </span>
                                <span className='flex items-center'>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-4 w-5">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                    </svg>
                                    <p className='font-raleway text-[15px]'>{poll.createdAt.toDate().toLocaleDateString()}</p>
                                </span>
                            </div>
                            <Link to={`/polls/${poll.id}`}>
                                <div className='flex gap-2 items-center border border-gray-300 px-2 py-1 rounded-lg'>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.0} stroke="currentColor" className="h-4 w-4">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M7.217 10.907a2.25 2.25 0 1 0 0 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186 9.566-5.314m-9.566 7.5 9.566 5.314m0 0a2.25 2.25 0 1 0 3.935 2.186 2.25 2.25 0 0 0-3.935-2.186Zm0-12.814a2.25 2.25 0 1 0 3.933-2.185 2.25 2.25 0 0 0-3.933 2.185Z" />
                                    </svg>
                                    <p>Share</p>
                                </div>
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
            {isModalActive && (
                <div className="fixed inset-0 bg-black/70 z-99" onClick={() => setIsModalActive(false)}>
                    <HelpModal setIsModalActive={setIsModalActive} onClose={() => setIsModalActive(false)} />
                </div>
            )}
            {isCreatePollModal && (
                <div className="fixed inset-0 bg-black/70 z-99" onClick={() => setIsCreatePollModal(false)}>
                    <CreatePollModal getPolls={getPolls} userName={userName} setIsCreatePollModal={setIsCreatePollModal} onClose={() => setIsCreatePollModal(false)} />
                </div>
            )}
        </div>
    );
}

export default PollsDashboard;