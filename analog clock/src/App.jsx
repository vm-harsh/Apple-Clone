import React, { useEffect, useState } from 'react'
import './App.css'
const App = () => {

  const [hdegree,setHdegree] = useState(0);
  const [mdegree,setMdegree] = useState(0);
  const [sdegree,setSdegree] = useState(0);

  useEffect(()=>{
    setInterval(()=>{
      const d = new Date();
      const htime = d.getHours();
      const mtime = d.getMinutes();
      const stime = d.getSeconds();

      setHdegree(()=>30*htime + mtime/2);
      setMdegree(()=>mtime*6);
      setSdegree(()=>stime*6);
    },1000);
  },[]);


  return(
    <div className='w-full h-screen flex items-center justify-center'>
      <div className='relative h-[40vw] w-[40vw] bg-[url(https://imgs.search.brave.com/hWmU7wrqegW-Y_52YyVgKY4hKRyoQb6xvLGPTQZoMKw/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9jbGlw/YXJ0LWxpYnJhcnku/Y29tL2ltYWdlcy82/aXlvWFhiaW4ucG5n)] bg-cover bg-center'>
        <div id='hour' style={{transform:`rotate(${hdegree}deg)`}}></div>
        <div id='minute' style={{transform:`rotate(${mdegree}deg)`}}></div>
        <div id='second' style={{transform:`rotate(${sdegree}deg)`}}></div>
      </div>
    </div>
  )

}

export default App;