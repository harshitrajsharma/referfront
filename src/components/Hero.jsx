import { useState } from "react";
import { Link } from "react-router-dom";
import ReferralModal from "./ReferralModal";


export default function Hero() {


  const [isModalOpen, setIsModalOpen] = useState(false);


    return (
        <div className="container mx-auto px-5 py-8  xl:max-w-8xl lg:mx-auto lg:px-10 xl:px-16 lg:py-6 flex justify-center">
            <div className="bg-[#eef5ff] shadow-md w-full flex flex-col-reverse md:flex-row px-4 md:px-10 rounded-xl">
                <div className="w-full md:w-[50%] md:pr-28 md:pl-4 md:py-12 md:text-left xl:gap-6 flex flex-col justify-center text-center   ">
                    <h1 className="text-3xl lg:text-5xl xl:text-6xl font-bold pb-6 leading-12 lg:leading-20">Let's Learn <br />
                        & Earn</h1>
                    <p className=" text-2xl md:text-3xl lg:text-4xl font-semibold ">
                        Get chance to to win <br /> up-to <span className=" text-[#1a73e8] text-3xl md:text-4xl lg:text-5xl">Rs: 15,000</span>
                    </p>
                    <div className="mt-6 py-3 w-full flex justify-center md:justify-start ">
                        <button
                            onClick={() => setIsModalOpen(true)} href="#" className=" rounded-lg text-white bg-[#1a73e8] px-6 py-3 hover:bg-[#0867e3] ">Refer Now</button>
                        
                    </div>
                </div>
                <div className="md:w-[50%] flex justify-end md:relative">
                    <img className=" w-full h-full object-contain bottom-0 md:absolute" src="heroimg.png" />
                </div>
            </div>
            <ReferralModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        </div>
    )
}