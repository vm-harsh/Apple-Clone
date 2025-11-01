import React from 'react'

const Hero = () => {
  return (
    <div className='w-full h-full'>
      <section className='relative w-full h-full bg-[url(https://www.apple.com/v/home/ci/images/heroes/iphone-17-pro/hero_iphone_17_pro__bknyzxfk2agi_small_2x.jpg)] md:bg-[url(https://www.apple.com/v/home/ci/images/heroes/iphone-17-pro/hero_iphone_17_pro__bknyzxfk2agi_mediumtall_2x.jpg)] bg-cover bg-center mb-3'>
        <div className='absolute top-[12%] right-1/2 translate-x-1/2 text-white flex flex-col items-center w-full gap-5'>
          <h1 className='font-sf-pro text-3xl md:text-[54px] -mb-5'>iPhone 17 Pro</h1>
          <h4 className='font-sf-regular text-lg md:text-[26px] '>All out Pro.</h4>
          <div className='flex gap-5 '>
            <button className='md:text-[16px] text-sm text-white font-sf-regular py-2 md:px-6 px-4 rounded-full bg-[#0071e3] hover:bg-[#0077ed] outline-none cursor-pointer'>Learn More</button>
            <button className='md:text-[16px] text-sm font-sf-regular py-2 md:px-6 px-4 rounded-full border-2 text-[#0071e3] border-[#0071e3] hover:bg-[#0077ed] hover:text-white outline-none cursor-pointer'>Buy</button>
          </div>
        </div>
      </section>

      <section className='relative w-full h-full bg-[url(https://www.apple.com/v/home/ci/images/heroes/iphone-air/hero_iphone_air__0gxyavihpiqu_small_2x.jpg)] md:bg-[url(https://www.apple.com/v/home/ci/images/heroes/iphone-air/hero_iphone_air__0gxyavihpiqu_large.jpg)] bg-cover bg-center mb-3'>
        <div className='absolute top-[12%] right-1/2 translate-x-1/2 text-black flex flex-col items-center w-full gap-3'>
          <h1 className='font-sf-pro text-3xl md:text-[54px] -mb-2'>iPhone Air</h1>
          <h4 className='font-sf-regular text-lg md:text-[26px] -mb-3'>The thinnest iPhone ever.</h4>
          <h4 className='font-sf-regular text-lg md:text-[26px] '>With the power of pro inside.</h4>
          <div className='flex gap-5 '>
            <button className='md:text-[16px] text-sm text-white font-sf-regular py-2 md:px-6 px-4 rounded-full bg-[#0071e3] hover:bg-[#0077ed] outline-none cursor-pointer'>Learn More</button>
            <button className='md:text-[16px] text-sm font-sf-regular py-2 md:px-6 px-4 rounded-full border-2 text-[#0071e3] border-[#0071e3] hover:bg-[#0077ed] hover:text-white outline-none cursor-pointer'>Buy</button>
          </div>
        </div>
      </section>

      <section className='relative w-full h-full bg-[url(https://www.apple.com/v/home/ci/images/heroes/macbook-pro-m5/hero_macbook_pro_m5__fjgmapbkxo2u_large.jpg)] bg-cover bg-center mb-3'>
        <div className='absolute top-[12%] right-1/2 translate-x-1/2 text-white flex flex-col items-center w-full gap-3'>
          <h1 className='font-sf-pro text-3xl md:text-[54px] -mb-5'>MacBook Pro 14"</h1>
          <h4 className='font-sf-regular text-lg md:text-[26px]'>Supercharged by M5.</h4>
          <div className='flex gap-5 '>
            <button className='md:text-[16px] text-sm text-white font-sf-regular py-2 md:px-6 px-4 rounded-full bg-[#0071e3] hover:bg-[#0077ed] outline-none cursor-pointer'>Learn More</button>
            <button className='md:text-[16px] text-sm font-sf-regular py-2 md:px-6 px-4 rounded-full border-2 text-[#0071e3] border-[#0071e3] hover:bg-[#0077ed] hover:text-white outline-none cursor-pointer'>Buy</button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Hero