import logo from './assets/img/votelive-logo.png'

const Footer = () => {
    return (
        <div className="Footer m-w-full bg-white h-72 border-t border-gray-300 font-montserrat">
            <div className="max-w-7xl justify-self-center grid grid-rows-[70%_10%_20%] gap-1">
                <div className="grid grid-cols-[40%_20%_20%_20%] gap-6 mb-26 mt-12 max-w-full">
                    <div>
                        <img src={logo} alt="" className='h-16 w-46' />
                        <p className='text-gray-500'>Empowering universities with secure, transparent, and accessible digital voting solutions.</p>
                    </div>
                    <div className='grid gap-4'>
                        <b className='font-extrabold'>Platforms</b>
                        <div className='font-extralight text-gray-500 gap-2 grid'>
                            <p>Features</p>
                            <p>Live Elections</p>
                            <p>Polls & Surveys</p>
                            <p>Security</p>
                        </div>
                    </div>
                    <div className='grid gap-4'>
                        <b className='font-extrabold'>Support</b>
                        <div className='font-extralight text-gray-500 grid gap-2'>
                            <p>Help Center</p>
                            <p>Documentation</p>
                            <p>Contact Us</p>
                            <p>Status</p>
                        </div>
                    </div>
                    <div className='grid gap-4'>
                        <b className='font-extrabold'>Legal</b>
                        <div className='font-extralight text-gray-500 grid gap-2'>
                            <p>Privacy Policy</p>
                            <p>Live Elections</p>
                            <p>Cookie Policy</p>
                        </div>
                    </div>
                </div>
                <div>
                    <hr className='text-gray-300' />
                </div>
                <div className='flex items-center justify-between mt-0 text-gray-600'>
                    <p>© 2025 Votelive platform. All rights reserved</p>
                    <div className='flex items-center text-sm'>
                        <span>Built with</span>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-5 w-5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.362 5.214A8.252 8.252 0 0 1 12 21 8.25 8.25 0 0 1 6.038 7.047 8.287 8.287 0 0 0 9 9.601a8.983 8.983 0 0 1 3.361-6.867 8.21 8.21 0 0 0 3 2.48Z" />
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 18a3.75 3.75 0 0 0 .495-7.468 5.99 5.99 0 0 0-1.925 3.547 5.975 5.975 0 0 1-2.133-1.001A3.75 3.75 0 0 0 12 18Z" />
                        </svg>
                        <span>by <a href="https://x.com/build_pixels" className='underline text-custom-blue'>Oluwamayowa</a></span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;