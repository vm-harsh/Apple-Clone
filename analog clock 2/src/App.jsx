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

  return (
    <div className='container' >
      <div className='clock'>
        <div className="hand" style={{"--c":"#ff3d58", transform:`rotate(${hdegree}deg)`}}><i style={{"--l":"64px"}}></i></div>
        <div className="hand" style={{"--c":"lawngreen", transform:`rotate(${mdegree}deg)`}}><i style={{"--l":"84px"}}></i></div>
        <div className="hand" style={{"--c":"gold", transform:`rotate(${sdegree}deg)`}}><i style={{"--l":"98px"}}></i></div>
        <span style={{"--i":1}}><b>1</b></span>
        <span style={{"--i":2}}><b>2</b></span>
        <span style={{"--i":3}}><b>3</b></span>
        <span style={{"--i":4}}><b>4</b></span>
        <span style={{"--i":5}}><b>5</b></span>
        <span style={{"--i":6}}><b>6</b></span>
        <span style={{"--i":7}}><b>7</b></span>
        <span style={{"--i":8}}><b>8</b></span>
        <span style={{"--i":9}}><b>9</b></span>
        <span style={{"--i":10}}><b>10</b></span>
        <span style={{"--i":11}}><b>11</b></span>
        <span style={{"--i":12}}><b>12</b></span>
      </div>
    </div>
  )
}

export default App