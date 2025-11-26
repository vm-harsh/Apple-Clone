import React from 'react'
import sun from './assets/sun.svg'
import moon from './assets/moon.svg'
import mid from './assets/mid.webp'
import './App.css'
import Navbar from './components/Navbar'
const App = () => {
  return (
    <div className='relative w-full h-screen bg-[#0a0a0b] z-10'>
      <img src={sun} className='absolute -z-10 w-full -top-[55%]' />
      <img src={moon} className='absolute -z-10 w-full top-[23%]' />
      <Navbar />
      <div className='mx-auto py-56 flex flex-col justify-center items-center'>
        <img src={mid} className='w-33'/>
        <h1 class="mt-8 font-clash text-4xl font-bold sm:text-5xl lg:text-5xl xl:text-7xl">The Metaverse Explorer</h1>
        <p class="mx-auto mt-5 mb-12 max-w-xl text-xl text-center lg:text-3xl">Light enables users to discover connections that was not possible before.</p>
        <button class="inline-flex items-center rounded-full bg-black py-3 px-6 text-base font-medium text-white shadow-sm hover:bg-[#212528] cursor-pointer" href="/home/explore"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" aria-hidden="true" class="mr-2 -ml-0.5 h-4 w-4"><path stroke-linecap="round" stroke-linejoin="round" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"></path></svg><span class="text-3xl">&nbsp;</span>Explore now</button>
      </div>
      
    </div>

  )
}

export default App