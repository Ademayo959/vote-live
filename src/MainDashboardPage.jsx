const MainDashboardPage = ({ setactiveTab }) => {
     return (
          <div className="bg-accent-blue">
               <div className="border-b border-gray-300 bg-white pt-4">
                    <div className="flex justify-between px-6 pb-4">
                         <div className="flex gap-2 bg-gray-100 items-center rounded-md px-4 ">
                              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 text-gray-500">
                                   <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                              </svg>
                              <input type="text" className="outline-none w-72 font-raleway placeholder:text-raleway placeholder:text-sm" placeholder="Search Elections, polls, or candidates..." />
                         </div>
                         <div className="flex gap-4">
                              <div className='cursor-pointer p-2 border border-gray-300 w-10 flex items-center justify-center rounded-full h-10 text-gray-600'>
                                   <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-5 w-5">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0" />
                                   </svg>
                              </div>
                              <div className="flex cursor-pointer bg-custom-blue text-white w-40 h-11 items-center justify-center rounded-lg text-sm font-raleway gap-2">
                                   <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                                   </svg>
                                   <p>Host Elections</p>
                              </div>
                         </div>
                    </div>
               </div>
               <div className="grid grid-cols-[70%_30%] gap-6 mt-8 px-6">
                    <div>
                         <div className="flex justify-between font-raleway">
                              <p className="font-extrabold text-lg">Active Elections</p>
                              <p className="text-custom-blue underline text-sm cursor-pointer" onClick={() => { setactiveTab("ElectionsDashboard") }}>View All</p>
                         </div>
                         <div className="grid grid-cols-2 gap-10 mt-6">
                              <div className="border border-gray-300 h-60 w-90 rounded-lg grid grid-rows-2 shadow-lg">
                                   <div className="bg-gray-100 p-4 rounded-lg">
                                        <div className="bg-gray-900 w-14 rounded-2xl flex gap-1.5 items-center justify-center h-6 float-right">
                                             <div className="h-2 w-2 bg-red-500 rounded-full"></div>
                                             <p className="font-mono text-[10px] text-white">LIVE</p>
                                        </div>
                                   </div>
                                   <div className="grid grid-rows-3 gap-1 p-3">
                                        <div>
                                             <p className="text-lg">Student Union Presidency 2026</p>
                                        </div>
                                        <div className="flex gap-2 items-center font-raleway mb-3">
                                             <div className="flex items-center text-gray-500 gap-1">
                                                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                                                       <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z" />
                                                  </svg>
                                                  <p className="text-sm">11.7k Voted</p>
                                             </div>
                                             <div className="flex items-center text-gray-500 gap-1">
                                                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                                                       <path strokeLinecap="round" strokeLinejoin="round" d="m7.875 14.25 1.214 1.942a2.25 2.25 0 0 0 1.908 1.058h2.006c.776 0 1.497-.4 1.908-1.058l1.214-1.942M2.41 9h4.636a2.25 2.25 0 0 1 1.872 1.002l.164.246a2.25 2.25 0 0 0 1.872 1.002h2.092a2.25 2.25 0 0 0 1.872-1.002l.164-.246A2.25 2.25 0 0 1 16.954 9h4.636M2.41 9a2.25 2.25 0 0 0-.16.832V12a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 12V9.832c0-.287-.055-.57-.16-.832M2.41 9a2.25 2.25 0 0 1 .382-.632l3.285-3.832a2.25 2.25 0 0 1 1.708-.786h8.43c.657 0 1.281.287 1.709.786l3.284 3.832c.163.19.291.404.382.632M4.5 20.25h15A2.25 2.25 0 0 0 21.75 18v-2.625c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125V18a2.25 2.25 0 0 0 2.25 2.25Z" />
                                                  </svg>
                                                  <p className="text-sm">10 Positions</p>
                                             </div>
                                        </div>
                                        <div className="bg-soft-blue text-blue-900 flex justify-center items-center rounded-lg">
                                             <p>Ends in: 4h: 32m: 15s </p>
                                        </div>
                                   </div>
                              </div>
                              <div className="border border-gray-300 h-60 w-90 rounded-lg grid grid-rows-2 shadow-lg">
                                   <div className="bg-gray-100 p-4 rounded-lg">
                                        <div className="bg-gray-900 w-14 rounded-2xl flex gap-1.5 items-center justify-center h-6 float-right">
                                             <div className="h-2 w-2 bg-red-500 rounded-full"></div>
                                             <p className="font-mono text-[10px] text-white">LIVE</p>
                                        </div>
                                   </div>
                                   <div className="grid grid-rows-3 gap-1 p-3">
                                        <div>
                                             <p className="text-lg">ACOMS 2026 Executives</p>
                                        </div>
                                        <div className="flex gap-2 items-center font-raleway mb-3">
                                             <div className="flex items-center text-gray-500 gap-1">
                                                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                                                       <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z" />
                                                  </svg>
                                                  <p className="text-sm">540 Voted</p>
                                             </div>
                                             <div className="flex items-center text-gray-500 gap-1">
                                                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                                                       <path strokeLinecap="round" strokeLinejoin="round" d="m7.875 14.25 1.214 1.942a2.25 2.25 0 0 0 1.908 1.058h2.006c.776 0 1.497-.4 1.908-1.058l1.214-1.942M2.41 9h4.636a2.25 2.25 0 0 1 1.872 1.002l.164.246a2.25 2.25 0 0 0 1.872 1.002h2.092a2.25 2.25 0 0 0 1.872-1.002l.164-.246A2.25 2.25 0 0 1 16.954 9h4.636M2.41 9a2.25 2.25 0 0 0-.16.832V12a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 12V9.832c0-.287-.055-.57-.16-.832M2.41 9a2.25 2.25 0 0 1 .382-.632l3.285-3.832a2.25 2.25 0 0 1 1.708-.786h8.43c.657 0 1.281.287 1.709.786l3.284 3.832c.163.19.291.404.382.632M4.5 20.25h15A2.25 2.25 0 0 0 21.75 18v-2.625c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125V18a2.25 2.25 0 0 0 2.25 2.25Z" />
                                                  </svg>
                                                  <p className="text-sm">6 Positions</p>
                                             </div>
                                        </div>
                                        <div className="bg-soft-blue text-blue-900 flex justify-center items-center rounded-lg">
                                             <p>Ends in: 17h: 03m: 59s </p>
                                        </div>
                                   </div>
                              </div>
                              <div className="border border-gray-300 h-60 w-90 rounded-lg grid grid-rows-2 shadow-lg">
                                   <div className="bg-gray-100 p-4 rounded-lg">
                                        <div className="bg-gray-900 w-fit px-2 rounded-2xl flex gap-1.5 items-center justify-center h-6 float-right">
                                             <div className="h-2 w-2 bg-red-500 rounded-full"></div>
                                             <p className="font-mono text-[10px] text-white">LIVE</p>
                                        </div>
                                   </div>
                                   <div className="grid grid-rows-3 gap-1 p-3">
                                        <div>
                                             <p className="text-lg">NAOSS 2026 Executives</p>
                                        </div>
                                        <div className="flex gap-2 items-center font-raleway mb-3">
                                             <div className="flex items-center text-gray-500 gap-1">
                                                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                                                       <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z" />
                                                  </svg>
                                                  <p className="text-sm">36 Voted</p>
                                             </div>
                                             <div className="flex items-center text-gray-500 gap-1">
                                                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                                                       <path strokeLinecap="round" strokeLinejoin="round" d="m7.875 14.25 1.214 1.942a2.25 2.25 0 0 0 1.908 1.058h2.006c.776 0 1.497-.4 1.908-1.058l1.214-1.942M2.41 9h4.636a2.25 2.25 0 0 1 1.872 1.002l.164.246a2.25 2.25 0 0 0 1.872 1.002h2.092a2.25 2.25 0 0 0 1.872-1.002l.164-.246A2.25 2.25 0 0 1 16.954 9h4.636M2.41 9a2.25 2.25 0 0 0-.16.832V12a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 12V9.832c0-.287-.055-.57-.16-.832M2.41 9a2.25 2.25 0 0 1 .382-.632l3.285-3.832a2.25 2.25 0 0 1 1.708-.786h8.43c.657 0 1.281.287 1.709.786l3.284 3.832c.163.19.291.404.382.632M4.5 20.25h15A2.25 2.25 0 0 0 21.75 18v-2.625c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125V18a2.25 2.25 0 0 0 2.25 2.25Z" />
                                                  </svg>
                                                  <p className="text-sm">4 Positions</p>
                                             </div>
                                        </div>
                                        <div className="bg-soft-blue text-blue-900 flex justify-center items-center rounded-lg">
                                             <p>Ends in: 9h: 52m: 02s </p>
                                        </div>
                                   </div>
                              </div>
                         </div>
                         <div className="flex justify-between font-raleway my-6">
                              <p className="font-extrabold text-lg">Public Polls & Surveys</p>
                              <p className="underline text-custom-blue text-sm cursor-pointer">Browse All</p>
                         </div>
                         <div className="grid gap-6">
                              <div className="flex gap-4 items-start bg-white p-4 rounded-md w-fit">
                                   <div className="bg-gray-200  rounded-md w-12 h-12 flex justify-center items-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-gray-500">
                                             <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 21v-7.5a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 .75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349M3.75 21V9.349m0 0a3.001 3.001 0 0 0 3.75-.615A2.993 2.993 0 0 0 9.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 0 0 2.25 1.016c.896 0 1.7-.393 2.25-1.015a3.001 3.001 0 0 0 3.75.614m-16.5 0a3.004 3.004 0 0 1-.621-4.72l1.189-1.19A1.5 1.5 0 0 1 5.378 3h13.243a1.5 1.5 0 0 1 1.06.44l1.19 1.189a3 3 0 0 1-.621 4.72M6.75 18h3.75a.75.75 0 0 0 .75-.75V13.5a.75.75 0 0 0-.75-.75H6.75a.75.75 0 0 0-.75.75v3.75c0 .414.336.75.75.75Z" />
                                        </svg>
                                   </div>
                                   <div>
                                        <p>Which new cafteria do you prefer?</p>
                                        <div className="grid grid-cols-[25%_60%] gap-1.5 items-center my-1.5">
                                             <div>
                                                  <p className="text-[17px] font-raleway">Chikini Monie</p>
                                             </div>
                                             <div className="flex gap-2 items-center">
                                                  <div className="h-2 w-100 bg-blue-100 rounded-2xl">
                                                       <div className="h-2 w-62 bg-blue-400 rounded-2xl"></div>
                                                  </div>
                                                  <div>
                                                       <p>62%</p>
                                                  </div>
                                             </div>
                                        </div>
                                        <div className="grid grid-cols-[25%_60%] gap-1.5 items-center my-1.5">
                                             <div className="w-fit">
                                                  <p className="text-[17px] font-raleway">Savour Restaurant</p>
                                             </div>
                                             <div className="flex gap-2 items-center">
                                                  <div className="h-2 w-100 bg-gray-200 rounded-2xl">
                                                       <div className="h-2 w-36 bg-gray-400 rounded-2xl"></div>
                                                  </div>
                                                  <div>
                                                       <p>36%</p>
                                                  </div>
                                             </div>
                                        </div>
                                   </div>
                              </div>
                              <div className="flex gap-4 items-start bg-white p-4 rounded-md w-fit">
                                   <div className="bg-gray-200  rounded-md w-12 h-12 flex justify-center items-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-gray-500">
                                             <path strokeLinecap="round" strokeLinejoin="round" d="m9 9 10.5-3m0 6.553v3.75a2.25 2.25 0 0 1-1.632 2.163l-1.32.377a1.803 1.803 0 1 1-.99-3.467l2.31-.66a2.25 2.25 0 0 0 1.632-2.163Zm0 0V2.25L9 5.25v10.303m0 0v3.75a2.25 2.25 0 0 1-1.632 2.163l-1.32.377a1.803 1.803 0 0 1-.99-3.467l2.31-.66A2.25 2.25 0 0 0 9 15.553Z" />
                                        </svg>
                                   </div>
                                   <div>
                                        <p>Anime of the Year?</p>
                                        <div className="grid grid-cols-[25%_60%] gap-1.5 items-center my-1.5">
                                             <div>
                                                  <p className="text-[17px] font-raleway">Death Note 💀</p>
                                             </div>
                                             <div className="flex gap-2 items-center">
                                                  <div className="h-2 w-100 bg-blue-100 rounded-2xl">
                                                       <div className="h-2 w-57 bg-blue-400 rounded-2xl"></div>
                                                  </div>
                                                  <div>
                                                       <p>57%</p>
                                                  </div>
                                             </div>
                                        </div>
                                        <div className="grid grid-cols-[25%_60%] gap-1.5 items-center my-1.5">
                                             <div className="w-fit">
                                                  <p className="text-[17px] font-raleway">Chainsaw Man 🤖</p>
                                             </div>
                                             <div className="flex gap-2 items-center">
                                                  <div className="h-2 w-100 bg-gray-200 rounded-2xl">
                                                       <div className="h-2 w-43 bg-gray-400 rounded-2xl"></div>
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
                    <div className="flex flex-col gap-6">
                         <div className="bg-white py-6 px-6 w-76 rounded-2xl shadow-md cursor-pointer">
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
                         <div className="cursor-pointer rounded-xl shadow-lg w-76 py-6 px-6 bg-gray-100 text-center">
                              <p>Have an Issue?</p>
                              <p className="text-sm text-gray-400">Contact the electoral commitee or report irregularities.</p>
                              <div className="bg-white flex justify-center rounded-md my-2 h-8 items-center">
                                   <p className="text-sm">Contact Support</p>
                              </div>
                         </div>
                    </div>
               </div>
          </div>
     );
}

export default MainDashboardPage;