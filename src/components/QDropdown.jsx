import React, {useState} from 'react'
import { FaMinus, FaPlus } from 'react-icons/fa'

export default function QDropdown(props) {
  const [showAnswer, setShowAnswer] = useState(false);

  return (
    <section className="mx-auto max-w-7xl pb-4 md:px-0">
      <div>
        <div className="mx-auto max-w-3xl space-y-4 ">
          <div className="cursor-pointer transition-all duration-200">
            <button
              type="button"
              className="flex w-full items-center justify-between px-4 py-5 sm:p-6"
            >
              <h1 className="flex font-semibold text-start text-base  w-full" onClick={()=>{
                if(!showAnswer){
                  return setShowAnswer(true)
                }
                else{
                  return setShowAnswer(false)
                }
              }}>{props.question}</h1>

                <ul>
                  {!showAnswer && <li><button onClick={()=> setShowAnswer(true)}><FaPlus /></button></li>}
                  {showAnswer && <li><button onClick={()=> setShowAnswer(false)}><FaMinus /></button></li>}
                </ul>
              
              
            </button>
            <div className={showAnswer && "px-4 pb-5 sm:px-6 sm:pb-6"}>
              { showAnswer && <p className="text-gray-800">
                {props.answer}
              </p>}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}