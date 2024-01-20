import React from 'react'
import { Link } from "react-router-dom";


const Home = () => {
  return (
    <div className='flex justify-center items-center bg-slate-800'>
      <div className='main-2  main h-screen flex justify-center items-center 
     bg-gradient-to-r
     to-blue-950
     from-blue-700
     to-gray-500
     w-3/6	
     rounded-full
     card
  
      '>
<div>
  
<div className='main-2 '>
          <h1 className='text-9xl animate-bounce animate-thrice animate-ease-out' >Welcome</h1>
          
        </div>


        <button className=" mt-8 outline-none glass shadow-2xl  w-full p-3  bg-orange-400 hover:border-[#035ec5] hover:border-solid hover:border-[1px]  hover:text-[#035ec5] font-bold" type="submit"><Link to="/singup">Join Us Now</Link></button>
</div>

      </div>

    </div>
  )
}

export default Home