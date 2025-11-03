import React, { useEffect, useState } from 'react'

const NavSlideBar = () => {
    const cards = [
    {
      image:'https://is1-ssl.mzstatic.com/image/thumb/q8K9_wOTDnitX4ua9FenxQ/1960x1102.jpg',
      image2:'https://is1-ssl.mzstatic.com/image/thumb/Features211/v4/a9/bd/80/a9bd80fc-7894-7959-766f-219168cbd795/1864579f-f29f-4476-b9d9-952a1b9a9a48.png/548x1186.jpg',
      genere:'Drama',
      text:'Curiosity Kills',
      btn:'Stream now'
    },
    {
      image:'https://is1-ssl.mzstatic.com/image/thumb/V_qCiloAabdoxI690aQUqQ/1960x1102.jpg',
      image2:'https://is1-ssl.mzstatic.com/image/thumb/Features211/v4/a9/bd/80/a9bd80fc-7894-7959-766f-219168cbd795/1864579f-f29f-4476-b9d9-952a1b9a9a48.png/548x1186.jpg',
      genere:'Thriller',
      text:'Old sins cast new shadows',
      btn:'Stream now'
    },
    {image:'https://is1-ssl.mzstatic.com/image/thumb/0pX0OGKnucGvr-5dk9KAjw/1960x1102.jpg',
      image2:'https://is1-ssl.mzstatic.com/image/thumb/Features211/v4/a9/bd/80/a9bd80fc-7894-7959-766f-219168cbd795/1864579f-f29f-4476-b9d9-952a1b9a9a48.png/548x1186.jpg',
      genere:'Drama',
      text:'Curiosity Kills',
      btn:'Stream now'
    },
    {image:'https://is1-ssl.mzstatic.com/image/thumb/v1Wvp6Byt-9VCCddt0YALA/1960x1102.jpg',
      image2:'https://is1-ssl.mzstatic.com/image/thumb/Features211/v4/a9/bd/80/a9bd80fc-7894-7959-766f-219168cbd795/1864579f-f29f-4476-b9d9-952a1b9a9a48.png/548x1186.jpg',
      genere:'Drama',
      text:'Curiosity Kills',
      btn:'Stream now'
    },
    {image:'https://is1-ssl.mzstatic.com/image/thumb/Features/v4/97/3c/ad/973cad18-1b22-8b11-41d0-0ce92fd4317b/eeb71960-77a5-4cec-a541-2fc280c1a128.png/1960x1102.jpg',
      image2:'https://is1-ssl.mzstatic.com/image/thumb/Features211/v4/a9/bd/80/a9bd80fc-7894-7959-766f-219168cbd795/1864579f-f29f-4476-b9d9-952a1b9a9a48.png/548x1186.jpg',
      genere:'Drama',
      text:'Curiosity Kills',
      btn:'Stream now'
    },
    {image:'https://is1-ssl.mzstatic.com/image/thumb/E6TMrjuZQl_6PX5D5NgGpA/1960x1102.jpg',
      image2:'https://is1-ssl.mzstatic.com/image/thumb/Features221/v4/56/e5/a3/56e5a3f7-ce7f-d334-6da5-a7a4bab186c4/f1e8d010-d902-415b-9765-d81d274559ed.png/548x1186.jpg',
      genere:'Drama',
      text:'Curiosity Kills',
      btn:'Stream now'
    },
    {image:'https://is1-ssl.mzstatic.com/image/thumb/AuIohMbuqPRCEEPoBCWr8w/1960x1102.jpg',
      image2:'https://is1-ssl.mzstatic.com/image/thumb/Features221/v4/56/e5/a3/56e5a3f7-ce7f-d334-6da5-a7a4bab186c4/f1e8d010-d902-415b-9765-d81d274559ed.png/548x1186.jpg',
      genere:'Drama',
      text:'Curiosity Kills',
      btn:'Stream now'
    },
    {image:'https://is1-ssl.mzstatic.com/image/thumb/9dce-B0hUgREvlPfPw7ZFA/1960x1102.jpg',
      image2:'https://is1-ssl.mzstatic.com/image/thumb/Features221/v4/56/e5/a3/56e5a3f7-ce7f-d334-6da5-a7a4bab186c4/f1e8d010-d902-415b-9765-d81d274559ed.png/548x1186.jpg',
      genere:'Drama',
      text:'Curiosity Kills',
      btn:'Stream now'
    },
    {image:'https://is1-ssl.mzstatic.com/image/thumb/5geoozRQUAjDnWF2KLHyJg/1960x1102.jpg',
      image2:'https://is1-ssl.mzstatic.com/image/thumb/Features221/v4/56/e5/a3/56e5a3f7-ce7f-d334-6da5-a7a4bab186c4/f1e8d010-d902-415b-9765-d81d274559ed.png/548x1186.jpg',
      genere:'Drama',
      text:'Curiosity Kills',
      btn:'Stream now'
    },
    {image:'https://is1-ssl.mzstatic.com/image/thumb/ageP1PYyLi7UlNiWMva32Q/1960x1102.jpg',
      image2:'https://is1-ssl.mzstatic.com/image/thumb/Features126/v4/b3/fa/77/b3fa7718-b692-ca56-87ce-5af818a447f7/955d54ab-6986-4e68-981d-b11df46a0029.png/548x1186.jpg',
      genere:'Comedy',
      text:'Kindness make a comeback',
      btn:'Stream now'
    }
  ]
  const [currentIndex, setCurrentIndex] = useState(0)
  const next = () => {
    if(currentIndex == cards.length - 2){
      setCurrentIndex(0);
    }
    else{
      setCurrentIndex(currentIndex + 1);
    }
  }

  useEffect(()=>{
    let id = setInterval(next,4000);
    setTimeout(()=>clearInterval(id),4000);
  },[currentIndex])


  return (
    <div className='flex flex-col items-center'>
      <div className='h-[400px] lg:h-screen w-full flex overflow-hidden gap-3 p-3 items-center justify-between '>
      <div className='flex gap-2 translate-x-[-70%] transition-transform duration-700 ease-in-out h-full w-full'  style={{transform:`translateX(-${currentIndex*80}%)`}}>
        {cards.map((card,index)=>{
          return <div key={index}  className={`h-full bg-cover bg-center shrink-0 w-[80%] relative `} style={{ backgroundImage: `url(${card.image})` }}>
            <div className={`absolute bottom-10 left-10 flex items-center gap-3 text-xl transition-all duration-700 ease-in-out ${
              index == currentIndex+1 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-full"
            }`}>
            <button className='px-4 py-2 bg-white rounded-full font-[550] font-sf-regular text-base'>{card.btn}</button>
            <h4 className='text-white'><span className='font-semibold'>{card.genere}. </span>{card.text}</h4>
            </div>
            </div>
        })}
      </div>
    </div>
    <div className='flex gap-2 mb-10'>
      <div className=' '></div>
      {Array.from({ length: 9 }).map((_, index) => (
  <div
    key={index}
    className={`w-2 h-2 rounded-full transition-all duration-700 ease-in-out ${
      index == currentIndex
        ? 'bg-black'
        : 'bg-[#757575]' 
    }`}
  >
  </div>
))}
    </div >
    </div>
  )
}

export default NavSlideBar