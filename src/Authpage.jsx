import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import ProfileTwo from './assets/img/Old Nigerian.jpg';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { auth } from './firebase/firebase';
import { db } from './firebase/firebase';
import { doc, setDoc } from 'firebase/firestore';
import Toast from './toast';
import { isEmail, isAlphabetic, isStrongPassword, isEmpty, isMediumPassword } from 'valcade'

const Authpage = () => {
    const navigate = useNavigate();
    //useState for all the signup input fields
    const [fullName, setfullName] = useState("");
    const [matricNumber, setmatricNumber] = useState("");
    const [email, setemail] = useState("");
    const [password, setpassword] = useState("");
    //login useStates
    const [loginEmail, setloginEmail] = useState("");
    const [loginPassword, setloginPassword] = useState("")
    // Error Messages
    const [loginErrorMessage, setloginErrorMessage] = useState("")
    const [signupErrorMessage, setsignupErrorMessage] = useState("")
    // Toast state
    const [IsVisible, setIsVisible] = useState(false)
    const [toastMessage, setToastMessage] = useState("")

    async function handleSignUp() {
        if (!fullName.split(" ").every((word) => {
            return isAlphabetic(word).result;
        })) {
            setToastMessage('Please enter a valid name')
            setIsVisible(true)
            return;
        }

        if (isEmpty(matricNumber)) {
            setToastMessage('Please enter a valid MatricNumber')
            setIsVisible(true)
            return;
        }

        if (!isEmail(email).result) {
            setToastMessage('Please enter a valid Email')
            setIsVisible(true)
            return;
        }

        if (!isStrongPassword(password).result && !isMediumPassword(password).result) {
            setToastMessage('Please enter a strong password')
            setIsVisible(true)
            return;
        }
        try {
            let createUser = await createUserWithEmailAndPassword(auth, email, password);
            let user = createUser.user
            const reference = doc(db, "users", user.uid)
            await setDoc(reference, { fullName, matricNumber })
            await updateProfile(auth.currentUser, { displayName: fullName })
            console.log(auth.currentUser.displayName)
            console.log(user)
            navigate('/dashboard');
        } catch (err) {
            console.log("Request Failed Error:", err)
            if (err.code === "auth/email-already-in-use") {
                setsignupErrorMessage("This email is already in use")
            } else if (err.code === "auth/invalid-email") {
                setsignupErrorMessage("This email is invalid")
            } else if (err.code === "auth/weak-password") {
                setsignupErrorMessage("Please enter a strong password")
            } else if (err.code === "auth/too-many-requests") {
                setsignupErrorMessage("Bro chill 😒")
            } else if (err.code === "auth/network-request-failed") {
                setsignupErrorMessage("Please be patient, try turning on your data")
            } else {
                setsignupErrorMessage("Something went wrong, please try again")
            }
        }
    }

    async function handleLogin() {
        if (!isEmail(loginEmail).result) {
            setToastMessage('Please enter a valid Email')
            setIsVisible(true)
            return;
        }

        if (!isStrongPassword(loginPassword).result && !isMediumPassword(loginPassword).result) {
            setToastMessage('Please enter a strong password')
            setIsVisible(true)
            return;
        }
        try {
            let userLoggedIn = await signInWithEmailAndPassword(auth, loginEmail, loginPassword)
            let result = userLoggedIn.user
            console.log(result)
            navigate('/dashboard');
        } catch (err) {
            console.log("Error detected:", err);
            if (err.code === "auth/invalid-email") {
                setloginErrorMessage("Please enter a valid Email")
            } else if (err.code === "auth/network-request-failed") {
                setloginErrorMessage("Please be patient, try turning on your data")
            } else if (err.code === "auth/invalid-credential") {
                setloginErrorMessage("Please enter a valid password")
            } else if (err.code === "auth/too-many-requests") {
                setloginErrorMessage("Bro chill 😒")
            } else {
                setloginErrorMessage("Something went wrong, please try again")
            }
        }
    }



    const [showPassword, setshowPassword] = useState(true)
    const [activeMenu, setactiveMenu] = useState("signup");

    return (
        <div className="auth-page flex font-montserrat">
            <div className="bg-linear-to-br from-[#1e40a9] to-[#1e2b42] w-[50%] h-screen text-white py-6 px-8 max-sm:hidden">
                <p className="text-4xl mb-4 mt-66">Your voice matters in building a better campus.</p>
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
            <div className='bg-accent-blue flex w-[50%] max-sm:justify-self-center max-sm:w-full max-sm:overflow-hidden max-sm:h-screen'>
                <div className='mx-auto w-96 max-sm:w-[85vw]'>
                    <div className='mb-8'>
                        <p className='text-2xl font-extrabold mt-4 mb-2 text-center'>Create an account</p>
                        <p className='text-gray-500 text-center text-[14px] font-raleway'>Enter your details below to get started</p>
                    </div>
                    <div className='w-96 h-12 bg-soft-blue flex items-center justify-center gap-2 rounded-md mb-6 max-sm:w-full max-sm:justify-self-center'>
                        <div className={`flex items-center justify-center w-46 h-10 rounded-md ${activeMenu === "signup" ? "bg-white shadow-sm" : "bg-transparent"}`} onClick={() => { setactiveMenu("signup"); }}>
                            <p>Sign Up</p>
                        </div>
                        <div className={`flex items-center justify-center w-46 h-10 rounded-md ${activeMenu === "login" ? "bg-white shadow-sm" : "bg-transparent"}`} onClick={() => { setactiveMenu("login"); }}>
                            <p>Log In</p>
                        </div>
                    </div>
                    <div className='max-sm:justify-self-center'>
                        {activeMenu === "signup" &&
                            <div>
                                <p className='text-center'>{signupErrorMessage}</p>
                                <div>
                                    <div>
                                        <p>Full Name</p>
                                        <div className='flex items-center gap-2 border border-gray-300 px-2 py-1 bg-white rounded-md my-2 w-96 max-sm:w-full'>
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-5 w-5 text-gray-600">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                                            </svg>
                                            <input name="fullName" onChange={(e) => setfullName(e.target.value)} type="text" placeholder='John Doe' className='fullname h-8 w-full outline-0 placeholder:text-[14px] placeholder:font-raleway' />
                                        </div>
                                    </div>
                                    <div>
                                        <p>Matric Number</p>
                                        <div className='flex items-center gap-2 border border-gray-300 px-2 py-1 bg-white rounded-md my-2 w-96 max-sm:w-full'>
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-5 w-5 text-gray-600">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z" />
                                            </svg>
                                            <input name="matricNumber" onChange={(e) => setmatricNumber(e.target.value)} type="text" placeholder='e.g ABC/12/3456' className='h-8 w-full outline-0 placeholder:text-[14px] placeholder:font-raleway' />
                                        </div>
                                    </div>
                                    <div>
                                        <p>Email</p>
                                        <div className='flex items-center gap-2 border border-gray-300 px-2 py-1 bg-white rounded-md my-2 w-96 max-sm:w-full'>
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-5 w-5 text-gray-600">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                            </svg>
                                            <input name="email" onChange={(e) => setemail(e.target.value)} type="text" placeholder='johndoe123@gmail.com' className='h-8 w-full outline-0 placeholder:text-[14px] placeholder:font-raleway' />
                                        </div>
                                    </div>
                                    <div>
                                        <p>Password</p>
                                        <div className='flex items-center gap-2 border border-gray-300 px-2 py-1 bg-white rounded-md my-2 w-96 max-sm:w-full'>
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-5 w-5 text-gray-600">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z" />
                                            </svg>
                                            <input name="password" onChange={(e) => setpassword(e.target.value)} type={showPassword ? "password" : "text"} placeholder='Create your Password' className='h-8 w-full outline-0 placeholder:text-[14px] placeholder:font-raleway' />
                                            <div>
                                                {showPassword ?
                                                    <svg onClick={() => { setshowPassword(false) }} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-5 w-5 text-gray-600">
                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                                    </svg> :
                                                    <svg onClick={() => { setshowPassword(true) }} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-5 w-5 text-gray-600">
                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.98 8.223A10.477 10.477 0 0 0 1.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.451 10.451 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.522 10.522 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88" />
                                                    </svg>
                                                }
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='grid gap-4 my-4'>
                                    <div className='flex'>
                                        <p className='text-[12px] text-gray-600 text-center'><input type="checkbox" /> By clicking create account, I agree that I have read and accepted the <a href="#" className='text-blue-500 underline'>Terms of Use</a> and <a href="#" className='text-blue-500 underline'>Privacy Policy</a></p>
                                    </div>
                                    <div>
                                        <div onClick={handleSignUp} className='bg-blue-500 flex gap-2 text-white w-96 h-10 items-center justify-center rounded-md hover:gap-4 transition-all max-sm:w-full'>
                                            <p>Create Account</p>
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                                <div className='text-center flex items-center justify-between max-sm:w-full'>
                                    <p className='text-[12px] text-gray-500'>Validation done by <a href="https://cascadejs.netlify.app/" className='text-blue-500 underline'>Cascadejs</a></p>
                                    <Link to="/">
                                        <p className='text-[13px] text-blue-500 font-raleway'>Back to Home</p>
                                    </Link>
                                </div>

                            </div>}
                        {activeMenu === "login" &&
                            <div className='w-96 max-sm:w-[85vw]'>
                                <p className='text-center'>{loginErrorMessage}</p>
                                <div className='mt-10'>
                                    <div>
                                        <p>Email</p>
                                        <div className='flex items-center gap-2 border border-gray-300 px-2 py-1 bg-white rounded-md my-2 w-96 max-sm:w-full'>
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-5 w-5 text-gray-600">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                            </svg>
                                            <input name='loginEmail' onChange={(e) => { setloginEmail(e.target.value) }} type="text" placeholder='johdoe123@gmail.com' className='h-8 w-full outline-0 placeholder:text-[14px] placeholder:font-raleway' />
                                        </div>
                                    </div>
                                    <div>
                                        <p>Password</p>
                                        <div className='flex items-center gap-2 border border-gray-300 px-2 py-1 bg-white rounded-md my-2 w-96 max-sm:w-full'>
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-5 w-5 text-gray-600">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z" />
                                            </svg>
                                            <input name='loginPassword' onChange={(e) => { setloginPassword(e.target.value) }} type={showPassword ? "password" : "text"} placeholder='Enter your Password' className='h-8 w-full outline-0 placeholder:text-[14px] placeholder:font-raleway' />
                                            <div>
                                                {showPassword ?
                                                    <svg onClick={() => { setshowPassword(false) }} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-5 w-5 text-gray-600">
                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                                    </svg> :
                                                    <svg onClick={() => { setshowPassword(true) }} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-5 w-5 text-gray-600">
                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.98 8.223A10.477 10.477 0 0 0 1.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.451 10.451 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.522 10.522 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88" />
                                                    </svg>
                                                }
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='grid gap-4 my-4'>
                                    <div>
                                        <div onClick={handleLogin} className='bg-blue-500 flex gap-2 text-white w-96 h-10 items-center justify-center rounded-md hover:gap-4 transition-all max-sm:w-full'>
                                            <p>Log In</p>
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                                <div className='text-center flex items-center justify-between max-sm:w-full'>
                                    <p className='text-[12px] text-gray-500'>Having Trouble? <a href="#" className='text-blue-500 underline'>Contact Support</a></p>
                                    <Link to="/">
                                        <p className='text-[13px] text-blue-500 font-raleway'>Back to Home</p>
                                    </Link>
                                </div>

                            </div>}
                    </div>
                </div>
            </div>
            <Toast IsVisible={IsVisible} message={toastMessage} type="error" setIsVisible={setIsVisible} />
        </div>
    );
}

export default Authpage;