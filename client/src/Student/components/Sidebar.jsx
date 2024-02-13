import {React,useState} from 'react'
import { NavLink } from 'react-router-dom';
import { RiHome5Fill,RiHome5Line } from "react-icons/ri";
import { IoDocuments,IoDocumentsOutline,IoSettings,IoSettingsOutline } from "react-icons/io5";
import { MdExplore,MdOutlineExplore  } from "react-icons/md";
const Sidebar = () => {
  const [activeLink, setActiveLink] = useState(0);

  const handleLinkClick = (index) => {
    setActiveLink(index);
  };
  return (
    <div className='flex flex-col w-full h-full gap-10 place-items-center'>
      <h3 className='text-xl font-semibold'>Internship Portal</h3>
      <div className='flex flex-col gap-6 text-justify font-semibold'>
        <NavLink to="/" className={`link ${activeLink ? 'active' : ''}`} onClick={() => handleLinkClick(0)}>
          <button className='flex flex-row gap-2'>
          {activeLink ? <RiHome5Fill style={{fontSize: 22}}/> : <RiHome5Line style={{fontSize: 22}}/>}Dashboard
          </button>
        </NavLink>
        <NavLink to="/myinternships" className={`link ${activeLink ? 'active' : ''}`} onClick={() => handleLinkClick(0)}>
          <button className='flex flex-row gap-2'>
          {activeLink ? <IoDocuments style={{fontSize: 22}}/> : <IoDocumentsOutline style={{fontSize: 22}}/>}Myinternships
          </button>
        </NavLink>
        <NavLink to="/explore" className={`link ${activeLink ? 'active' : ''}`} onClick={() => handleLinkClick(0)}>
          <button className='flex flex-row gap-2'>
          {activeLink ? <MdExplore style={{fontSize: 22}}/> : <MdOutlineExplore style={{fontSize: 22}}/>}Explore
          </button>
        </NavLink>
        <NavLink to="/settings" className={`link ${activeLink ? 'active' : ''}`} onClick={() => handleLinkClick(0)}>
          <button className='flex flex-row gap-2'>
          {activeLink ? <IoSettings style={{fontSize: 22}}/> : <IoSettingsOutline style={{fontSize: 22}}/>}Settings
          </button>
        </NavLink>
      </div>
    </div>
  )
}

export default Sidebar