import { useEffect, useState } from "react"
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase/firebase";
import { db } from './firebase/firebase';
import { doc, getDoc } from 'firebase/firestore';
import HelpModal from "./HelpModal";

const HistoryDashboard = ({ setactiveTab }) => {
    const [isModalActive, setIsModalActive] = useState(false);

    //user info from the auth
    const [currentUser, setcurrentUser] = useState(null)
    const [userEmail, setuserEmail] = useState(null)

    //user info from firestore
    const [userName, setuserName] = useState("")
    const [userMatricNumber, setuserMatricNumber] = useState("")

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setcurrentUser(user)
                setuserEmail(user.email)
            } else {
                setcurrentUser(null)
            }
        });
        return () => unsubscribe();
    }, [])

    useEffect(() => {
        if (!currentUser) return;

        async function getUserDetails() {
            try {
                const reference = doc(db, "users", currentUser.uid);
                const snapshot = await getDoc(reference);
                const data = snapshot.data();
                setuserName(data.fullName)
                setuserMatricNumber(data.matricNumber)
            } catch (err) {
                console.log(err)
            }
        }
        getUserDetails();
    }, [currentUser])

    console.log(currentUser);

    return (
        <div>
            <div className='bg-white border-b border-gray-200 max-[840px]:hidden'>
                <div className='flex justify-between p-6'>
                    <div className='flex items-center gap-2'>
                        <p className="text-gray-500 cursor-pointer" onClick={() => setactiveTab("MainDashboardPage")}>Dashboard</p>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-4 w-4 text-gray-500">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                        </svg>
                        <p className="cursor-pointer">History & Settings</p>
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
            <div className="px-6 mt-4 max-sm:px-2 max-sm:pb-18">
                <h1 className="font-montserrat text-2xl font-extrabold">Voting History</h1>
                <p className="my-2 text-[15px] font-raleway text-gray-400">Track your past participation in Elections and polls</p>
                <div className="grid grid-cols-3 gap-x-10 max-sm:grid-cols-1 max-sm:gap-y-8 max-sm:px-2">
                    <div className="bg-white border border-gray-200 h-36 rounded-md p-6">
                        <p className="mb-3 text-gray-500">Total Votes Cast</p>
                        <p className="text-4xl">0</p>
                    </div>
                    <div className="bg-white border border-gray-200 h-36 rounded-md p-6">
                        <p className="mb-3 text-gray-500">Total Polls Voted In</p>
                        <p className="text-4xl">0</p>
                    </div>
                    <div className="bg-white border border-gray-200 h-36 rounded-md p-6">
                        <p className="mb-3 text-gray-500">Total Polls Created</p>
                        <p className="text-4xl">0</p>
                    </div>
                </div>
                <h1 className="font-montserrat text-2xl font-extrabold mt-4">Settings</h1>
                <p className="my-2 text-[15px] font-raleway text-gray-400">Manage your Digital Identity and Security</p>
                <div className="bg-white border border-gray-200 my-4 h-76 rounded-lg py-4 px-6 max-w-4xl max-sm:h-fit">
                    <p className="text-[22px]">Personal Information</p>
                    <p className="text-[14px] font-raleway text-gray-400">Update your contact details.</p>
                    <hr className="text-gray-200 my-3" />
                    <div className="grid grid-cols-2 gap-y-4 max-sm:grid-cols-1">
                        <div>
                            <p className="text-gray-600 text-[14px] font-extrabold">Full Name</p>
                            <input value={userName} type="text" className="bg-white border border-gray-300 h-8 w-72 rounded-sm outline-0 px-3 text-[14px]" />
                        </div>
                        <div>
                            <p className="text-gray-600 text-[14px] font-extrabold">Email Address</p>
                            <input value={userEmail} type="text" className="bg-white border border-gray-300 h-8 w-72 rounded-sm outline-0 px-3 text-[14px]" />
                        </div>
                        <div>
                            <p className="text-gray-600 text-[14px] font-extrabold">Matric Number</p>
                            <input value={userMatricNumber} type="text" className="bg-white border border-gray-300 h-8 w-72 rounded-sm outline-0 px-3 text-[14px]" />
                        </div>
                        <div>
                            <p className="text-gray-600 text-[14px] font-extrabold">Phone Number</p>
                            <input type="text" className="bg-white border border-gray-300 h-8 w-72 rounded-sm outline-0 px-3 text-[14px]" />
                        </div>
                    </div>
                    <div className="mt-4 flex cursor-pointer bg-custom-blue text-white w-32 h-9 px-2 items-center justify-center rounded-lg text-sm font-raleway gap-2">
                        <p>Save Changes</p>
                    </div>
                </div>
            </div>
            {isModalActive && (
                <div className="fixed inset-0 bg-black/70 z-99" onClick={() => setIsModalActive(false)}>
                    <HelpModal setIsModalActive={setIsModalActive} onClose={() => setIsModalActive(false)} />
                </div>
            )}
        </div>
    );
}

export default HistoryDashboard;