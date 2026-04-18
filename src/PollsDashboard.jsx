import { useState, useEffect } from "react"
import { collection, getDoc, getDocs, doc, increment, updateDoc } from "firebase/firestore";
import { db } from "./firebase/firebase";
import HelpModal from "./HelpModal";
import CreatePollModal from "./CreatePollModal";


const PollsDashboard = ({ setactiveTab, userName }) => {
    let [polls, setpolls] = useState([])
    const [isModalActive, setIsModalActive] = useState(false);
    const [isCreatePollModal, setIsCreatePollModal] = useState(false)

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

        } catch (err) {
            console.log("Error detected", err)
        }
    }

    useEffect(() => {

        getPolls();
    }, [])

    const [lockedPolls, setLockedPolls] = useState({})

    async function handleVote(pollId, optionIndex) {
        //local storage check
        let stored = localStorage.getItem("votedPolls")
        const votedPolls = stored ? JSON.parse(stored) : []
        if (votedPolls.includes(pollId)) return;


        setLockedPolls((prev) => ({
            ...prev,
            [pollId]: true
        }));


        try {
            let reference = doc(db, "polls", pollId);
            const snapshot = await getDoc(reference);
            let data = snapshot.data();
            console.log(data)

            const newOptions = [...data.options]
            newOptions[optionIndex].votes += 1

            await updateDoc(reference, { options: newOptions, totalVotes: increment(1) })

            JSON.stringify(votedPolls)
            localStorage.setItem("votedPolls", JSON.stringify([...votedPolls, pollId]))
            getPolls();
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
                        <div className='cursor-pointer p-2 border border-gray-300 w-10 flex items-center justify-center rounded-full h-10 text-gray-600'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-5 w-5">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0" />
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
                    <div onClick={() => { setIsCreatePollModal(true) }} className="flex cursor-pointer bg-custom-blue text-white w-40 h-10 px-2 items-center justify-center rounded-lg text-sm font-raleway gap-2 max-sm:w-[30%]">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                        </svg>
                        <p className='max-sm:text-[12px]'>Create New Poll</p>
                    </div>
                </div>
            </div>
            <div className="px-6 flex gap-4 mt-4 max-sm:px-4 flex-wrap">
                <div className="px-3 py-1 border border-gray-300 w-fit rounded-3xl transition-all hover:-translate-y-1 ">
                    <p className="text-gray-600">All Polls</p>
                </div>
                <div className="px-3 py-1 border border-gray-300 w-fit rounded-3xl transition-all hover:-translate-y-1">
                    <p className="text-gray-600">Trending</p>
                </div>
                <div className="px-3 py-1 border border-gray-300 w-fit rounded-3xl transition-all hover:-translate-y-1">
                    <p className="text-gray-600">Campus Life</p>
                </div>
                <div className="px-3 py-1 border border-gray-300 w-fit rounded-3xl transition-all hover:-translate-y-1">
                    <p className="text-gray-600">Academics</p>
                </div>
                <div className="px-3 py-1 border border-gray-300 w-fit rounded-3xl transition-all hover:-translate-y-1">
                    <p className="text-gray-600">Relationships</p>
                </div>
                <div className="px-3 py-1 border border-gray-300 w-fit rounded-3xl transition-all hover:-translate-y-1">
                    <p className="text-gray-600">Entertainment</p>
                </div>
                <div className="px-3 py-1 border border-gray-300 w-fit rounded-3xl transition-all hover:-translate-y-1">
                    <p className="text-gray-600">Cafeteria</p>
                </div>
                <div className="px-3 py-1 border border-gray-300 w-fit rounded-3xl transition-all hover:-translate-y-1">
                    <p className="text-gray-600">Sports</p>
                </div>
            </div>
            <div className="flex gap-2 px-6 mt-4 items-center max-sm:px-3">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-6 w-6 text-red-700">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.362 5.214A8.252 8.252 0 0 1 12 21 8.25 8.25 0 0 1 6.038 7.047 8.287 8.287 0 0 0 9 9.601a8.983 8.983 0 0 1 3.361-6.867 8.21 8.21 0 0 0 3 2.48Z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 18a3.75 3.75 0 0 0 .495-7.468 5.99 5.99 0 0 0-1.925 3.547 5.975 5.975 0 0 1-2.133-1.001A3.75 3.75 0 0 0 12 18Z" />
                </svg>
                <p className="text-xl">Trending Now</p>
            </div>
            <div className='grid grid-cols-2 gap-6 px-12 my-4 max-[840px]:px-4 max-[840px]:grid-cols-1'>
                {polls.map((poll) => (
                    <div key={poll.id} className='w-fit rounded-lg bg-white shadow-md p-6 max-w-115 max-[840px]:w-full'>
                        <div className=''>
                            <div className='grid grid-cols-[0.1fr_1fr] gap-x-2 items-center'>
                                <div className='h-8 w-8 font-extrabold font-sans text-blue-600 flex items-center justify-center bg-blue-100 rounded-full object-cover max-sm:w-8 max-sm:h-8' >
                                    <p className="text-[17px]">{poll.createdBy.charAt(0)}</p>
                                </div>
                                <div className='flex justify-between items-center '>
                                    <div>
                                        <p className='text-extrabold'>{poll.createdBy}</p>
                                        <p className='text-[14px] text-gray-600 font raleway'>Posted {Math.floor((new Date() - poll.createdAt.toDate()) / (1000 * 60 * 60))} hrs ago</p>
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
                                }} className={`w-100 h-10 bg-blue-50 flex items-center justify-between rounded-md max-sm:w-full ${lockedPolls[poll.id] ? "pointer-events-none bg-gray-100" : "cursor-pointer"
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