const PollsDashboard = ({ setactiveTab }) => {
    return (
        <div>
            <div className='bg-white border-b border-gray-200'>
                <div className='flex justify-between p-6'>
                    <div className='flex items-center gap-2'>
                        <p className="text-gray-500 cursor-pointer" onClick={() => setactiveTab("MainDashboardPage")}>Dashboard</p>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-4 w-4 text-gray-500">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                        </svg>
                        <p className="cursor-pointer">Polls & Surveys</p>
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
                        <p className="font-extrabold text-2xl font-montserrat">Polls & Surveys</p>
                        <p className="text-gray-500 font-raleway font-extralight">Participate in campus discussions or create your own.</p>
                    </div>
                    <div>
                        <div className="flex cursor-pointer bg-custom-blue text-white w-40 h-10 px-2 items-center justify-center rounded-lg text-sm font-raleway gap-2">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                            </svg>
                            <p>Create New Poll</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="px-6 flex gap-4 mt-4">
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
            <div className="flex gap-2 px-6 mt-4 items-center">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-6 w-6 text-red-700">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.362 5.214A8.252 8.252 0 0 1 12 21 8.25 8.25 0 0 1 6.038 7.047 8.287 8.287 0 0 0 9 9.601a8.983 8.983 0 0 1 3.361-6.867 8.21 8.21 0 0 0 3 2.48Z" />
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 18a3.75 3.75 0 0 0 .495-7.468 5.99 5.99 0 0 0-1.925 3.547 5.975 5.975 0 0 1-2.133-1.001A3.75 3.75 0 0 0 12 18Z" />
                </svg>
                <p className="text-xl">Trending Now</p>
            </div>
            <div>
            
            </div>
        </div>
    );
}

export default PollsDashboard;