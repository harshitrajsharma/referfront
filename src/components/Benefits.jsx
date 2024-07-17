import { Table } from '@mui/material';
import React, { useState } from 'react'
import BasicTable from './Table';

const buttonData = [
  "All Programs",
  "Product Management",
  "Strategy & Leadership",
  "Business Management",
  "Fintech",
  "Senior Management",
  "Data Science",
  "Digital Transformation",
  "Business Analytics"
]

function createData(
  program,
  referrerBonus,
  refereeBonus,
) {
  return { program, referrerBonus, refereeBonus };
}

const rows = [
  createData('Professional Certificate Program in Product Management', '₹ 7,000', '₹ 9,000'),
  createData('PG Certificate Program in Strategic Product Management', '₹ 9,000', '₹ 11,000'),
  createData('Executive Program in Data Driven Product Management', '₹ 10,000', '₹ 10,000'),
  createData('Executive Program in Product Management and Digital Transformation', '₹ 10,000', '₹ 10,000'),
  createData('Executive Program in Product Management', '₹ 10,000', '₹ 10,000'),
  createData('Advanced Certification in Product Management', '₹ 10,000', '₹ 10,000'),
  createData('Executive Program in Product Management and Project Management', '₹ 10,000', '₹ 10,000'),
  createData('Executive Program in Product Management and Project Management', '₹ 10,000', '₹ 10,000'),
];

const Benifits = () => {

  const [active, setActive] = useState('All Programs');

  return (
    <div id='benefits' className="container mx-auto px-5 py-16 xl:max-w-8xl lg:mx-auto lg:px-10 xl:px-16 space-y-12">
      <h1 className=' text-2xl font-bold text-center'>What are the <span className=' text-blue-500'>Referral Benifits ?</span></h1>


      <div className='flex gap-6 p-12'>

        <div className=' w-[30%] flex flex-col border border-black rounded-xl'>
          {buttonData.map((item, index) => {
            return (<button key={index} onClick={() => {
              return setActive(item)
            }} className={active == item ? "bg-blue-500 text-white font-bold  border-0 px-6 py-4 rounded-xl " : "px-6 py-4 border-b-2 border-black rounded-xl"}>{item}</button>)
          }
          )}
        </div>

        <div className=' w-[70%] text-black'>
            <BasicTable rows={rows} />
        </div>

      </div>


      <div className=" py-3 w-full flex justify-center items-center">
        <button href="#" className=" rounded-lg text-white bg-[#1a73e8] px-6 py-3 hover:bg-[#0867e3] ">Refer Now</button>
      </div>
    </div>
  )
}

export default Benifits
