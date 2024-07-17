import React from 'react'

const GetinTouch = () => {
  return (
    <div id='support' className="container mx-auto px-5 py-8  xl:max-w-8xl lg:mx-auto lg:px-10 xl:px-16 lg:py-6 flex justify-center">
      <div className=' bg-[#1a73e8] w-full text-white rounded-lg p-6 flex justify-between items-center'>
        <div className='flex gap-6 justify-start items-center'>
            <div className=' flex h-24 w-24 p-4 shadow-md rounded-lg bg-white'>
                <img src="SVG.png" alt="image" />
            </div>
            <div>
                <h3 className=' text-2xl font-bold'>Want to delve deeper into the program?</h3>
                <p>Share your details to receive expert insights from our program team! </p>
            </div>
        </div>
        <div>
            <button className=' px-4 py-2 bg-white text-[#1a73e8] rounded-lg '>Get in touch </button>
        </div>
      </div>
    </div>
  )
}

export default GetinTouch
