import Navbar from "./Navbar";
import Footer from "./Footer";
import HeroImg from './assets/img/Votelive-hero-img.png';
import ProfileOne from './assets/img/Profile-photo-one.jpeg';
import ProfileTwo from './assets/img/Profile-photo-two.jpeg';
import ProfileThree from './assets/img/Profile-photo-three.jpeg';

const Home = () => {
    return (
        <div className="Home bg-accent-blue">
            <Navbar />
            <div className="Landing-Page justify-self-center mt-26 font-montserrat max-w-full max-sm:px-3 max-sm:mt-16 ">
                <div className="Hero-section flex gap-10 max-w-7xl ">
                    <div>
                        <div className="bg-custom-yellow w-42 rounded-2xl flex gap-1 p-1">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
                            </svg>
                            <p className="font-raleway font-extrabold">Verified & Secure</p>
                        </div>
                        <div className="my-10">
                            <h1 className="text-6xl font-extrabold max-sm:text-7xl ">The Future of</h1>
                            <h1 className="text-6xl font-extrabold text-custom-blue max-sm:text-6xl ">Student Democracy</h1>
                        </div>
                        <div>
                            <p className=" text-gray-500 leading-6 text-lg">Secure, transparent, and easy-to-use digital voting <br /> platform for universities. Vote from anywhere using your <br /> matric number.</p>
                        </div>
                        <div className="flex gap-4 my-8 items-center">
                            <button className="bg-custom-blue text-white h-12 w-36 rounded-lg">Start Voting</button>
                            <div className="flex gap-1 border border-gray-300 h-12 w-40 items-center justify-center rounded-lg">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.91 11.672a.375.375 0 0 1 0 .656l-5.603 3.113a.375.375 0 0 1-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112Z" />
                                </svg>
                                <p>How it works</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-2 max-sm:pl-4">
                            <div className="flex">
                                <img src={ProfileOne} alt="" className="h-8 w-8 rounded-full z-10 border-2 border-white -ml-3" />
                                <img src={ProfileTwo} alt="" className="h-8 w-8 rounded-full z-20 border-2 border-white -ml-3" />
                                <img src={ProfileThree} alt="" className="h-8 w-8 rounded-full z-30 border-2 border-white -ml-3" />
                            </div>
                            <div>
                                <p className="text-gray-500 font-raleway">Trusted by 50+ Universities</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <img src={HeroImg} alt="A polls card" className="h-120 rounded-2xl max-sm:hidden" />
                    </div>
                </div>
                <div className="max-w-full ">
                    <div className="mt-28 max-w-7xl">
                        <h1 className="text-5xl text-center my-6 max-sm:text-4xl max-sm:text-left">Why choose Votelive?</h1>
                        <p className="text-md text-gray-500 text-center pb-12 max-sm:text-left max-sm:text-lg max-sm:font-raleway">We ensure that every vote counts with enterprise-grade security tailored for <br /> academic institutions</p>
                        <div className="grid grid-cols-3 gap-12 max-sm:grid-cols-1 max-sm:justify-self-center max-sm:justify-items-center">
                            <div className="grid grid-rows-[30%_20%_50%] gap-2 bg-white shadow-lg p-10 rounded-2xl w-92 max-sm:w-[95%] ">
                                <div className="bg-custom-yellow w-12 h-12 flex items-center justify-center rounded-xl">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-8 w-8 text-custom-blue">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z" />
                                    </svg>
                                </div>
                                <div>
                                    <p className="font-extrabold text-2xl">Secure Verification</p>
                                </div>
                                <div>
                                    <p className="font-raleway">Multi-factor authentication using student matric numbers and verified phone numbers ensures only eligible students vote.</p>
                                </div>
                            </div>
                            <div className="grid grid-rows-[30%_20%_50%] gap-2 bg-white shadow-lg p-10 rounded-2xl w-92 max-sm:w-[95%]">
                                <div className="bg-custom-yellow w-12 h-12 flex items-center justify-center rounded-xl">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-8 w-8 text-custom-blue">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z" />
                                    </svg>

                                </div>
                                <div>
                                    <p className="font-extrabold text-2xl">Real-time Results</p>
                                </div>
                                <div>
                                    <p className="font-raleway">Watch election unfold live with automated vote countingnd beautiful, easy to read charts.</p>
                                </div>
                            </div>
                            <div className="grid grid-rows-[30%_20%_50%] gap-2 bg-white shadow-lg p-10 rounded-2xl w-92 max-sm:w-[95%]">
                                <div className="bg-custom-yellow w-12 h-12 flex items-center justify-center rounded-xl">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-8 w-8 text-custom-blue">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z" />
                                    </svg>

                                </div>
                                <div>
                                    <p className="font-extrabold text-2xl">Voters Management</p>
                                </div>
                                <div>
                                    <p className="font-raleway">Upload eligible voter lists in bulk. Our system automatically validates students status before granting ballot access.</p>
                                </div>
                            </div>
                            <div className="grid grid-rows-[30%_20%_50%] gap-2 bg-white shadow-lg p-10 rounded-2xl w-92 max-sm:w-[95%]">
                                <div className="bg-custom-yellow w-12 h-12 flex items-center justify-center rounded-xl">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-8 w-8 text-custom-blue">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                    </svg>
                                </div>
                                <div>
                                    <p className="font-extrabold text-2xl">Timed Elections</p>
                                </div>
                                <div>
                                    <p className="font-raleway">Set precise start and end times. The system automatically opens and closes voting to prevent late submissions.</p>
                                </div>
                            </div>
                            <div className="grid grid-rows-[30%_20%_50%] gap-2 bg-white shadow-lg p-10 rounded-2xl w-92 max-sm:w-[95%]">
                                <div className="bg-custom-yellow w-12 h-12 flex items-center justify-center rounded-xl">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-8 w-8 text-custom-blue">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
                                    </svg>
                                </div>
                                <div>
                                    <p className="font-extrabold text-2xl">Mobile First</p>
                                </div>
                                <div>
                                    <p className="font-raleway">Students can vote from anywhere using any device. Our interface is optimized for smartphones and tablets.</p>
                                </div>
                            </div>
                            <div className="grid grid-rows-[30%_20%_50%] gap-2 bg-white shadow-lg p-10 rounded-2xl w-92 max-sm:w-[95%]">
                                <div className="bg-custom-yellow w-12 h-12 flex items-center justify-center rounded-xl">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-8 w-8 text-custom-blue">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6a7.5 7.5 0 1 0 7.5 7.5h-7.5V6Z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 10.5H21A7.5 7.5 0 0 0 13.5 3v7.5Z" />
                                    </svg>
                                </div>
                                <div>
                                    <p className="font-extrabold text-2xl">Public Polls</p>
                                </div>
                                <div>
                                    <p className="font-raleway">Beyond Elections, run campus-wide surveys and polls on trending topicsto engage the student body.</p>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                <div className="mt-24">
                    <div>
                        <h1 className="text-4xl">Trending Now</h1>
                        <div className="flex justify-between items-center">
                            <p className="font-raleway my-2 text-gray-600">Active elections and polls from across the platform</p>
                            <div className="flex gap-2 h-11 w-42 items-center justify-center border border-gray-300 rounded-lg">
                                <p>Browse All</p>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                                </svg>
                            </div>
                        </div>
                    </div>
                    <div className="grid grid-cols-3 gap-12 my-12">
                        <div className="w-90 rounded-2xl bg-white shadow-lg h-70 grid grid-rows-[20%_10%_10%_50%] gap-2 py-6 px-6 pt-2">
                            <div className="flex items-center justify-between w-78 mt-0 mb-0">
                                <div className="bg-custom-yellow h-8 w-20 flex items-center justify-center rounded-md">
                                    <p className="text-custom-blue font-extrabold font-raleway">Election</p>
                                </div>
                                <div className="flex gap-1 text-red-600 items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-4 w-4">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z" />
                                    </svg>
                                    <p className="font-mono">LIVE</p>
                                </div>
                            </div>
                            <div className="mb-0 mt-0">
                                <h1 className="text-xl font-extrabold">Engineering Faculty President</h1>
                            </div>
                            <div className="flex gap-2 items-center">
                                <div className="flex items-center text-gray-500 gap-1">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z" />
                                    </svg>
                                    <p className="text-sm">2.4k Voted</p>
                                </div>
                                <div className="flex items-center text-gray-500 gap-1">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                    </svg>
                                    <p className="text-sm">Ends in 2h</p>
                                </div>
                            </div>
                            <div className="grid grid-rows-2 gap-0">
                                <div className="grid gap-0.5">
                                    <div className="font-raleway flex items-center justify-between font-extralight text-gray-700">
                                        <p>Odetola A.</p>
                                        <p>45%</p>
                                    </div>
                                    <div className="w-78 h-2 bg-blue-200 rounded-4xl">
                                        <div className="w-35 h-2 bg-blue-700 rounded-4xl">

                                        </div>
                                    </div>
                                </div>
                                <div className="grid gap-0.5">
                                    <div className="font-raleway flex items-center justify-between font-extralight text-gray-700">
                                        <p>Iyanuoluwa T.</p>
                                        <p>32%</p>
                                    </div>
                                    <div className="w-78 h-2 bg-gray-300 rounded-4xl">
                                        <div className="w-25 h-2 bg-gray-600 rounded-4xl">

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="w-90 rounded-2xl bg-white shadow-lg h-70 grid grid-rows-[20%_10%_10%_50%] gap-2 py-6 px-6 pt-2">
                            <div className="flex items-center justify-between w-78 mt-0 mb-0">
                                <div className="bg-green-100 h-7 w-12 flex items-center justify-center rounded-md">
                                    <p className="text-green-600 font-extrabold font-raleway">Poll</p>
                                </div>
                                <div className="flex gap-1 text-gray-600 items-center">
                                    <p className="font-sans text-sm">Open</p>
                                </div>
                            </div>
                            <div className="mb-0 mt-0">
                                <h1 className="text-xl font-extrabold">Best Campus Football Team</h1>
                            </div>
                            <div className="flex gap-2 items-center">
                                <div className="flex items-center text-gray-500 gap-1">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z" />
                                    </svg>
                                    <p className="text-sm">11.7k Voted</p>
                                </div>
                                <div className="flex items-center text-gray-500 gap-1">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                    </svg>
                                    <p className="text-sm">4 Days Left</p>
                                </div>
                            </div>
                            <div className="grid mt-4">
                                <div>
                                    <p className="font-raleway text-sm text-gray-600">Cast your vote for the best football Team on campus!</p>
                                </div>
                                <hr className="text-gray-300" />
                                <div className="flex gap-1 hover:gap-3 transition-all items-center cursor-pointer">
                                    <p className="text-custom-blue">Participate Now </p>
                                    <span className="text-custom-blue">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-4 w-4">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                                        </svg>
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="w-90 rounded-2xl bg-white shadow-lg h-70 grid grid-rows-[20%_10%_10%_50%] gap-2 py-6 px-6 pt-2">
                            <div className="flex items-center justify-between w-78 mt-0 mb-0">
                                <div className="bg-custom-yellow h-8 w-20 flex items-center justify-center rounded-md">
                                    <p className="text-custom-blue font-extrabold font-raleway">Election</p>
                                </div>
                                <div className="flex gap-1 text-red-600 items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-4 w-4">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z" />
                                    </svg>
                                    <p className="font-mono">LIVE</p>
                                </div>
                            </div>
                            <div className="mb-0 mt-0">
                                <h1 className="text-xl font-extrabold">Computer Science Dept. Sec</h1>
                            </div>
                            <div className="flex gap-2 items-center">
                                <div className="flex items-center text-gray-500 gap-1">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z" />
                                    </svg>
                                    <p className="text-sm">892 Voted</p>
                                </div>
                                <div className="flex items-center text-gray-500 gap-1">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                    </svg>
                                    <p className="text-sm">Ends in 45m</p>
                                </div>
                            </div>
                            <div className="grid grid-rows-2 gap-0">
                                <div className="grid gap-0.5">
                                    <div className="font-raleway flex items-center justify-between font-extralight text-gray-700">
                                        <p>David O.</p>
                                        <p>62%</p>
                                    </div>
                                    <div className="w-78 h-2 bg-blue-200 rounded-4xl">
                                        <div className="w-48 h-2 bg-blue-700 rounded-4xl">

                                        </div>
                                    </div>
                                </div>
                                <div className="grid gap-0.5">
                                    <div className="font-raleway flex items-center justify-between font-extralight text-gray-700">
                                        <p>Oluwasikemi A.</p>
                                        <p>86%</p>
                                    </div>
                                    <div className="w-78 h-2 bg-gray-300 rounded-4xl">
                                        <div className="w-67 h-2 bg-gray-600 rounded-4xl">

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bg-custom-blue text-center py-16 rounded-2xl my-24">
                    <h1 className="text-white text-4xl my-3 font-extrabold">Ready to host your next Election?</h1>
                    <p className="text-gray-200 font-raleway">Get started with Votelive today. Secure, simple, and effective.</p>
                    <div className="flex gap-4 justify-self-center items-center mt-8">
                        <button className="bg-white text-custom-blue h-11 w-40 rounded-md">
                            Create Election
                        </button>
                        <button className="bg-custom-blue border border-white text-white h-11 w-40 rounded-md">
                            Contact Sales
                        </button>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Home;