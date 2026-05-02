import { useEffect, useRef } from "react";


const Toast = ({ message, type, IsVisible, setIsVisible }) => {
    const timeoutRef = useRef()

    useEffect(() => {
        if (IsVisible) {
            timeoutRef.current = setTimeout(() => {
                setIsVisible(false)
            }, 3000)
        }
        return () =>{clearTimeout(timeoutRef.current)}
    }, [IsVisible])

    return (
        <div className={`z-10000 fixed top-4 transition-transform duration-300 whitespace-nowrap rounded-lg ${IsVisible ? `translate-y-0 opacity-100` : `-translate-y-full opacity-0`} ${type == "error" ? `bg-red-400` : `bg-green-500`}`} style={{ left: '50%', transform: 'translateX(-50%)' }}>
            <p className="p-3 font-montserrat text-lg">{message}</p>
        </div>
    );
}

export default Toast;