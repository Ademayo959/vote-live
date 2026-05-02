import { useEffect, useState } from "react";


const Toast = ({ message, type, IsVisible, setIsVisible }) => {

    useEffect(() => {
        if (IsVisible) {
            const timeoutRef = useRef()
            timeoutRef.current = setTimeout(() => {
                setIsVisible(false)
            }, 3000)
        }
        return () =>{clearTimeout(timeoutRef.current)}
    }, [IsVisible])

    return (
        <div className={`fixed top-4 transition-transform duration-300 ${IsVisible ? `translate-y-0` : `-translate-y-full`} ${type == "error" ? `bg-red-400` : `bg-green-500`}`} style={{ left: '50%', transform: 'translateX(-50%)' }}>
            <p className="p-3 font-montserrat text-xl">{message}</p>
        </div>
    );
}

export default Toast;