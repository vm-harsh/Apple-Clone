import React, { useRef, useState } from 'react'
import NavBar from './components/NavBar'
import NavPanel from './components/NavPanel'
import gsap from 'gsap';
import {useGSAP} from '@gsap/react'  
import Hero from './components/Hero';
import './index.css'
import NavSlideBar from './components/navSlideBar';

const App = () => {
  const[navPanelOpen,setNavPanelOpen] = useState(false);
  const navPanelRef = useRef(null);

  useGSAP(()=>{
    if(navPanelOpen){
      gsap.to(navPanelRef.current,{
        transform:"translateY(0)"
      })
    }
    else{
      gsap.to(navPanelRef.current,{
        transform:"translateY(-100%)"
      })
    }
  },[navPanelOpen])

  return (
    <div className='h-screen w-full overflow-auto'>
        <NavBar setNavPanelOpen={setNavPanelOpen}/>
      <div className='-translate-y-full fixed top-0 left-0 w-full h-screen z-50' ref={navPanelRef}>
        <NavPanel setNavPanelOpen={setNavPanelOpen}/>
      </div>
      <div className='w-full'>
        <Hero/>
      </div>
      <div>
      <NavSlideBar/>
      </div>
    </div>
  )
}

export default App