import React from 'react'
import Sidebar from '../components/Sidebar'
const Studentdashboard = () => {
  return (
    <div className='flex'>
    <div className='flex-col'>
        <Sidebar/>
    </div>
    <div className='flex-col'>
        <div className='text-3xl font-semibold p-2'>Welcome Back</div>

    </div>
    
    </div>
    
  )
}

export default Studentdashboard