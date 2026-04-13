import logo from './assets/img/votelive-logo.png'
import { Link } from 'react-router-dom';

const Navbar = ({scrollToFeatures}) => {
    return (
        <div className='max-w-full bg-white border-b border-gray-100'>
            <div className=' grid grid-cols-[30%_50%_20%] items-center gap-3 w-full font-montserrat max-w-7xl justify-self-center py-4 max-sm:flex max-sm:justify-between max-sm:items-center max-sm:px-3'>
                <div className='max-sm:w-fit'>
                    <img src={logo} alt="logo" className='h-16 w-auto object-contain max-sm:h-12' />
                </div>
                <div className='flex gap-8 max-sm:hidden'>
                    <p onClick={()=>{scrollToFeatures()}} className='cursor-pointer'>Features</p>
                    <Link to="/dashboard">
                        <p>Browse Elections</p>
                    </Link>
                    <p>How it Works</p>
                    <Link to="/help">
                        <p>Support</p>
                    </Link>
                </div>
                <div className='flex gap-8 max-sm:gap-2'>
                    <Link to="/login">
                        <button className='w-28 bg-white h-10 text-black font-extrabold rounded-md border border-gray-300 max-sm:w-18 max-sm:h-8 max-sm:text-[13px]'>Log-In</button>
                    </Link>
                    <Link to="/signup">
                        <button className='w-28 bg-custom-blue h-10 text-white font-extrabold rounded-md max-sm:w-18 max-sm:h-8 max-sm:text-[13px]'>Sign-Up</button>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Navbar;