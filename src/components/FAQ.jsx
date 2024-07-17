import { joinPaths } from '@remix-run/router';
import React, { useState } from 'react'
import QDropdown from './QDropdown';

const buttonData = [
    "Eligibility", "How to use?", "Terms and Conditions"
]

const faqData = [
    {
        question: "Do I need to have prior Product Management and Project Management experience to enroll in the program?",
        answer: "No, the program is designed to be inclusive of all levels of experience. All topics will be covered from the basics, making it suitable for individuals from any field of work.",
        tag: "Eligibility"
    },
    {
        question: "What is the minimum system configuration required?",
        answer: "Any system with a stable internet connection and a modern web browser will be sufficient to access the program. The program is accessible on both Windows and Mac systems.",
        tag: "Eligibility"
    },
    {
        question: "How do I refer a friend?",
        answer: "To refer a friend, you can simply share your referral link with them. Once they sign up using your referral link, you will be eligible for the referral bonus.",
        tag: "How to use?"
    },
    {
        question: "How do I track my referrals?",
        answer: "You can track your referrals in the ‘Referral’ section of your account. Here, you can view the status of your referrals and the rewards you have earned.",
        tag: "How to use?"
    },
    {
        question: "What are the terms and conditions of the referral program?",
        answer: "The referral program is subject to the terms and conditions outlined in the program guidelines. Please refer to the guidelines for more information on the program rules and regulations.",
        tag: "Terms and Conditions"
    },
    {
        question: "What are the eligibility criteria for the referral program?",
        answer: "To be eligible for the referral program, you must be a current student or alumni of an Accredian program. You must also have an active account on the Accredian website to participate in the program.",
        tag: "Terms and Conditions"
    }
]

const FAQ = () => {

    const [active, setActive] = useState('Eligibility');

    return (
        <div id='faq' className="container mx-auto px-5 py-16 xl:max-w-8xl lg:mx-auto lg:px-10 xl:px-16 space-y-12">
            <h1 className=' text-2xl font-bold text-center'>Frequently Asked <span className=' text-blue-500'>Questions</span></h1>

            <div className=' flex gap-6 p-12'>
                <div className=' w-[30%] flex flex-col gap-6'>
                    {buttonData.map((item, index) => {
                        return (<button key={index} onClick={() => {
                            return setActive(item)
                        }} className={ active == item ? "text-blue-500 font-bold shadow-xl border-0 px-6 py-4 rounded-lg" : "px-6 py-4 border-2 border-black rounded-lg" }>{item}</button>)
                    }
                    )}
                </div>

                <div className=' w-[70%]'>

                    {
                        faqData.filter((item) => item.tag == active).map((item, index) => {
                            return (
                                <QDropdown key={index} question={item.question} answer={item.answer} />
                            )
                        })
                    }

                </div>

            </div>

        </div>
    )
}

export default FAQ
