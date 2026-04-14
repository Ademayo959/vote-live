import Navbar from "./Navbar";
import Footer from "./Footer";
import { Link } from "react-router-dom";
import StepOne from './assets/img/HowItWorks-Imgs/Step-1.png'
import StepTwo from './assets/img/HowItWorks-Imgs/Step-2.png'
import StepThree from './assets/img/HowItWorks-Imgs/Step-3.png'
import StepFour from './assets/img/HowItWorks-Imgs/Step-4.png'

const HowItWorks = () => {
    return (
        <div className="font-montserrat justify-self-center w-full ">
            <Navbar />
            <div className="max-w-5xl w-full justify-self-center mb-14 overflow-x-hidden">
                <div className="justify-self-center my-12">
                    <div className="py-1 px-2 rounded-2xl w-fit bg-blue-100 justify-self-center">
                        <p className="font-sans text-[#1a72ec] font-semibold text-[0.8vw] max-sm:text-[2vw]">SIMPLE PROCESS</p>
                    </div>
                    <p className="text-[3.5vw] font-extrabold text-center my-3 max-sm:text-[10vw]">How It Works</p>
                    <p className="w-[45vw] justify-self-center text-center text-gray-500 max-sm:w-[78vw]">The simplest way to run a student election. See how you can set up a secure, transparent vote from start to finish without breaking a sweat.</p>
                </div>
                <div className="grid gap-10 max-sm:text-center">
                    <div className="flex justify-between items-center max-sm:flex-col max-sm:gap-6">
                        <div>
                            <div className="flex items-center justify-center rounded-md h-9 w-9 bg-blue-200 max-sm:justify-self-center">
                                <p className="text-blue-400 font-sans font-extrabold text-[14px]">01</p>
                            </div>
                            <p className="text-[29px] my-2 font-medium font-sans">Sign Up</p>
                            <p className="w-100 font-monteserrat text-[13px] max-sm:justify-self-center max-sm:w-90">Create your free VoteLive account in seconds. All you need is an email, matric number and a password — no lengthy forms, no waiting for approval. Once you're in, your dashboard is ready and waiting. No credit card, no stress.</p>
                        </div>
                        <div>
                            <img src={StepOne} className="h-80 w-auto object-contain rounded-md shadow-xl max-sm:w-full max-sm:h-70" alt="A signup menu" />
                        </div>
                    </div>
                    <div className="flex justify-between items-center max-sm:flex-col max-sm:flex-col-reverse max-sm:gap-6">
                        <div>
                            <img src={StepTwo} className="h-80 w-auto object-contain rounded-md shadow-xl max-sm:w-full max-sm:h-70" alt="A signup menu" />
                        </div>
                        <div>
                            <div className="flex items-center justify-center rounded-md h-9 w-9 bg-blue-200 max-sm:justify-self-center">
                                <p className="text-blue-400 font-sans font-extrabold text-[14px]">02</p>
                            </div>
                            <p className="text-[29px] my-2 font-medium font-sans">Create An Election</p>
                            <p className="w-100 font-monteserrat text-[13px] max-sm:justify-self-center max-sm:w-90">Give your election a name, and decide who gets to vote. VoteLive gives you full control over every detail before anything goes live. It takes less than two minutes to have a fully configured election ready to go.</p>
                        </div>
                    </div>
                    <div className="flex justify-between items-center max-sm:flex-col max-sm:gap-6">
                        <div>
                            <div className="flex items-center justify-center rounded-md h-9 w-9 bg-blue-200 max-sm:justify-self-center">
                                <p className="text-blue-400 font-sans font-extrabold text-[14px]">03</p>
                            </div>
                            <p className="text-[25px] my-2 font-medium font-sans">Add Positions & Candidates</p>
                            <p className="w-100 font-monteserrat text-[13px] max-sm:justify-self-center max-sm:w-90">Add every position up for contest and fill in the candidates running for each one. You can add as many as 10 positions and candidates as your election needs. When everything looks right, hit submit — VoteLive handles the rest.</p>
                        </div>
                        <div>
                            <img src={StepThree} className="h-80 w-auto object-contain rounded-md shadow-xl max-sm:w-full max-sm:h-70" alt="A signup menu" />
                        </div>
                    </div>
                    <div className="flex justify-between items-center max-sm:flex-col max-sm:flex-col-reverse max-sm:gap-6">
                        <div>
                            <img src={StepFour} className="h-80 w-auto object-contain rounded-md shadow-xl max-sm:w-full max-sm:h-70" alt="A signup menu" />
                        </div>
                        <div className="w-100">
                            <div className="flex items-center justify-center rounded-md h-9 w-9 bg-blue-200 max-sm:justify-self-center">
                                <p className="text-blue-400 font-sans font-extrabold text-[14px]">04</p>
                            </div>
                            <p className="text-[42px] -mb-2 font-medium font-sans max-sm:text-[9vw]">There is no Step 4 😏</p>
                            <p className="text-[42px] -my-2 font-medium font-sans max-sm:text-[10vw]">You're Done</p>
                            <Link to="/dashboard">
                                <button className="bg-[#1a72ec] p-2 w-fit rounded-md text-white text-[13px] my-4 hover:mt-6 transition-all">Start your first Election</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default HowItWorks;