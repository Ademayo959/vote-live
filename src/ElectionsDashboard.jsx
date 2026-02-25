const ElectionsDashboard = ({ setactiveTab }) => {
    let ActiveElections = 3
    return (
        <div>
            <div className='bg-white border-b border-gray-200'>
                <div className='flex justify-between p-6'>
                    <div className='flex items-center gap-2'>
                        <p className="text-gray-500 cursor-pointer" onClick={() => setactiveTab("MainDashboardPage")}>Dashboard</p>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-4 w-4 text-gray-500">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                        </svg>
                        <p className="cursor-pointer">Elections</p>
                    </div>
                    <div className='flex gap-4'>
                        <div className='cursor-pointer p-2 border border-gray-300 w-10 flex items-center justify-center rounded-full h-10 text-gray-600'>
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
            <div className="px-6 mt-4">
                <div className="flex justify-between">
                    <div>
                        <p className="font-extrabold text-2xl font-montserrat">Elections</p>
                        <p className="text-gray-500 font-raleway font-extralight">View elections, vote for candidates, or create your own.</p>
                    </div>
                    <div>
                        <div className="flex cursor-pointer bg-custom-blue text-white w-40 h-10 px-2 items-center justify-center rounded-lg text-sm font-raleway gap-2">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                            </svg>
                            <p>Create Elections</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mx-6 my-6">
                <div className="flex gap-6">
                    <div className="flex gap-2 bg-white border border-gray-300 items-center rounded-md px-4 py-2 w-[80%]">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 text-gray-500">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                        </svg>
                        <input type="text" className="outline-none w-[99%] font-raleway placeholder:text-raleway placeholder:text-sm" placeholder="Search by Election Name, ID or Department...." />
                    </div>
                    <div className="flex gap-2 w-24 border bg-white border-gray-300 items-center justify-center text-gray-600 rounded-md">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 3c2.755 0 5.455.232 8.083.678.533.09.917.556.917 1.096v1.044a2.25 2.25 0 0 1-.659 1.591l-5.432 5.432a2.25 2.25 0 0 0-.659 1.591v2.927a2.25 2.25 0 0 1-1.244 2.013L9.75 21v-6.568a2.25 2.25 0 0 0-.659-1.591L3.659 7.409A2.25 2.25 0 0 1 3 5.818V4.774c0-.54.384-1.006.917-1.096A48.32 48.32 0 0 1 12 3Z" />
                        </svg>
                        <p>Filters</p>
                    </div>
                    <div className="flex gap-2 w-24 border bg-white border-gray-300 items-center justify-center text-gray-600 rounded-md">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 13.5V3.75m0 9.75a1.5 1.5 0 0 1 0 3m0-3a1.5 1.5 0 0 0 0 3m0 3.75V16.5m12-3V3.75m0 9.75a1.5 1.5 0 0 1 0 3m0-3a1.5 1.5 0 0 0 0 3m0 3.75V16.5m-6-9V3.75m0 3.75a1.5 1.5 0 0 1 0 3m0-3a1.5 1.5 0 0 0 0 3m0 9.75V10.5" />
                        </svg>
                        <p>Sort</p>
                    </div>
                </div>
                <div className="mt-8 grid grid-cols-3 gap-y-6">
                    <div className="border border-gray-300 h-60 w-86 rounded-lg grid grid-rows-2 shadow-md">
                        <div className="bg-gray-100 rounded-lg p-4">
                            <div className="bg-white w-14 rounded-2xl flex gap-1.5 items-center justify-center h-6 float-right">
                                <div className="h-2 w-2 bg-red-500 rounded-full"></div>
                                <p className="font-mono text-[10px] text-red-500">LIVE</p>
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
                            <div className="flex gap-4 items-center">
                                <div className="bg-soft-blue w-[60%] text-blue-900 flex h-8 justify-center items-center rounded-lg">
                                    <p className="text-sm">Ends in: 17h: 03m: 59s </p>
                                </div>
                                <div className="flex gap-2 items-center text-[15px] text-custom-blue font-extrabold hover:gap-4 transition-all">
                                    <p className="font-raleway">Vote Now</p>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="border border-gray-300 h-60 w-86 rounded-lg grid grid-rows-2 shadow-md">
                        <div className="bg-gray-100 p-4 rounded-lg">
                            <div className="bg-white w-14 rounded-2xl flex gap-1.5 items-center justify-center h-6 float-right">
                                <div className="h-2 w-2 bg-red-500 rounded-full"></div>
                                <p className="font-mono text-[10px] text-red-500">LIVE</p>
                            </div>
                        </div>
                        <div className="grid grid-rows-3 gap-1 p-3">
                            <div>
                                <p className="text-lg">IFT CLASS 29 Rep</p>
                            </div>
                            <div className="flex gap-2 items-center font-raleway mb-3">
                                <div className="flex items-center text-gray-500 gap-1">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z" />
                                    </svg>
                                    <p className="text-sm">24 Voted</p>
                                </div>
                                <div className="flex items-center text-gray-500 gap-1">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="m7.875 14.25 1.214 1.942a2.25 2.25 0 0 0 1.908 1.058h2.006c.776 0 1.497-.4 1.908-1.058l1.214-1.942M2.41 9h4.636a2.25 2.25 0 0 1 1.872 1.002l.164.246a2.25 2.25 0 0 0 1.872 1.002h2.092a2.25 2.25 0 0 0 1.872-1.002l.164-.246A2.25 2.25 0 0 1 16.954 9h4.636M2.41 9a2.25 2.25 0 0 0-.16.832V12a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 12V9.832c0-.287-.055-.57-.16-.832M2.41 9a2.25 2.25 0 0 1 .382-.632l3.285-3.832a2.25 2.25 0 0 1 1.708-.786h8.43c.657 0 1.281.287 1.709.786l3.284 3.832c.163.19.291.404.382.632M4.5 20.25h15A2.25 2.25 0 0 0 21.75 18v-2.625c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125V18a2.25 2.25 0 0 0 2.25 2.25Z" />
                                    </svg>
                                    <p className="text-sm">1 Position</p>
                                </div>
                            </div>
                            <div className="flex gap-4 items-center">
                                <div className="bg-soft-blue w-[60%] text-blue-900 flex h-8 justify-center items-center rounded-lg">
                                    <p className="text-sm">Ends in: 23h: 49m: 09s </p>
                                </div>
                                <div className="flex gap-2 text-[15px] items-center text-custom-blue font-extrabold hover:gap-4 transition-all">
                                    <p className="font-raleway">Vote Now</p>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="border border-gray-300 h-60 w-86 rounded-lg grid grid-rows-2 shadow-md">
                        <div className="bg-gray-100 p-4 rounded-lg">
                            <div className="bg-white w-14 rounded-2xl flex gap-1.5 items-center justify-center h-6 float-right">
                                <div className="h-2 w-2 bg-red-500 rounded-full"></div>
                                <p className="font-mono text-[10px] text-red-500">LIVE</p>
                            </div>
                        </div>
                        <div className="grid grid-rows-3 gap-1 p-3">
                            <div>
                                <p className="text-lg">SPS Governorship Election</p>
                            </div>
                            <div className="flex gap-2 items-center font-raleway mb-3">
                                <div className="flex items-center text-gray-500 gap-1">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z" />
                                    </svg>
                                    <p className="text-sm">114 Voted</p>
                                </div>
                                <div className="flex items-center text-gray-500 gap-1">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="m7.875 14.25 1.214 1.942a2.25 2.25 0 0 0 1.908 1.058h2.006c.776 0 1.497-.4 1.908-1.058l1.214-1.942M2.41 9h4.636a2.25 2.25 0 0 1 1.872 1.002l.164.246a2.25 2.25 0 0 0 1.872 1.002h2.092a2.25 2.25 0 0 0 1.872-1.002l.164-.246A2.25 2.25 0 0 1 16.954 9h4.636M2.41 9a2.25 2.25 0 0 0-.16.832V12a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 12V9.832c0-.287-.055-.57-.16-.832M2.41 9a2.25 2.25 0 0 1 .382-.632l3.285-3.832a2.25 2.25 0 0 1 1.708-.786h8.43c.657 0 1.281.287 1.709.786l3.284 3.832c.163.19.291.404.382.632M4.5 20.25h15A2.25 2.25 0 0 0 21.75 18v-2.625c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125V18a2.25 2.25 0 0 0 2.25 2.25Z" />
                                    </svg>
                                    <p className="text-sm">2 Positions</p>
                                </div>
                            </div>
                            <div className="flex gap-4 items-center">
                                <div className="bg-soft-blue w-[60%] text-blue-900 flex h-8 justify-center items-center rounded-lg">
                                    <p className="text-sm">Ends in: 07h: 12m: 29s </p>
                                </div>
                                <div className="flex gap-2 items-center text-[15px] text-custom-blue font-extrabold hover:gap-4 transition-all">
                                    <p className="font-raleway">Vote Now</p>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="border border-gray-300 h-60 w-86 rounded-lg grid grid-rows-2 shadow-md">
                        <div className="bg-gray-100 p-4 rounded-lg">
                            <div className="bg-white w-14 rounded-2xl flex gap-1.5 items-center justify-center h-6 float-right">
                                <div className="h-2 w-2 bg-red-500 rounded-full"></div>
                                <p className="font-mono text-[10px] text-red-500">LIVE</p>
                            </div>
                        </div>
                        <div className="grid grid-rows-3 gap-1 p-3">
                            <div>
                                <p className="text-lg">NAOSS Executives Election</p>
                            </div>
                            <div className="flex gap-2 items-center font-raleway mb-3">
                                <div className="flex items-center text-gray-500 gap-1">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z" />
                                    </svg>
                                    <p className="text-sm">56 Voted</p>
                                </div>
                                <div className="flex items-center text-gray-500 gap-1">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="m7.875 14.25 1.214 1.942a2.25 2.25 0 0 0 1.908 1.058h2.006c.776 0 1.497-.4 1.908-1.058l1.214-1.942M2.41 9h4.636a2.25 2.25 0 0 1 1.872 1.002l.164.246a2.25 2.25 0 0 0 1.872 1.002h2.092a2.25 2.25 0 0 0 1.872-1.002l.164-.246A2.25 2.25 0 0 1 16.954 9h4.636M2.41 9a2.25 2.25 0 0 0-.16.832V12a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 12V9.832c0-.287-.055-.57-.16-.832M2.41 9a2.25 2.25 0 0 1 .382-.632l3.285-3.832a2.25 2.25 0 0 1 1.708-.786h8.43c.657 0 1.281.287 1.709.786l3.284 3.832c.163.19.291.404.382.632M4.5 20.25h15A2.25 2.25 0 0 0 21.75 18v-2.625c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125V18a2.25 2.25 0 0 0 2.25 2.25Z" />
                                    </svg>
                                    <p className="text-sm">8 Positions</p>
                                </div>
                            </div>
                            <div className="flex gap-4 items-center">
                                <div className="bg-soft-blue w-[60%] text-blue-900 flex h-8 justify-center items-center rounded-lg">
                                    <p className="text-sm">Ends in: 00h: 43m: 01s </p>
                                </div>
                                <div className="flex gap-2 items-center text-[15px] text-custom-blue font-extrabold hover:gap-4 transition-all">
                                    <p className="font-raleway">Vote Now</p>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="border border-gray-300 h-60 w-86 rounded-lg grid grid-rows-2 shadow-md">
                        <div className="bg-gray-100 p-4 rounded-lg">
                            <div className="bg-white w-14 rounded-2xl flex gap-1.5 items-center justify-center h-6 float-right">
                                <div className="h-2 w-2 bg-red-500 rounded-full"></div>
                                <p className="font-mono text-[10px] text-red-500">LIVE</p>
                            </div>
                        </div>
                        <div className="grid grid-rows-3 gap-1 p-3">
                            <div>
                                <p className="text-lg">NUESA 2026 Executives</p>
                            </div>
                            <div className="flex gap-2 items-center font-raleway mb-3">
                                <div className="flex items-center text-gray-500 gap-1">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z" />
                                    </svg>
                                    <p className="text-sm">5.2k Voted</p>
                                </div>
                                <div className="flex items-center text-gray-500 gap-1">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="m7.875 14.25 1.214 1.942a2.25 2.25 0 0 0 1.908 1.058h2.006c.776 0 1.497-.4 1.908-1.058l1.214-1.942M2.41 9h4.636a2.25 2.25 0 0 1 1.872 1.002l.164.246a2.25 2.25 0 0 0 1.872 1.002h2.092a2.25 2.25 0 0 0 1.872-1.002l.164-.246A2.25 2.25 0 0 1 16.954 9h4.636M2.41 9a2.25 2.25 0 0 0-.16.832V12a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 12V9.832c0-.287-.055-.57-.16-.832M2.41 9a2.25 2.25 0 0 1 .382-.632l3.285-3.832a2.25 2.25 0 0 1 1.708-.786h8.43c.657 0 1.281.287 1.709.786l3.284 3.832c.163.19.291.404.382.632M4.5 20.25h15A2.25 2.25 0 0 0 21.75 18v-2.625c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125V18a2.25 2.25 0 0 0 2.25 2.25Z" />
                                    </svg>
                                    <p className="text-sm">10 Positions</p>
                                </div>
                            </div>
                            <div className="flex gap-4 items-center">
                                <div className="bg-soft-blue w-[60%] text-blue-900 flex h-8 justify-center items-center rounded-lg">
                                    <p className="text-sm">Ends in: 17h: 03m: 59s </p>
                                </div>
                                <div className="flex gap-2 items-center text-[15px] text-custom-blue font-extrabold hover:gap-4 transition-all">
                                    <p className="font-raleway">Vote Now</p>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="border border-gray-300 h-60 w-86 rounded-lg grid grid-rows-2 shadow-md">
                        <div className="bg-gray-100 p-4 rounded-lg">
                            <div className="bg-white w-14 rounded-2xl flex gap-1.5 items-center justify-center h-6 float-right">
                                <div className="h-2 w-2 bg-red-500 rounded-full"></div>
                                <p className="font-mono text-[10px] text-red-500">LIVE</p>
                            </div>
                        </div>
                        <div className="grid grid-rows-3 gap-1 p-3">
                            <div>
                                <p className="text-lg">MBBS'29 Course Representatives</p>
                            </div>
                            <div className="flex gap-2 items-center font-raleway mb-3">
                                <div className="flex items-center text-gray-500 gap-1">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z" />
                                    </svg>
                                    <p className="text-sm">19 Voted</p>
                                </div>
                                <div className="flex items-center text-gray-500 gap-1">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="m7.875 14.25 1.214 1.942a2.25 2.25 0 0 0 1.908 1.058h2.006c.776 0 1.497-.4 1.908-1.058l1.214-1.942M2.41 9h4.636a2.25 2.25 0 0 1 1.872 1.002l.164.246a2.25 2.25 0 0 0 1.872 1.002h2.092a2.25 2.25 0 0 0 1.872-1.002l.164-.246A2.25 2.25 0 0 1 16.954 9h4.636M2.41 9a2.25 2.25 0 0 0-.16.832V12a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 12V9.832c0-.287-.055-.57-.16-.832M2.41 9a2.25 2.25 0 0 1 .382-.632l3.285-3.832a2.25 2.25 0 0 1 1.708-.786h8.43c.657 0 1.281.287 1.709.786l3.284 3.832c.163.19.291.404.382.632M4.5 20.25h15A2.25 2.25 0 0 0 21.75 18v-2.625c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125V18a2.25 2.25 0 0 0 2.25 2.25Z" />
                                    </svg>
                                    <p className="text-sm">2 Positions</p>
                                </div>
                            </div>
                            <div className="flex gap-4 items-center">
                                <div className="bg-soft-blue w-[60%] text-blue-900 flex h-8 justify-center items-center rounded-lg">
                                    <p className="text-sm">Ends in: 20h: 20m: 19s </p>
                                </div>
                                <div className="flex gap-2 items-center text-[15px] text-custom-blue font-extrabold hover:gap-4 transition-all">
                                    <p className="font-raleway">Vote Now</p>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="border border-gray-300 h-60 w-86 rounded-lg grid grid-rows-2 shadow-md">
                        <div className="bg-gray-100 p-4 rounded-lg">
                            <div className="bg-white w-14 rounded-2xl flex gap-1.5 items-center justify-center h-6 float-right">
                                <div className="h-2 w-2 bg-red-500 rounded-full"></div>
                                <p className="font-mono text-[10px] text-red-500">LIVE</p>
                            </div>
                        </div>
                        <div className="grid grid-rows-3 gap-1 p-3">
                            <div>
                                <p className="text-lg">MCE 2026 Executives</p>
                            </div>
                            <div className="flex gap-2 items-center font-raleway mb-3">
                                <div className="flex items-center text-gray-500 gap-1">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z" />
                                    </svg>
                                    <p className="text-sm">47 Voted</p>
                                </div>
                                <div className="flex items-center text-gray-500 gap-1">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="m7.875 14.25 1.214 1.942a2.25 2.25 0 0 0 1.908 1.058h2.006c.776 0 1.497-.4 1.908-1.058l1.214-1.942M2.41 9h4.636a2.25 2.25 0 0 1 1.872 1.002l.164.246a2.25 2.25 0 0 0 1.872 1.002h2.092a2.25 2.25 0 0 0 1.872-1.002l.164-.246A2.25 2.25 0 0 1 16.954 9h4.636M2.41 9a2.25 2.25 0 0 0-.16.832V12a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 12V9.832c0-.287-.055-.57-.16-.832M2.41 9a2.25 2.25 0 0 1 .382-.632l3.285-3.832a2.25 2.25 0 0 1 1.708-.786h8.43c.657 0 1.281.287 1.709.786l3.284 3.832c.163.19.291.404.382.632M4.5 20.25h15A2.25 2.25 0 0 0 21.75 18v-2.625c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125V18a2.25 2.25 0 0 0 2.25 2.25Z" />
                                    </svg>
                                    <p className="text-sm">9 Positions</p>
                                </div>
                            </div>
                            <div className="flex gap-4 items-center">
                                <div className="bg-soft-blue w-[60%] text-blue-900 flex h-8 justify-center items-center rounded-lg">
                                    <p className="text-sm">Ends in: 21h: 53m: 53s </p>
                                </div>
                                <div className="flex gap-2 items-center text-[15px] text-custom-blue font-extrabold hover:gap-4 transition-all">
                                    <p className="font-raleway">Vote Now</p>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ElectionsDashboard;