import React from 'react'
import Sidebar from '../../components/Sidebar'

const MyInternship = () => {
  return (
    <div className='flex w-full h-screen '>
      <div className='flex-col bg-red-50 p-5 w-[15%] '>
        <Sidebar/>
      </div>
      <div className='rounded-lg bg-slate-100 w-[85%] p-5'>
        
      </div>
    </div>
  )
}

export default MyInternship