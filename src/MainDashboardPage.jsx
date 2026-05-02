import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import CreateElectionModal from "./CreateElectionModal"
import { collection, getDocs, getDoc, doc } from "firebase/firestore"
import { db } from "./firebase/firebase"
import { auth } from "./firebase/firebase"


const MainDashboardPage = ({ setactiveTab }) => {
     const [isCreateElectionModal, setIsCreateElectionModal] = useState(false)

     const [elections, setelections] = useState([])
     const [eligibleElections, setEligibleElections] = useState([])

     async function getElections() {
          try {
               let collectionRef = collection(db, "elections")
               const snapshot = await getDocs(collectionRef)
               const electionArray = snapshot.docs.map((doc) => ({
                    id: doc.id,
                    ...doc.data()
               }))

               const Userreference = doc(db, "users", auth.currentUser.uid)
               const Usersnapshot = await getDoc(Userreference)
               let Userdata = Usersnapshot.data();
               const eligibleElections = electionArray.filter(election =>
                    election.eligibleVoters.includes(Userdata.matricNumber)
               )

               setelections(electionArray)
               setEligibleElections(eligibleElections)
          } catch (err) {
               console.log("Error detected:", err)
          }
     }

     useEffect(() => {
          getElections()
     }, [])


     return (
          <div className="bg-accent-blue">
               <div className="border-b border-gray-300 bg-white pt-4">
                    <div className="flex justify-between px-6 pb-4 max-sm:px-3 max-sm:gap-6">
                         <div className="flex gap-2  bg-gray-100 items-center rounded-md px-4 max-sm:px-1.5 max-sm:w-full">
                              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 text-gray-500 max-sm:w-5">
                                   <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                              </svg>
                              <input type="text" className="outline-none flex-1 font-raleway placeholder:text-raleway placeholder:text-sm max-md:w-full max-sm:text-[13px]" placeholder="Search Elections, polls, or candidates..." />
                         </div>
                         <div className="flex gap-4">
                              <div className='cursor-pointer p-2 border border-gray-300 w-10 flex items-center justify-center rounded-full h-10 text-gray-600 max-sm:hidden'>
                                   <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-5 w-5">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0" />
                                   </svg>
                              </div>
                              <div onClick={() => { setIsCreateElectionModal(true) }} className="flex cursor-pointer bg-custom-blue text-white w-40 h-11 items-center justify-center rounded-lg text-sm font-raleway gap-2 max-sm:w-30 max-sm:text-[13px] max-sm:gap-1 max-sm:h-8">
                                   <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 max-sm:w-5">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                                   </svg>
                                   <p>Host Elections</p>
                              </div>
                         </div>
                    </div>
               </div>
               <div className="grid grid-cols-[70%_30%] gap-6 mt-8 px-6 max-[840px]:grid-cols-[55%_20%] max-[840px]:overflow-x-hidden max-sm:grid-cols-1 max-sm:justify-self-center max-sm:px-4 max-sm:w-full">
                    <div>
                         <div className="flex justify-between font-raleway max-sm:px-0">
                              <p className="font-extrabold text-lg">Active Elections</p>
                              <p className="text-custom-blue underline text-sm cursor-pointer" onClick={() => { setactiveTab("ElectionsDashboard") }}>View All</p>
                         </div>
                         <div className="grid grid-cols-2 gap-10 mt-6 max-[840px]:grid-cols-1 max-md:grid-cols-1 max-sm:justify-self-center max-sm:w-full">
                              {elections.sort((a, b) => { b.totalVotes - a.totalVotes }).slice(0, 4).map((election) => (
                                   <div key={election.id} className="border border-gray-300 h-60 w-90 rounded-lg grid grid-rows-2 shadow-lg max-sm:w-full">
                                        <div className="bg-gray-100 p-4 rounded-lg">
                                             <div className="bg-gray-900 w-14 rounded-2xl flex gap-1.5 items-center justify-center h-6 float-right">
                                                  <div className="h-2 w-2 bg-red-500 rounded-full"></div>
                                                  <p className="font-mono text-[10px] text-white">LIVE</p>
                                             </div>
                                        </div>
                                        <div className="grid grid-rows-3 gap-1 p-3">
                                             <div>
                                                  <p className="text-lg">{election.title}</p>
                                             </div>
                                             <div className="flex gap-2 items-center font-raleway mb-3">
                                                  <div className="flex items-center text-gray-500 gap-1">
                                                       {/* voters icon */}
                                                       <p className="text-sm">{election.totalVotes} Voted</p>
                                                  </div>
                                                  <div className="flex items-center text-gray-500 gap-1">
                                                       {/* positions icon */}
                                                       <p className="text-sm">{election.positions.length} Positions</p>
                                                  </div>
                                             </div>
                                             <div className="flex gap-4 items-center">
                                                  <div className="bg-soft-blue w-[60%] text-blue-900 flex h-8 justify-center items-center rounded-lg">
                                                       <p className="text-sm">Ends in: {election.duration} days</p>
                                                  </div>
                                                  <Link to={`/election/${election.id}`}>
                                                       <div className="flex gap-2 items-center text-[15px] text-custom-blue font-extrabold hover:gap-4 transition-all">
                                                            <p className="font-raleway">Vote Now</p>
                                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                                                                 <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                                                            </svg>
                                                       </div>
                                                  </Link>
                                             </div>
                                        </div>
                                   </div>
                              ))}
                         </div>
                         <div className="flex justify-between mt-8 font-raleway max-sm:px-0">
                              <p className="font-extrabold text-lg">Your Elections</p>
                              <p className="text-custom-blue underline text-sm cursor-pointer" onClick={() => { setactiveTab("ElectionsDashboard") }}>View All</p>
                         </div>
                         <div className="grid grid-cols-2 gap-10 mt-6 max-[840px]:grid-cols-1 max-md:grid-cols-1 max-sm:justify-self-center max-sm:w-full">
                              {eligibleElections.length > 0 ? (eligibleElections.sort((a, b) => { b.totalVotes - a.totalVotes }).slice(0, 4).map((election) => (
                                   <div key={election.id} className="border border-gray-300 h-60 w-90 rounded-lg grid grid-rows-2 shadow-lg max-sm:w-full">
                                        <div className="bg-gray-100 p-4 rounded-lg">
                                             <div className="bg-gray-900 w-14 rounded-2xl flex gap-1.5 items-center justify-center h-6 float-right">
                                                  <div className="h-2 w-2 bg-red-500 rounded-full"></div>
                                                  <p className="font-mono text-[10px] text-white">LIVE</p>
                                             </div>
                                        </div>
                                        <div className="grid grid-rows-3 gap-1 p-3">
                                             <div>
                                                  <p className="text-lg">{election.title}</p>
                                             </div>
                                             <div className="flex gap-2 items-center font-raleway mb-3">
                                                  <div className="flex items-center text-gray-500 gap-1">
                                                       {/* voters icon */}
                                                       <p className="text-sm">{election.totalVotes} Voted</p>
                                                  </div>
                                                  <div className="flex items-center text-gray-500 gap-1">
                                                       {/* positions icon */}
                                                       <p className="text-sm">{election.positions.length} Positions</p>
                                                  </div>
                                             </div>
                                             <div className="flex gap-4 items-center">
                                                  <div className="bg-soft-blue w-[60%] text-blue-900 flex h-8 justify-center items-center rounded-lg">
                                                       <p className="text-sm">Ends in: {election.duration} days</p>
                                                  </div>
                                                  <Link to={`/election/${election.id}`}>
                                                       <div className="flex gap-2 items-center text-[15px] text-custom-blue font-extrabold hover:gap-4 transition-all">
                                                            <p className="font-raleway">Vote Now</p>
                                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                                                                 <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                                                            </svg>
                                                       </div>
                                                  </Link>
                                             </div>
                                        </div>
                                   </div>
                              ))) : (
                                   <div className="w-full bg-white p-2 flex-col text-center justify-center rounded-lg">
                                        <p className="font-sanc font-semibold text-[16px] text-gray-700">No elections available for you yet</p>
                                        <div className="bg-gray-200 w-fit px-2 py-1 justify-self-center my-2 rounded-lg">
                                             Create an Election
                                        </div>
                                   </div>
                              )}
                         </div>
                         <div className="flex justify-between font-raleway my-6 max-sm:px-4">
                              <p className="font-extrabold text-lg">Public Polls & Surveys</p>
                              <p className="underline text-custom-blue text-sm cursor-pointer">Browse All</p>
                         </div>
                         <div className="grid gap-6">
                              <div className="flex gap-4 items-start bg-white p-4 rounded-md w-full max-[840px]:grid max-sm:p-3">
                                   <div className="bg-gray-200  rounded-md w-12 h-12 flex justify-center items-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-gray-500">
                                             <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 21v-7.5a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 .75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349M3.75 21V9.349m0 0a3.001 3.001 0 0 0 3.75-.615A2.993 2.993 0 0 0 9.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 0 0 2.25 1.016c.896 0 1.7-.393 2.25-1.015a3.001 3.001 0 0 0 3.75.614m-16.5 0a3.004 3.004 0 0 1-.621-4.72l1.189-1.19A1.5 1.5 0 0 1 5.378 3h13.243a1.5 1.5 0 0 1 1.06.44l1.19 1.189a3 3 0 0 1-.621 4.72M6.75 18h3.75a.75.75 0 0 0 .75-.75V13.5a.75.75 0 0 0-.75-.75H6.75a.75.75 0 0 0-.75.75v3.75c0 .414.336.75.75.75Z" />
                                        </svg>
                                   </div>
                                   <div className="w-full">
                                        <p>Which new cafteria do you prefer?</p>
                                        <div className="grid grid-cols-[25%_60%] gap-1.5 items-center my-1.5 max-sm:gap-1 max-sm:grid-cols-1">
                                             <div>
                                                  <p className="text-[17px] font-raleway max-sm:text-[15px]">Chikini Monie</p>
                                             </div>
                                             <div className="flex gap-2 items-center w-full">
                                                  <div className="h-2 w-full bg-blue-100 rounded-2xl">
                                                       <div className="h-2 w-[62%] bg-blue-400 rounded-2xl"></div>
                                                  </div>
                                                  <div>
                                                       <p>62%</p>
                                                  </div>
                                             </div>
                                        </div>
                                        <div className="grid grid-cols-[25%_60%] gap-1.5 items-center my-1.5 max-sm:gap-1 max-sm:grid-cols-1">
                                             <div className="w-fit">
                                                  <p className="text-[17px] font-raleway max-sm:text-[15px]">Savour Restaurant</p>
                                             </div>
                                             <div className="flex gap-2 items-center w-full">
                                                  <div className="h-2 w-full bg-gray-200 rounded-2xl">
                                                       <div className="h-2 w-[36%] bg-gray-400 rounded-2xl"></div>
                                                  </div>
                                                  <div>
                                                       <p>36%</p>
                                                  </div>
                                             </div>
                                        </div>
                                   </div>
                              </div>
                              <div className="flex gap-4 items-start bg-white p-4 rounded-md w-full max-[840px]:grid max-sm:p-3">
                                   <div className="bg-gray-200  rounded-md w-12 h-12 flex justify-center items-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-gray-500">
                                             <path strokeLinecap="round" strokeLinejoin="round" d="m9 9 10.5-3m0 6.553v3.75a2.25 2.25 0 0 1-1.632 2.163l-1.32.377a1.803 1.803 0 1 1-.99-3.467l2.31-.66a2.25 2.25 0 0 0 1.632-2.163Zm0 0V2.25L9 5.25v10.303m0 0v3.75a2.25 2.25 0 0 1-1.632 2.163l-1.32.377a1.803 1.803 0 0 1-.99-3.467l2.31-.66A2.25 2.25 0 0 0 9 15.553Z" />
                                        </svg>
                                   </div>
                                   <div className="w-full">
                                        <p>Anime of the Year?</p>
                                        <div className="grid grid-cols-[25%_60%] gap-1.5 items-center my-1.5 max-sm:gap-1 max-sm:grid-cols-1">
                                             <div>
                                                  <p className="text-[17px] font-raleway max-sm:text-[15px]">Death Note 💀</p>
                                             </div>
                                             <div className="flex gap-2 items-center w-full">
                                                  <div className="h-2 w-full bg-blue-100 rounded-2xl">
                                                       <div className="h-2 w-[57%] bg-blue-400 rounded-2xl"></div>
                                                  </div>
                                                  <div>
                                                       <p>57%</p>
                                                  </div>
                                             </div>
                                        </div>
                                        <div className="grid grid-cols-[25%_60%] gap-1.5 items-center my-1.5 max-sm:gap-1 max-sm:grid-cols-1">
                                             <div className="w-fit">
                                                  <p className="text-[17px] font-raleway max-sm:text-[15px]">Chainsaw Man 🤖</p>
                                             </div>
                                             <div className="flex gap-2 items-center w-full">
                                                  <div className="h-2 w-full bg-gray-200 rounded-2xl">
                                                       <div className="h-2 w-[43%] bg-gray-400 rounded-2xl"></div>
                                                  </div>
                                                  <div>
                                                       <p>43%</p>
                                                  </div>
                                             </div>
                                        </div>
                                   </div>
                              </div>
                         </div>
                    </div>
                    <div className="flex flex-col gap-6 max-sm:justify-self-center max-sm:w-full max-sm:mb-12">
                         <div className="bg-white py-6 px-6 w-76 rounded-2xl shadow-md cursor-pointer max-sm:w-full">
                              <h1 className="font-extrabold text-lg font-raleway">Trending Elections</h1>
                              <div className="mt-6 flex flex-col gap-2">
                                   <div className="flex gap-6 items-center border-b border-gray-300 py-2">
                                        <p className="text-xl text-gray-500">1</p>
                                        <div className="font-raleway text-sm">
                                             <p className="font-extrabold">Student Union Presidency 2026</p>
                                             <p className="font-light text-gray-400">12.3k Participants</p>
                                        </div>
                                   </div>
                                   <div className="flex gap-6 items-center border-b border-gray-300 py-2">
                                        <p className="text-xl text-gray-500">2</p>
                                        <div className="font-raleway text-sm">
                                             <p className="font-extrabold">Miss Campus 2026</p>
                                             <p className="font-light text-gray-400">12.3k Participants</p>
                                        </div>
                                   </div>
                                   <div className="flex gap-6 items-center border-b border-gray-300 py-2">
                                        <p className="text-xl text-gray-500">3</p>
                                        <div className="font-raleway text-sm">
                                             <p className="font-extrabold">FUTA Got Talent 2026</p>
                                             <p className="font-light text-gray-400">12.3k Participants</p>
                                        </div>
                                   </div>
                              </div>
                         </div>
                         <div className="cursor-pointer rounded-xl shadow-lg w-76 py-6 px-6 bg-gray-100 text-center max-sm:w-full">
                              <p>Have an Issue?</p>
                              <p className="text-sm text-gray-400">Contact the electoral commitee or report irregularities.</p>
                              <Link to="/help">
                                   <div className="bg-white flex justify-center rounded-md my-2 h-8 items-center">
                                        <p className="text-sm">Contact Support</p>
                                   </div>
                              </Link>
                         </div>
                         <div className="cursor-pointer rounded-xl shadow-lg w-76 py-6 px-6 bg-gray-100 text-center max-sm:w-full">
                              <p>Have an Suggestion?</p>
                              <p className="text-sm text-gray-400">Tell us what it is.</p>
                              <div className="bg-white flex justify-center rounded-md my-2 h-8 items-center">
                                   <p className="text-sm">Suggest a Feature</p>
                              </div>
                         </div>
                    </div>
               </div>
               {isCreateElectionModal && (
                    <div className="fixed inset-0 bg-black/70 z-99" onClick={() => setIsCreateElectionModal(false)}>
                         <CreateElectionModal setIsCreateElectionModal={setIsCreateElectionModal} onClose={() => setIsCreateElectionModal(false)} />
                    </div>
               )}
          </div>
     );
}

export default MainDashboardPage;