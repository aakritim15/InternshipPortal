import React from 'react'
import Sidebar from '../components/Sidebar'
const StudentDashboard = () => {
  return (
    <div className='flex'>
      <div className='flex-col'>
        <Sidebar/>
      </div>
      <div>
        <h1 className=" flex-col  text-3xl font-bold p-3">Welcome back</h1>
      </div>
    </div>
  )
}

export default StudentDashboard