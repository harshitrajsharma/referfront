import React from 'react'
import { NavLink } from 'react-router-dom'

const Navigation = () => {
    const getNavLinkClass = ({ isActive }) => (
        isActive ? "underline text-blue-500 font-bold" : "text-black "
    );

    return (
        <div className='flex justify-center'>
            <div className='flex w-[60%] justify-around rounded-full bg-[#e6f0fc] px-6 py-3'>
                <NavLink to="/" className={getNavLinkClass}>Refer</NavLink>
                <a href="#benefits" className="hover:text-blue-500">Benefits</a>
                <a href="#faq" className="hover:text-blue-500">FAQs</a>
                <a href="#support" className="hover:text-blue-500">Support</a>
            </div>
        </div>
    )
}

export default Navigation
