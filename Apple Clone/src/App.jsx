import React, { useRef, useState } from 'react'
import NavBar from './components/NavBar'
import NavPanel from './components/NavPanel'
import gsap from 'gsap';
import {useGSAP} from '@gsap/react'  


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
    <div className='h-screen w-full overflow-hidden'>
      <NavBar setNavPanelOpen={setNavPanelOpen}/>
      <div className='-translate-y-full z-10' ref={navPanelRef}>
        <NavPanel setNavPanelOpen={setNavPanelOpen}/>
      </div>
      
    </div>
  )
}

export default App