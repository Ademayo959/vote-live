import { useState } from 'react';
import ProfileTwo from './assets/img/Old Nigerian.jpg';

const Authpage = () => {
    const [activeMenu, setactiveMenu] = useState("signup");
    const [clickedOne, setClickedOne] = useState(true);
    const [clickedTwo, setClickedTwo] = useState(false);
    return (
        <div className="auth-page flex font-montserrat">
            <div className="bg-gradient-to-br from-[#1e40a9] to-[#1e2b42] w-[50%] h-screen text-white py-6 px-8">
                <p className="text-4xl mb-4 mt-76">Your voice matters in building a better campus.</p>
                <p className="font-raleway">Join thousands of students securely casting their votes for student union leaders, faculty representatives, and campus initiatives.</p>
                <div className="px-4 py-8 my-8 grid gap-4 border border-gray-50/10 rounded-lg bg-white/10 backdrop-blur-md">
                    <div>
                        <p>"Votelive made our students union eletions incredibly transparent and easy. The matric number verification completely eliminated voter's fraud concerns we had in previous years."</p>
                    </div>
                    <div className='flex gap-2'>
                        <div>
                            <img src={ProfileTwo} alt="profile picture" className='w-12 h-12 rounded-full object-contain' />
                        </div>
                        <div>
                            <p>Dr. Adewale Okoya</p>
                            <p>Dean of Student Affairs</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='bg-accent-blue flex w-[50%]'>
                <div className='mx-auto'>
                    <div className='mb-8'>
                        <p className='text-2xl font-extrabold mt-4 mb-2 text-center'>Create an account</p>
                        <p className='text-gray-500 text-center text-[14px] font-raleway'>Enter your details below to get started</p>
                    </div>
                    <div className='w-96 h-12 bg-soft-blue flex items-center justify-center gap-2 rounded-md mb-6'>
                        <div className={`flex items-center justify-center w-46 h-10 rounded-md ${clickedOne ? "bg-white shadow-sm" : "bg-transparent"}`} onClick={()=>{setactiveMenu("signup"); setClickedOne(true)}}>
                            <p>Sign Up</p>
                        </div>
                        <div className={`flex items-center justify-center w-46 h-10 rounded-md ${clickedTwo ? "bg-white shadow-sm" : "bg-transparent"}`} onClick={()=>{setactiveMenu("login"); setClickedTwo(true)}}>
                            <p>Log In</p>
                        </div>
                    </div>
                    <div>
                        {activeMenu === "signup" &&
                            <div>
                                <div>
                                    <div>
                                        <p>Full Name</p>
                                        <div className='flex items-center gap-2 border border-gray-300 px-2 py-1 bg-white rounded-md my-2 w-96'>
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-5 w-5 text-gray-600">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                                            </svg>
                                            <input type="text" placeholder='Johnny Doe' className='h-8 w-80 outline-0 placeholder:text-[14px] placeholder:font-raleway' />
                                        </div>
                                    </div>
                                    <div>
                                        <p>Matric Number</p>
                                        <div className='flex items-center gap-2 border border-gray-300 px-2 py-1 bg-white rounded-md my-2 w-96'>
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-5 w-5 text-gray-600">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z" />
                                            </svg>
                                            <input type="text" placeholder='e.g ABC/12/3456' className='h-8 w-80 outline-0 placeholder:text-[14px] placeholder:font-raleway' />
                                        </div>
                                    </div>
                                    <div>
                                        <p>Phone Number</p>
                                        <div className='flex items-center gap-2 border border-gray-300 px-2 py-1 bg-white rounded-md my-2 w-96'>
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-5 w-5 text-gray-600">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                                            </svg>
                                            <input type="text" placeholder='+234 801 2222 333' className='h-8 w-80 outline-0 placeholder:text-[14px] placeholder:font-raleway' />
                                        </div>
                                    </div>
                                    <div>
                                        <p>Password</p>
                                        <div className='flex items-center gap-2 border border-gray-300 px-2 py-1 bg-white rounded-md my-2 w-96'>
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-5 w-5 text-gray-600">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z" />
                                            </svg>
                                            <input type="text" placeholder='Create your Password' className='h-8 w-80 outline-0 placeholder:text-[14px] placeholder:font-raleway' />
                                        </div>
                                    </div>
                                </div>
                                <div className='grid gap-4 my-4'>
                                    <div className='flex'>
                                        <p className='text-[12px] text-gray-600 text-center'><input type="checkbox" /> By clicking create account, I agree that I have read and <br /> accepted the <a href="#" className='text-blue-500 underline'>Terms of Use</a> and <a href="#" className='text-blue-500 underline'>Privacy Policy</a></p>
                                    </div>
                                    <div>
                                        <div className='bg-blue-500 flex gap-2 text-white w-96 h-10 items-center justify-center rounded-md hover:gap-4 transition-all'>
                                            <p>Create Account</p>
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                                <div className='text-center'>
                                    <p className='text-[12px] text-gray-500'>Having Trouble? <a href="#" className='text-blue-500 underline'>Contact Support</a></p>
                                </div>
                            </div>}
                        {activeMenu === "login" &&
                            <div>
                                <div className='mt-10'>
                                    <div>
                                        <p>Matric Number</p>
                                        <div className='flex items-center gap-2 border border-gray-300 px-2 py-1 bg-white rounded-md my-2 w-96'>
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-5 w-5 text-gray-600">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z" />
                                            </svg>
                                            <input type="text" placeholder='e.g ABC/12/3456' className='h-8 w-80 outline-0 placeholder:text-[14px] placeholder:font-raleway' />
                                        </div>
                                    </div>
                                    <div>
                                        <p>Password</p>
                                        <div className='flex items-center gap-2 border border-gray-300 px-2 py-1 bg-white rounded-md my-2 w-96'>
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-5 w-5 text-gray-600">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z" />
                                            </svg>
                                            <input type="text" placeholder='Create your Password' className='h-8 w-80 outline-0 placeholder:text-[14px] placeholder:font-raleway' />
                                        </div>
                                    </div>
                                </div>
                                <div className='grid gap-4 my-4'>
                                    <div>
                                        <div className='bg-blue-500 flex gap-2 text-white w-96 h-10 items-center justify-center rounded-md hover:gap-4 transition-all'>
                                            <p>Log In</p>
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                                <div className='text-center'>
                                    <p className='text-[12px] text-gray-500'>Having Trouble? <a href="#" className='text-blue-500 underline'>Contact Support</a></p>
                                </div>
                            </div>}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Authpage;