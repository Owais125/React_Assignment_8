import React from 'react'
import { Link } from "react-router-dom";


const Login = () => {
  return (
    <div>
        
<form className="px-7 h-screen grid justify-center items-center">
    <div className="grid gap-6 w-96" id="form" >

      <div className="grid gap-6 w-full">
        <input className="p-3 shadow-2xl  glass w-full placeholder:text-black outline-none focus:border-solid border-[#035ec5] focus:border-[1px]" type="Email" placeholder="Email" id="Email" name="email"/>
     
      </div>
      <div className="flex gap-3">
        <input className="p-3 glass shadow-2xl  w-full placeholder:text-black outline-none focus:border-solid focus:border-[1px] border-[#035ec5]" type="password" placeholder="Password" id="password" name="password" required=""/>
     
      </div>
      <button className="outline-none glass shadow-2xl  w-full p-3  bg-[#ffffff42] hover:border-[#035ec5] hover:border-solid hover:border-[1px]  hover:text-[#035ec5] font-bold" type="submit"> <Link to="/last">Login</Link></button>
    <div>
        <h2 className='text-center'>You Have Analready Account? <span className=' '> <Link to="/login">Login</Link></span></h2>
    </div>
    </div>
  </form>




    </div>
  )
}

export default Login