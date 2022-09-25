import React, { Fragment, useEffect, useRef } from 'react';
import { MdKeyboard, MdOutlineVideoCall, MdOutlineKeyboardReturn } from "react-icons/md";
const Home = () => {
    const videoRef = useRef();
    useEffect(() => {
        videoRef.current.play();
    }, []);
    
  return (
    <Fragment>
         <div className="videoContainer bg-black">
            <div className="overlay">
              <video autoPlay loop muted ref={videoRef}>
                <source src="/video.mp4" />
                <source
                  src="/video.mp4"
                  type="video/webm"
                />
              </video>
            </div>
          </div>
          <section className="bg-transparent text-white">
            <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
              <div className="mr-auto place-self-center lg:col-span-7">
                <h1 className="max-w-2xl mb-4 text-3xl font-bold leading-none md:text-4xl xl:text-5xl dark:text-white">
                  Trò chuyện video chất lượng miễn phí cho tất cả mọi người
                </h1>
                <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
                  Trang web trò chuyện miễn phí qua video. Tạo cuộc trò chuyện chỉ với 1 cái nhấp chuột
                </p>
                <button size="lg" className="mr-5 border rounded px-5 py-2">
                    <div className="flex items-center gap-x-2">
                        <MdOutlineVideoCall className='w-6 h-6' />
                        Cuộc trò chuyện mới
                    </div>
                </button>
                <button className="mr-5 border rounded px-5 py-2">
                    <div className="flex items-center gap-x-2">
                        <MdKeyboard className='w-6 h-6' />
                        <input placeholder=' Tham gia cuộc trò chuyện' className='bg-transparent outline-0 w-content'/>
                        <MdOutlineKeyboardReturn className='w-6 h-6'/>
                    </div>
                </button>

               
              </div>
              <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
                {/* <img
              src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/phone-mockup.png"
              alt="mockup"
            /> */}
              </div>
            </div>
          </section>

    </Fragment>
  )
}

export default Home