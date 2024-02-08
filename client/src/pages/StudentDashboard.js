import React from 'react'
import Sidebar from '../components/Sidebar'
const StudentDashboard = () => {
  return (
    <div className='flex w-full h-screen'>
      <div className='flex-col bg-red-50 p-5 w-[15%]'>
        <Sidebar/>
      </div>
      <div className='rounded-lg bg-slate-100 w-[85%]'>
        <h1 className="flex flex-col text-3xl font-bold p-5 items-start">Welcome back</h1>
        <div>
          
        </div>
      </div>
    </div>
  )
}

export default StudentDashboard