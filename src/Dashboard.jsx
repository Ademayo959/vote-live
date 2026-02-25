import { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from './assets/img/votelive-logo.png'
import ProfileThree from './assets/img/Profile-photo-three.jpeg';
import MainDashboardPage from './MainDashboardPage';
import ElectionsDashboard from './ElectionsDashboard';
import PollsDashboard from './PollsDashboard';
import HistoryDashboard from './HistoryDashboard';
import SettingsDasboard from './SettingsDashboard';

const Dashboard = () => {
    const [activeTab, setactiveTab] = useState("MainDashboardPage")

    return (
        <div className="dashboard font-montserrat overflow-hidden">
            <div className="grid grid-cols-[20%_80%] p-0 min-h-screen">
                <div className='bg-accent-blue px-6 flex flex-col border-r border-gray-300'>
                    <Link to="/">
                        <div className='mt-2[]'>
                            <img src={logo} alt="logo" className='h-16 w-47 max-sm:h-14 max-sm:w-96' />
                        </div>
                    </Link>
                    <div className='flex-1 overflow-y-auto'>
                        <div className='flex flex-col gap-3 mt-12'>
                            <div onClick={() => setactiveTab("MainDashboardPage")} className='flex cursor-pointer gap-2 px-4 py-3 items-center text-md font-raleway bg-hover-blue rounded-2xl'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-6 w-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 0 1 6 3.75h2.25A2.25 2.25 0 0 1 10.5 6v2.25a2.25 2.25 0 0 1-2.25 2.25H6a2.25 2.25 0 0 1-2.25-2.25V6ZM3.75 15.75A2.25 2.25 0 0 1 6 13.5h2.25a2.25 2.25 0 0 1 2.25 2.25V18a2.25 2.25 0 0 1-2.25 2.25H6A2.25 2.25 0 0 1 3.75 18v-2.25ZM13.5 6a2.25 2.25 0 0 1 2.25-2.25H18A2.25 2.25 0 0 1 20.25 6v2.25A2.25 2.25 0 0 1 18 10.5h-2.25a2.25 2.25 0 0 1-2.25-2.25V6ZM13.5 15.75a2.25 2.25 0 0 1 2.25-2.25H18a2.25 2.25 0 0 1 2.25 2.25V18A2.25 2.25 0 0 1 18 20.25h-2.25A2.25 2.25 0 0 1 13.5 18v-2.25Z" />
                                </svg>
                                <p>Dashboard</p>
                            </div>
                            <div onClick={() => setactiveTab("ElectionsDashboard")} className='flex cursor-pointer gap-2 px-4 py-3 items-center text-md font-raleway bg-hover-blue rounded-2xl'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-6 w-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                </svg>
                                <p>Elections</p>
                            </div>
                            <div onClick={() => setactiveTab("PollsDashboard")} className='flex cursor-pointer gap-2 px-4 py-3 items-center text-md font-raleway bg-hover-blue rounded-2xl'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-6 w-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 14.25v2.25m3-4.5v4.5m3-6.75v6.75m3-9v9M6 20.25h12A2.25 2.25 0 0 0 20.25 18V6A2.25 2.25 0 0 0 18 3.75H6A2.25 2.25 0 0 0 3.75 6v12A2.25 2.25 0 0 0 6 20.25Z" />
                                </svg>
                                <p>Polls & Surveys</p>
                            </div>
                            <div onClick={() => setactiveTab("HistoryDashboard")} className='flex cursor-pointer gap-2 px-4 py-3 items-center text-md font-raleway bg-hover-blue rounded-2xl'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-6 w-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99" />
                                </svg>
                                <p>History</p>
                            </div>
                            <div onClick={() => setactiveTab("SettingsDashboard")} className='flex cursor-pointer gap-2 px-4 py-3 items-center text-md font-raleway bg-hover-blue rounded-2xl'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-6 w-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M10.343 3.94c.09-.542.56-.94 1.11-.94h1.093c.55 0 1.02.398 1.11.94l.149.894c.07.424.384.764.78.93.398.164.855.142 1.205-.108l.737-.527a1.125 1.125 0 0 1 1.45.12l.773.774c.39.389.44 1.002.12 1.45l-.527.737c-.25.35-.272.806-.107 1.204.165.397.505.71.93.78l.893.15c.543.09.94.559.94 1.109v1.094c0 .55-.397 1.02-.94 1.11l-.894.149c-.424.07-.764.383-.929.78-.165.398-.143.854.107 1.204l.527.738c.32.447.269 1.06-.12 1.45l-.774.773a1.125 1.125 0 0 1-1.449.12l-.738-.527c-.35-.25-.806-.272-1.203-.107-.398.165-.71.505-.781.929l-.149.894c-.09.542-.56.94-1.11.94h-1.094c-.55 0-1.019-.398-1.11-.94l-.148-.894c-.071-.424-.384-.764-.781-.93-.398-.164-.854-.142-1.204.108l-.738.527c-.447.32-1.06.269-1.45-.12l-.773-.774a1.125 1.125 0 0 1-.12-1.45l.527-.737c.25-.35.272-.806.108-1.204-.165-.397-.506-.71-.93-.78l-.894-.15c-.542-.09-.94-.56-.94-1.109v-1.094c0-.55.398-1.02.94-1.11l.894-.149c.424-.07.765-.383.93-.78.165-.398.143-.854-.108-1.204l-.526-.738a1.125 1.125 0 0 1 .12-1.45l.773-.773a1.125 1.125 0 0 1 1.45-.12l.737.527c.35.25.807.272 1.204.107.397-.165.71-.505.78-.929l.15-.894Z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                </svg>
                                <p>Settings</p>
                            </div>
                        </div>
                    </div>
                    <div className='mt-4 pb-4'>
                        <hr className='text-gray-400' />
                        <div className='flex gap-2 mt-4'>
                            <div>
                                <img src={ProfileThree} alt="A profile pic" className='h-12 w-12 rounded-full' />
                            </div>
                            <div className='font-raleway'>
                                <p className='font-extrabold'>Adeleye Mayowa</p>
                                <p className='text-gray-500'>Soft. Eng • 200L</p>
                            </div>
                        </div>
                    </div>
                </div>
                {/**this  */}
                <div className='bg-light-blue'>
                    {activeTab === "MainDashboardPage" && <MainDashboardPage setactiveTab={setactiveTab} />}
                    {activeTab === "ElectionsDashboard" && <ElectionsDashboard setactiveTab={setactiveTab} />}
                    {activeTab === "PollsDashboard" && <PollsDashboard setactiveTab={setactiveTab} />}
                    {activeTab === "HistoryDashboard" && <HistoryDashboard />}
                    {activeTab === "SettingsDashboard" && <SettingsDasboard />}
                </div>
            </div>
        </div>
    );
}

export default Dashboard;