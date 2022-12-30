import React from 'react'
import '../App.css'


function AddSkills() {
  return (
    <div className="AddSkills bg-gray-200 h-screen flex items-center justify-center">
      <center>
      <div className=''>
        <div className="container bg-white w-80 ">
          <h1 className='text-2xl p-2'>
            AddSkills
          </h1>
          <h4 className='text-left mx-10'>Email address or username</h4>
          <input type="text" className='border-2 border-gray-500 m-3 w-3/4'/>
          <h4 className='text-left mx-10'>Password</h4>
          <input type="password"  className='border-2 border-gray-500 m-3 w-3/4'/>
          <a className='text-[#4DA6FF]' href="#"><h4 className='text-left mx-10'>Forgot password</h4></a>

          <button className='border-2 border-gray-400 m-3 w-3/4 bg-[#4DA6FF]' type="submit">AddSkills</button>
          <br />
          <a className='text-[#4DA6FF] my-2' href="#">Don't have an account?</a>
        </div>
      </div>
      </center>
    </div>
  )
}

export default Login
