
import React from 'react'
import HowCard from './HowCard'

const data = [
    {
        icon: "icon1.png",
        des: "Submit referrals easily via our website’s referral section."
    },
    {
        icon: "icon2.png",
        des: "Earn rewards once your referral joins an Accredian program."
    },
    {
        icon: "icon3.png",
        des: "Both parties receive a bonus 30 days after program enrollment."
    }

]

const How = () => {
    return (
        <div className="container bg-[#eef5ff] mx-auto px-5 py-16 xl:max-w-8xl lg:mx-auto lg:px-10 xl:px-16 space-y-12">
            <h1 className=' text-2xl font-bold text-center'>How do I <span className=' text-blue-500'>Refer ?</span></h1>
            <div className='flex flex-col md:flex-row gap-6 justify-center items-center md:justify-around'>
                {
                    data.map((item, index) => {
                        return <HowCard key={index} icon={item.icon} des={item.des} />
                    })
                }
            </div>

            <div className=" py-3 w-full flex justify-center items-center">
                <button href="#" className=" rounded-lg text-white bg-[#1a73e8] px-6 py-3 hover:bg-[#0867e3] ">Refer Now</button>
            </div>
        </div>
    )
}

export default How
