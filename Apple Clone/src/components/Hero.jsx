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
          <h1 className='font-sf-pro text-3xl md:text-[54px] -mb-3'>MacBook Pro 14"</h1>
          <h4 className='font-sf-regular text-lg md:text-[26px]'>Supercharged by M5.</h4>
          <div className='flex gap-5 '>
            <button className='md:text-[16px] text-sm text-white font-sf-regular py-2 md:px-6 px-4 rounded-full bg-[#0071e3] hover:bg-[#0077ed] outline-none cursor-pointer'>Learn More</button>
            <button className='md:text-[16px] text-sm font-sf-regular py-2 md:px-6 px-4 rounded-full border-2 text-[#0071e3] border-[#0071e3] hover:bg-[#0077ed] hover:text-white outline-none cursor-pointer'>Buy</button>
          </div>
        </div>
      </section>

      <div className='grid grid-cols-1 md:grid-cols-2 w-full h-full gap-3 px-3'>


      <section className='relative w-full bg-[url(https://www.apple.com/v/home/ci/images/promos/apple-watch-series-11/promo_apple_watch_series_11__b63hxviqvonm_medium_2x.jpg)] bg-cover bg-center h-[560px]'>
        <div className='absolute top-[12%] right-1/2 translate-x-1/2 text-black flex flex-col items-center w-full gap-3'>
          <img src='https://www.apple.com/v/home/ci/images/logos/apple-watch-series-11/promo_logo_apple_watch_series_11__d9br21pxygya_medium_2x.png' className='h-8'/>
          <h4 className='font-sf-regular mb-2 -mt-1'>The ultimate way to watch your health.</h4>
          <div className='flex gap-5 '>
            <button className='text-sm text-white font-sf-regular py-2 px-4 rounded-full bg-[#0071e3] hover:bg-[#0077ed] outline-none cursor-pointer'>Learn More</button>
            <button className='text-sm font-sf-regular py-2 px-4 rounded-full border-2 text-[#0071e3] border-[#0071e3] hover:bg-[#0077ed] hover:text-white outline-none cursor-pointer'>Buy</button>
          </div>
        </div>
      </section>


      <section className='relative w-full bg-[url(https://www.apple.com/v/home/ci/images/promos/ipad-pro/promo_ipad_pro__c529dk533k4m_medium_2x.jpg)] bg-cover bg-center h-[560px]'>
        <div className='absolute top-[10%] right-1/2 translate-x-1/2 text-white flex flex-col items-center w-full gap-3'>
          <h1 className='font-sf-pro text-4xl -mb-3'>iPad Pro</h1>
          <h4 className='font-sf-regular text-lg -mb-4'>Advanced Al performance</h4>
          <h4 className='font-sf-regular text-lg '>and game-changing capabilities.</h4>
          <div className='flex gap-5 '>
            <button className='text-sm text-white font-sf-regular py-2 px-4 rounded-full bg-[#0071e3] hover:bg-[#0077ed] outline-none cursor-pointer'>Learn More</button>
            <button className='text-sm font-sf-regular py-2 px-4 rounded-full border-2 text-[#0071e3] border-[#0071e3] hover:bg-[#0077ed] hover:text-white outline-none cursor-pointer'>Buy</button>
          </div>
        </div>
      </section>

      <section className='relative w-full  bg-[url(https://www.apple.com/v/home/ci/images/promos/airpods-pro-3/promo_airpodspro_3__f6xmza7bglei_medium_2x.jpg)] bg-cover bg-center h-[560px]'>
        <div className='absolute top-[12%] right-1/2 translate-x-1/2 text-black flex flex-col items-center w-full gap-3'>
          <h1 className='font-sf-pro text-4xl'>AirPods Pro 3</h1>
          <h4 className='font-sf-regular text-lg -mb-3'>The world's best in-ear</h4>
          <h4 className='font-sf-regular text-lg '>Active Noise Cancellation.</h4>
          <div className='flex gap-5 '>
            <button className='text-sm text-white font-sf-regular py-2 px-4 rounded-full bg-[#0071e3] hover:bg-[#0077ed] outline-none cursor-pointer'>Learn More</button>
            <button className='text-sm font-sf-regular py-2 px-4 rounded-full border-2 text-[#0071e3] border-[#0071e3] hover:bg-[#0077ed] hover:text-white outline-none cursor-pointer'>Buy</button>
          </div>
        </div>
      </section>

        <section className='relative w-full bg-[url(https://www.apple.com/v/home/ci/images/promos/macbook-air/promo_macbook_air__fqowrtnxewqe_medium_2x.jpg)] bg-cover bg-center h-[560px]'>
        <div className='absolute top-[12%] right-1/2 translate-x-1/2 text-black flex flex-col items-center w-full gap-3'>
          <h1 className='font-sf-pro text-4xl'>MacBook Air</h1>
          <h4 className='font-sf-regular text-lg -mb-3'>Sky blue color.</h4>
          <h4 className='font-sf-regular text-lg '>Sky high performance with M4.</h4>
          <div className='flex gap-5 '>
            <button className='text-sm text-white font-sf-regular py-2 px-4 rounded-full bg-[#0071e3] hover:bg-[#0077ed] outline-none cursor-pointer'>Learn More</button>
            <button className='text-sm font-sf-regular py-2 px-4 rounded-full border-2 text-[#0071e3] border-[#0071e3] hover:bg-[#0077ed] hover:text-white outline-none cursor-pointer'>Buy</button>
          </div>
        </div>
      </section>

      <section className='relative w-full bg-[url(https://www.apple.com/v/home/ci/images/promos/iphone-tradein/promo_iphone_tradein__bugw15ka691e_medium_2x.jpg)] bg-cover bg-center h-[560px]'>
          
        <div className='absolute top-[12%] right-1/2 translate-x-1/2 text-black flex flex-col items-center w-full gap-3'>
          <img src="https://www.apple.com/v/home/ci/images/logos/iphone-tradein/promo_logo_iphone_tradein__7y3gtai5az66_medium_2x.png" className='h-10'  />
          <h4 className='font-sf-regular text-lg -mb-3'>Get up to $200-$700</h4>
          <h4 className='font-sf-regular text-lg -mb-3'>in credit when you trade in</h4>
          <h4 className='font-sf-regular text-lg  '>iPhone 13 or higher.'</h4>
          <div className='flex gap-5 '>
            <button className='text-sm text-white font-sf-regular py-2 px-4 rounded-full bg-[#0071e3] hover:bg-[#0077ed] outline-none cursor-pointer'>Get your estimate</button>
          </div>
        </div>
      </section>

      <section className='relative w-full  bg-[url(https://www.apple.com/v/home/ci/images/promos/apple-card/promo_apple_card__5cm7draujpey_medium_2x.jpg)] bg-cover bg-center h-[560px]'>
        <div className='absolute top-[12%] right-1/2 translate-x-1/2 text-black flex flex-col items-center w-full gap-3'>
          <img src="https://www.apple.com/v/home/ci/images/logos/apple-card/logo__dcojfwkzna2q_medium_2x.png" className='h-10' />
          <h4 className='font-sf-regular text-lg -mb-3'>Get up to 3% Daily Cash back</h4>
          <h4 className='font-sf-regular text-lg  '>with every purchase.</h4>
          <div className='flex gap-5 '>
            <button className='text-sm text-white font-sf-regular py-2 px-4 rounded-full bg-[#0071e3] hover:bg-[#0077ed] outline-none cursor-pointer'>Learn More</button>
            <button className='text-sm font-sf-regular py-2 px-4 rounded-full border-2 text-[#0071e3] border-[#0071e3] hover:bg-[#0077ed] hover:text-white outline-none cursor-pointer'>Apply now</button>
          </div>
        </div>
      </section>

      </div>
    </div>
  )
}

export default Hero