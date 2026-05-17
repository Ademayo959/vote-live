import logo from './assets/img/votelive-logo.png'
import { Link } from 'react-router-dom';
import { collection, getDocs, getCountFromServer } from "firebase/firestore";
import { useState, useEffect } from "react";
import { db } from "./firebase/firebase";
import { onAuthStateChanged } from "firebase/auth";
import { useNavigate } from "react-router-dom"
import { auth } from "./firebase/firebase"


const Adminmadeleye = () => {

    const navigate = useNavigate()
    // loading state
    const [isElementLoading, setIsElementLoading] = useState(true)

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user?.uid !== import.meta.env.VITE_ADMIN_UID) {
                navigate("/")
            } else {
                setIsElementLoading(false)
            }
        })
        return () => unsubscribe()
    }, [])
    //polls state
    let [polls, setpolls] = useState([])
    // users State
    const [users, setUsers] = useState([])
    // election total state
    const [electionTotal, setElectionTotal] = useState()
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

    async function getUsers() {
        try {
            let collectionRef = collection(db, "users")
            const snapshot = await getDocs(collectionRef)
            let users = snapshot.docs.map(doc => ({
                id: doc.id,
                ...doc.data()
            }))

            setUsers(users)
        } catch (err) {
            console.log("Error detected", err)
        }
    }


    async function getElectionTotal() {
        const electionsCount = await getCountFromServer(collection(db, "elections"))
        setElectionTotal(electionsCount.data().count)
    }


    useEffect(() => {
        getElectionTotal()
        getUsers()
        getPolls();
    }, [])

    if (isElementLoading) return <div>Loading...</div>
    return (
        <div className="px-5 max-w-7xl m-auto">
            <div className="flex justify-between items-center border-b border-gray-300 mb-8 py-2">
                <div className='max-sm:w-fit'>
                    <img src={logo} alt="logo" className='h-16 w-auto object-contain max-sm:h-12' />
                </div>
                <div>
                    <p className='font-raleway text-2xl'>ADMIN DASHBOARD</p>
                </div>
                <Link to="/dashboard">
                        <button className='font-raleway w-28 bg-custom-blue h-10 text-white font-extrabold rounded-md max-sm:w-18 max-sm:h-8 max-sm:text-[13px]'>Dashboard</button>
                </Link>
            </div>
            <div className="grid grid-cols-3 gap-3 max-sm:grid-cols-1">
                <div className="bg-white border border-gray-200 rounded-xl p-5 flex flex-col gap-3">
                    <div className="bg-blue-50 text-blue-600 w-9 h-9 rounded-lg flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z" />
                        </svg>
                    </div>
                    <div>
                        <p className="text-sm text-gray-500">Total Polls</p>
                        <p className="text-3xl font-medium">{polls.length}</p>
                    </div>
                    <p className="text-xs text-gray-400 mt-auto">Active on platform</p>
                </div>

                <div className="bg-white border border-gray-200 rounded-xl p-5 flex flex-col gap-3">
                    <div className="bg-emerald-50 text-emerald-700 w-9 h-9 rounded-lg flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z" />
                        </svg>
                    </div>
                    <div>
                        <p className="text-sm text-gray-500">Total Users</p>
                        <p className="text-3xl font-medium">{users.length}</p>
                    </div>
                    <p className="text-xs text-gray-400 mt-auto">Registered accounts</p>
                </div>

                <div className="bg-white border border-gray-200 rounded-xl p-5 flex flex-col gap-3">
                    <div className="bg-amber-50 text-amber-700 w-9 h-9 rounded-lg flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25Z" />
                        </svg>
                    </div>
                    <div>
                        <p className="text-sm text-gray-500">Total Elections</p>
                        <p className="text-3xl font-medium">{electionTotal}</p>
                    </div>
                    <p className="text-xs text-gray-400 mt-auto">Created so far</p>
                </div>

            </div>
        </div>
    );
}

export default Adminmadeleye;