import { Link } from "react-router-dom";

const HelpModal = ({ setIsModalActive }) => {
    return (
        <div onClick={(e) => e.stopPropagation()} className="bg-white w-[95%] max-w-3xl font-montserrat fixed top-1/2 left-1/2 -translate-x-1/2 z-100 -translate-y-1/2 max-h-[90vh] overflow-y-auto">
            <div className="px-6 bg-white pb-5">
                <div onClick={() => { setIsModalActive(false) }} className="bg-blue-100 w-10 h-10 flex justify-center items-center rounded-md my-4">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                    </svg>
                </div>
                <p className="text-3xl">How can we help you today?</p>
                <p className="text-[15px] font-raleway my-2">Find answers about voting access, election setup, verification, result, and account privacy in one simple support hub</p>
                <div className="flex px-3 bg-gray-200 h-10 items-center gap-2 rounded-lg my-2">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-gray-600">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                    </svg>
                    <input type="text" className="h-9 w-full outline-0 placeholder:font-montserrat placeholder:text-gray-400" placeholder="Search help articles" />
                </div>
                <div className="my-6 grid grid-cols-2 gap-6 max-sm:grid-cols-1">
                    <div className="w-fit max-w-85 p-4 bg-blue-50 grid gap-3 rounded-lg">
                        <div className="flex justify-between items-center">
                            <div className="bg-blue-100 w-8 h-8 flex justify-center items-center rounded-md">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z" />
                                </svg>
                            </div>
                            <Link to="/help">
                                <div className="w-6 h-6 rounded-full flex justify-center items-center bg-white">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 text-gray-500">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                                    </svg>
                                </div>
                            </Link>
                        </div>
                        <div className="grid gap-2">
                            <p className="text-lg font-extrabold">Voting Issues</p>
                            <p className="text-[13px] font-raleway">Get help if you cannot vote, your matric number is not accepted, or an election is restricted.</p>
                        </div>
                    </div>
                    <div className="w-fit max-w-85 p-4 bg-blue-50 grid gap-3 rounded-lg">
                        <div className="flex justify-between items-center">
                            <div className="bg-blue-100 w-8 h-8 flex justify-center items-center rounded-md">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z" />
                                </svg>
                            </div>
                            <Link to="/help">
                                <div className="w-6 h-6 rounded-full flex justify-center items-center bg-white">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 text-gray-500">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                                    </svg>
                                </div>
                            </Link>
                        </div>
                        <div className="grid gap-2">
                            <p className="text-lg font-extrabold">Verification & Login</p>
                            <p className="text-[13px] font-raleway">Get help if you cannot vote, your matric number is not accepted, or an election is restricted.</p>
                        </div>
                    </div>
                    <div className="w-fit max-w-85 p-4 bg-blue-50 grid gap-3 rounded-lg">
                        <div className="flex justify-between items-center">
                            <div className="bg-blue-100 w-8 h-8 flex justify-center items-center rounded-md">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 7.125C2.25 6.504 2.754 6 3.375 6h6c.621 0 1.125.504 1.125 1.125v3.75c0 .621-.504 1.125-1.125 1.125h-6a1.125 1.125 0 0 1-1.125-1.125v-3.75ZM14.25 8.625c0-.621.504-1.125 1.125-1.125h5.25c.621 0 1.125.504 1.125 1.125v8.25c0 .621-.504 1.125-1.125 1.125h-5.25a1.125 1.125 0 0 1-1.125-1.125v-8.25ZM3.75 16.125c0-.621.504-1.125 1.125-1.125h5.25c.621 0 1.125.504 1.125 1.125v2.25c0 .621-.504 1.125-1.125 1.125h-5.25a1.125 1.125 0 0 1-1.125-1.125v-2.25Z" />
                                </svg>
                            </div>
                            <Link to="/help">
                                <div className="w-6 h-6 rounded-full flex justify-center items-center bg-white">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 text-gray-500">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                                    </svg>
                                </div>
                            </Link>
                        </div>
                        <div className="grid gap-2">
                            <p className="text-lg font-extrabold">Creating Elections</p>
                            <p className="text-[13px] font-raleway">Get help if you cannot vote, your matric number is not accepted, or an election is restricted.</p>
                        </div>
                    </div>
                    <div className="w-fit max-w-85 p-4 bg-blue-50 grid gap-3 rounded-lg">
                        <div className="flex justify-between items-center">
                            <div className="bg-blue-100 w-8 h-8 flex justify-center items-center rounded-md">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                                </svg>
                            </div>
                            <Link to="/help">
                                <div className="w-6 h-6 rounded-full flex justify-center items-center bg-white">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 text-gray-500">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                                    </svg>
                                </div>
                            </Link>
                        </div>
                        <div className="grid gap-2">
                            <p className="text-lg font-extrabold">Account & Privacy</p>
                            <p className="text-[13px] font-raleway">Get help if you cannot vote, your matric number is not accepted, or an election is restricted.</p>
                        </div>
                    </div>
                </div>
                <p className="font-extrabold py-2">Popular Help Articles</p>
                <div className="grid gap-3 ">
                    <div className="flex items-center justify-between border border-gray-300 px-4 py-3 rounded-lg">
                        <p className="text-[14px] font-extrabold">Why can't i vote in a restricted election?</p>
                        <Link to="/help">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-4 w-4">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                            </svg>
                        </Link>
                    </div>
                    <div className="flex items-center justify-between border border-gray-300 px-4 py-3 rounded-lg">
                        <p className="text-[14px] font-extrabold">Can i upload a voter's list to prevent cheating?</p>
                        <Link to="/help">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-4 w-4">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                            </svg>
                        </Link>
                    </div>
                    <div className="flex items-center justify-between border border-gray-300 px-4 py-3 rounded-lg">
                        <p className="text-[14px] font-extrabold">How is my phone number and matric number protected?</p>
                        <Link to="/help">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-4 w-4">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                            </svg>
                        </Link>
                    </div>
                </div>
            </div>
            <div className="flex justify-between py-4 px-6">
                <div>
                    <p className="text-[16px] font-extrabold">Still need help</p>
                    <p className="text-[13px] font-raleway max-sm:text-[12px]">Our Support team is available to assist you</p>
                </div>
                <Link to="/help">
                    <div className="flex cursor-pointer bg-custom-blue text-white w-34 h-10 px-2 items-center justify-center rounded-lg text-sm font-raleway gap-2">
                        <p className='max-sm:text-[12px]'>Contact Support</p>
                    </div>
                </Link>
            </div>
        </div>
    );
}

export default HelpModal;