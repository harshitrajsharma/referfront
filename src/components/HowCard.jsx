import React from 'react'

const HowCard = ({ icon, des }) => {
    return (
        <div className=' p-8 h-64 w-64 rounded-full shadow-[#090909c5] shadow-xl flex flex-col justify-center items-center'>
            <div className='h-24 w-24 flex justify-center items-center p-2'>
                <img src={icon} alt="icon" className=' w-full h-full object-contain' />
            </div>
            <p className=' text-center'>
                {des}
            </p>
        </div>
    )
}

export default HowCard
