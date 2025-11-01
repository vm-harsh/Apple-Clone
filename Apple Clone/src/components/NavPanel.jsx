import React from 'react'
import { IoCloseOutline } from "react-icons/io5";

const NavPanel = ({setNavPanelOpen}) => {
  const navItems = ['Store','Mac','Ipad','Watch','Vision','Airpods','TV & Home','Entertainment','Accessories','Support'];
  return (
    <div className='md:hidden w-full h-screen bg-[#161617] px-15 py-20 [&>*:hover]:text-white text-[rgba(255,255,255,.8)] relative '>
      <IoCloseOutline className='absolute top-5 right-3  text-3xl cursor-pointer duration-500 ' onClick={()=>{setNavPanelOpen(false)}}/>
      {navItems.map((item,index)=>{
          return <li key={index} className='list-none font-bold  text-[26px] cursor-pointer flex justify-between group'>{item}
          <span className='opacity-0 group-hover:opacity-100 transition-all duration-100 ease-in'>
            <svg height="48" fill='currentColor' viewBox="0 0 9 48" width="9" xmlns="http://www.w3.org/2000/svg">
          <path d="m7.4382 24.0621-6.5581-6.4238c-.2368-.2319-.2407-.6118-.0088-.8486.2324-.2373.6123-.2407.8486-.0088l7 6.8569c.1157.1138.1807.2695.1802.4316-.001.1621-.0674.3174-.1846.4297l-7 6.7242c-.1162.1118-.2661.1675-.4155.1675-.1577 0-.3149-.062-.4326-.1846-.2295-.2388-.2222-.6187.0171-.8481l6.5537-6.2959z"></path>
          </svg>
          </span>
          </li>
        })}
    </div>
  )
}

export default NavPanel