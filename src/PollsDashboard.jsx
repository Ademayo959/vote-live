import ProfileOne from './assets/img/Profile-photo-one.jpeg';
import ProfileTwo from './assets/img/about-us-dev9.jpg';
import ProfileThree from './assets/img/about-us-dev11.jpg';

const PollsDashboard = ({ setactiveTab }) => {
    let PollInitTime = [2,17,81]
    let percentage = 65
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
            <div className='grid grid-cols-2 gap-6 px-12 my-4'>
                <div className='w-fit rounded-lg bg-white shadow-md p-6 max-w-115'>
                    <div className=''>
                        <div className='grid grid-cols-[0.1fr_1fr] gap-x-2 items-center'>
                            <div>
                                <img src={ProfileThree} alt="" className='h-8 w-8 rounded-full object-cover' />
                            </div>
                            <div className='flex justify-between items-center '>
                                <div>
                                    <p className='text-extrabold'>Gun Jeum Di</p>
                                    <p className='text-[14px] text-gray-600 font raleway'>Posted {PollInitTime[0]} hrs ago</p>
                                </div>
                                <div className='h-7 w-13 bg-red-200 flex items-center justify-center rounded-md'>
                                    <p className='font-raleway text-red-600'>HOT</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <p className='my-4'>Who should win Content Creator of the Year?</p>
                    </div>
                    <div className='grid gap-y-3'>
                        <div className='w-100 h-10 bg-blue-50 flex items-center justify-between rounded-md'>
                            <div className='w-65 h-10 bg-blue-100 flex items-center rounded-md whitespace-nowrap'>
                                <p className='ml-2'>Ishowspeed</p>
                            </div>
                            <p className='mr-2 font-sans text-blue-500'>{percentage}%</p>
                        </div>
                        <div className='w-100 h-10 bg-blue-50 flex items-center justify-between rounded-md'>
                            <div className='w-25 h-10 bg-blue-100 flex items-center rounded-md whitespace-nowrap'>
                                <p className='ml-2'>Mirabel</p>
                            </div>
                            <p className='mr-2 font-sans text-blue-500'>{25}%</p>
                        </div>
                        <div className='w-100 h-10 bg-blue-50 flex items-center justify-between rounded-md'>
                            <div className='w-10 h-10 bg-blue-100 flex items-center rounded-md whitespace-nowrap'>
                                <p className='ml-2'>Simi</p>
                            </div>
                            <p className='mr-2 font-sans text-blue-500'>{10}%</p>
                        </div>
                    </div>
                    <hr className='my-4 text-gray-400' />
                    <div className='text-gray-500 flex justify-between '>
                        <span className='flex items-center'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-4 w-5">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z" />
                            </svg>
                            <p className='font-raleway'>2,435 voted</p>
                        </span>
                        <span className='flex items-center'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-4 w-5">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                            </svg>
                            <p className='font-raleway'>Ends in {24 - PollInitTime[0]}h</p>
                        </span>
                    </div>
                </div>
                
                <div className='w-fit rounded-lg bg-white shadow-md p-6 max-w-115'>
                    <div className=''>
                        <div className='grid grid-cols-[0.1fr_1fr] gap-x-2 items-center'>
                            <div>
                                <img src={ProfileTwo} alt="" className='h-8 w-8 rounded-full object-cover' />
                            </div>
                            <div className='flex justify-between items-center '>
                                <div>
                                    <p className='text-extrabold'>Peter Tanner</p>
                                    <p className='text-[14px] text-gray-600 font raleway'>Posted {PollInitTime[1]} hrs ago</p>
                                </div>
                                <div className='h-7 w-13 bg-red-200 flex items-center justify-center rounded-md'>
                                    <p className='font-raleway text-red-600'>HOT</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <p className='my-4'>Anime of the Year????</p>
                    </div>
                    <div className='grid gap-y-3'>
                        <div className='w-100 h-10 bg-blue-50 flex items-center justify-between rounded-md'>
                            <div className='w-31 h-10 z-0 bg-blue-100 flex items-center rounded-md whitespace-nowrap'>
                                <p className='ml-2 z-10'>Demon Slayer</p>
                            </div>
                            <p className='mr-2 font-sans text-blue-500'>{31}%</p>
                        </div>
                        <div className='w-100 h-10 bg-blue-50 flex items-center justify-between rounded-md'>
                            <div className='w-27 h-10 z-0 bg-blue-100 flex items-center rounded-md whitespace-nowrap'>
                                <p className='ml-2 z-1 overflow-x-visible'>Jujustu Kaisen</p>
                            </div>
                            <p className='mr-2 font-sans text-blue-500'>{27}%</p>
                        </div>
                        <div className='w-100 h-10 bg-blue-50 flex items-center justify-between rounded-md'>
                            <div className='w-42 h-10 bg-blue-100 flex items-center rounded-md whitespace-nowrap'>
                                <p className='ml-2 z-10'>Attack on titan</p>
                            </div>
                            <p className='mr-2 font-sans text-blue-500'>{42}%</p>
                        </div>
                    </div>
                    <hr className='my-4 text-gray-400' />
                    <div className='text-gray-500 flex justify-between '>
                        <span className='flex items-center'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-4 w-5">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z" />
                            </svg>
                            <p className='font-raleway'>571 voted</p>
                        </span>
                        <span className='flex items-center'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-4 w-5">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                            </svg>
                            <p className='font-raleway'>Ends in {24-PollInitTime[1]}h</p>
                        </span>
                    </div>
                </div>

                <div className='w-fit rounded-lg bg-white shadow-md p-6 max-w-115'>
                    <div className=''>
                        <div className='grid grid-cols-[0.1fr_1fr] gap-x-2 items-center'>
                            <div>
                                <img src={ProfileOne} alt="" className='h-8 w-8 rounded-full object-cover' />
                            </div>
                            <div className='flex justify-between items-center '>
                                <div>
                                    <p className='text-extrabold'>Peter Tanner</p>
                                    <p className='text-[14px] text-gray-600 font raleway'>Posted {PollInitTime[1]} hrs ago</p>
                                </div>
                                <div className='h-7 w-13 bg-red-200 flex items-center justify-center rounded-md'>
                                    <p className='font-raleway text-red-600'>HOT</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <p className='my-4 flex wrap-break-word'>Should lecturers implement the proposed test system</p>
                    </div>
                    <div className='grid gap-y-3'>
                        <div className='w-100 h-10 bg-blue-50 flex items-center justify-between rounded-md'>
                            <div className='w-31 h-10 z-0 bg-blue-100 flex items-center rounded-md whitespace-nowrap'>
                                <p className='ml-2 z-10'>Yes</p>
                            </div>
                            <p className='mr-2 font-sans text-blue-500'>{31}%</p>
                        </div>
                        <div className='w-100 h-10 bg-blue-50 flex items-center justify-between rounded-md'>
                            <div className='w-27 h-10 z-0 bg-blue-100 flex items-center rounded-md whitespace-nowrap'>
                                <p className='ml-2 z-1 overflow-x-visible'>No</p>
                            </div>
                            <p className='mr-2 font-sans text-blue-500'>{27}%</p>
                        </div>
                    </div>
                    <hr className='my-4 text-gray-400' />
                    <div className='text-gray-500 flex justify-between '>
                        <span className='flex items-center'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-4 w-5">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z" />
                            </svg>
                            <p className='font-raleway'>571 voted</p>
                        </span>
                        <span className='flex items-center'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-4 w-5">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                            </svg>
                            <p className='font-raleway'>Ends in {24-PollInitTime[1]}h</p>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PollsDashboard;