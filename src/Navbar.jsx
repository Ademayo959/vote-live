import logo from './assets/img/votelive-logo.png'
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className='max-w-full bg-white border-b border-gray-100'>
            <div className=' grid grid-cols-[30%_50%_20%] items-center gap-3 w-full font-montserrat max-w-7xl justify-self-center py-4 max-sm:grid-cols-[40%_50%] max-sm:justify-between max-sm:items-center max-sm:px-2'>
                <div>
                    <img src={logo} alt="logo" className='h-16 w-47 max-sm:h-14 max-sm:w-96' />
                </div>
                <div className='flex gap-8 max-sm:hidden'>
                    <p>Features</p>
                    <Link to="/dashboard">
                        <p>Browse Elections</p>
                    </Link>
                    <p>For Universities</p>
                    <p>Support</p>
                </div>
                <div className='flex gap-8 max-sm:gap-2'>
                    <Link to="/login">
                        <button className='w-28 bg-white h-10 text-black font-extrabold rounded-md border border-gray-300 max-sm:w-22 max-sm:h-9'>Log-In</button>
                    </Link>
                    <Link to="/signup">
                        <button className='w-28 bg-custom-blue h-10 text-white font-extrabold rounded-md max-sm:w-22 max-sm:h-9'>Sign-Up</button>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Navbar;