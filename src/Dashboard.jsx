import { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from './assets/img/votelive-logo.png'
import ProfileThree from './assets/img/Profile-photo-three.jpeg';
import MainDashboardPage from './MainDashboardPage';
import ElectionsDashboard from './ElectionsDashboard';
import PollsDashboard from './PollsDashboard';
import HistoryDashboard from './HistoryDashboard';
import HelpModal from './HelpModal';


const Dashboard = () => {
    const [activeTab, setactiveTab] = useState("MainDashboardPage")
    const [sidebarOpen, setSidebarOpen] = useState(false)
    const [isModalActive, setIsModalActive] = useState(false);

    return (
        <div className="dashboard font-montserrat">
            {/* Mobile top bar */}
            <div className="min-[840px]:hidden flex items-center justify-between px-4 py-3 bg-accent-blue border-b border-gray-300 sticky top-0 z-40">
                <button onClick={() => setSidebarOpen(true)} className="p-2 rounded-md text-gray-600">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                    </svg>
                </button>
                <Link to="/">
                    <img src={logo} alt="logo" className='h-12' />
                </Link>
                <div className='flex gap-2'>
                    <div onClick={() => {setIsModalActive(true)}}  className='cursor-pointer p-2 border border-gray-300 w-10 flex items-center justify-center rounded-full h-10 text-gray-600'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-5 w-5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z" />
                        </svg>
                    </div>
                    <div className='cursor-pointer p-2 border border-gray-300 w-9 flex items-center justify-center rounded-full h-9 text-gray-600'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-5 w-5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0" />
                        </svg>
                    </div>
                </div>
            </div>
            {/* Backdrop */}
            {sidebarOpen && (
                <div
                    className="fixed inset-0 bg-black/50 z-40 min-[840px]:hidden"
                    onClick={() => setSidebarOpen(false)}
                />
            )}
            <div className="grid grid-cols-1 min-[840px]:grid-cols-[20%_80%] p-0 h-screen">
                {/* Sidebar */}
                <div className={`
                    bg-accent-blue px-6 flex flex-col border-r border-gray-300 overflow-y-auto
                    fixed top-0 left-0 h-full z-50 w-72 transition-transform duration-300
                    min-[840px]:sticky min-[840px]:w-auto min-[840px]:z-auto min-[840px]:translate-x-0
                    ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}
                `}>
                    <div className="flex items-center justify-between">
                        <Link to="/">
                            <img src={logo} alt="logo" className='h-16 w-47' />
                        </Link>
                        {/* Close button — mobile only */}
                        <button onClick={() => setSidebarOpen(false)} className="min-[840px]:hidden p-2 text-gray-600">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>
                    <div className='flex-1 overflow-y-auto'>
                        <div className='flex flex-col gap-3 mt-12'>
                            <div onClick={() => { setactiveTab("MainDashboardPage"); setSidebarOpen(false) }} className='flex cursor-pointer gap-2 px-4 py-3 items-center text-md font-raleway bg-hover-blue rounded-2xl'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-6 w-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 0 1 6 3.75h2.25A2.25 2.25 0 0 1 10.5 6v2.25a2.25 2.25 0 0 1-2.25 2.25H6a2.25 2.25 0 0 1-2.25-2.25V6ZM3.75 15.75A2.25 2.25 0 0 1 6 13.5h2.25a2.25 2.25 0 0 1 2.25 2.25V18a2.25 2.25 0 0 1-2.25 2.25H6A2.25 2.25 0 0 1 3.75 18v-2.25ZM13.5 6a2.25 2.25 0 0 1 2.25-2.25H18A2.25 2.25 0 0 1 20.25 6v2.25A2.25 2.25 0 0 1 18 10.5h-2.25a2.25 2.25 0 0 1-2.25-2.25V6ZM13.5 15.75a2.25 2.25 0 0 1 2.25-2.25H18a2.25 2.25 0 0 1 2.25 2.25V18A2.25 2.25 0 0 1 18 20.25h-2.25A2.25 2.25 0 0 1 13.5 18v-2.25Z" />
                                </svg>
                                <p>Dashboard</p>
                            </div>
                            <div onClick={() => { setactiveTab("ElectionsDashboard"); setSidebarOpen(false) }} className='flex cursor-pointer gap-2 px-4 py-3 items-center text-md font-raleway bg-hover-blue rounded-2xl'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-6 w-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                </svg>
                                <p>Elections</p>
                            </div>
                            <div onClick={() => { setactiveTab("PollsDashboard"); setSidebarOpen(false) }} className='flex cursor-pointer gap-2 px-4 py-3 items-center text-md font-raleway bg-hover-blue rounded-2xl'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-6 w-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 14.25v2.25m3-4.5v4.5m3-6.75v6.75m3-9v9M6 20.25h12A2.25 2.25 0 0 0 20.25 18V6A2.25 2.25 0 0 0 18 3.75H6A2.25 2.25 0 0 0 3.75 6v12A2.25 2.25 0 0 0 6 20.25Z" />
                                </svg>
                                <p>Polls & Surveys</p>
                            </div>
                            <div onClick={() => { setactiveTab("HistoryDashboard"); setSidebarOpen(false) }} className='flex cursor-pointer gap-2 px-4 py-3 items-center text-md font-raleway bg-hover-blue rounded-2xl'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-6 w-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M10.343 3.94c.09-.542.56-.94 1.11-.94h1.093c.55 0 1.02.398 1.11.94l.149.894c.07.424.384.764.78.93.398.164.855.142 1.205-.108l.737-.527a1.125 1.125 0 0 1 1.45.12l.773.774c.39.389.44 1.002.12 1.45l-.527.737c-.25.35-.272.806-.107 1.204.165.397.505.71.93.78l.893.15c.543.09.94.559.94 1.109v1.094c0 .55-.397 1.02-.94 1.11l-.894.149c-.424.07-.764.383-.929.78-.165.398-.143.854.107 1.204l.527.738c.32.447.269 1.06-.12 1.45l-.774.773a1.125 1.125 0 0 1-1.449.12l-.738-.527c-.35-.25-.806-.272-1.203-.107-.398.165-.71.505-.781.929l-.149.894c-.09.542-.56.94-1.11.94h-1.094c-.55 0-1.019-.398-1.11-.94l-.148-.894c-.071-.424-.384-.764-.781-.93-.398-.164-.854-.142-1.204.108l-.738.527c-.447.32-1.06.269-1.45-.12l-.773-.774a1.125 1.125 0 0 1-.12-1.45l.527-.737c.25-.35.272-.806.108-1.204-.165-.397-.506-.71-.93-.78l-.894-.15c-.542-.09-.94-.56-.94-1.109v-1.094c0-.55.398-1.02.94-1.11l.894-.149c.424-.07.765-.383.93-.78.165-.398.143-.854-.108-1.204l-.526-.738a1.125 1.125 0 0 1 .12-1.45l.773-.773a1.125 1.125 0 0 1 1.45-.12l.737.527c.35.25.807.272 1.204.107.397-.165.71-.505.78-.929l.15-.894Z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                </svg>
                                <p>Settings & History</p>
                            </div>
                        </div>
                    </div>
                    <div className='mt-4 pb-4'>
                        <hr className='text-gray-400' />
                        <div className='flex gap-2 mt-4'>
                            <img src={ProfileThree} alt="A profile pic" className='h-12 w-12 rounded-full' />
                            <div className='font-raleway'>
                                <p className='font-extrabold'>Adeleye Mayowa</p>
                                <p className='text-gray-500'>Soft. Eng • 200L</p>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Main content */}
                <div className='bg-light-blue overflow-y-auto'>
                    {activeTab === "MainDashboardPage" && <MainDashboardPage setactiveTab={setactiveTab} />}
                    {activeTab === "ElectionsDashboard" && <ElectionsDashboard setactiveTab={setactiveTab} />}
                    {activeTab === "PollsDashboard" && <PollsDashboard setactiveTab={setactiveTab} />}
                    {activeTab === "HistoryDashboard" && <HistoryDashboard setactiveTab={setactiveTab} />}
                </div>
            </div>
            { isModalActive && (
                <div className="fixed inset-0 bg-black/70 z-99" onClick={() => setIsModalActive(false)}>
                    <HelpModal setIsModalActive={setIsModalActive} onClose={() => setIsModalActive(false)} />
                </div>
            )}
        </div>
    );
}

export default Dashboard;