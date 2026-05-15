import { useState } from 'react'
import profile from "./assets/react.svg"
import { MdEmail, MdMailOutline, MdOutlineCalendarMonth, MdOutlineCall, MdOutlineLocationOn } from "react-icons/md";
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className=' flex justify-center mt-7'>
        <div className='flex flex-col xl:flex-row justify-center gap-4 w-full xl:w-[80%]'>

          <div className='flex-0 xl:flex-2 b i bg-background text-text  p-3 rounded-2xl border border-border'>
            <div className='flex justify-center my-5'>

              <div className='rounded-3xl bg-card w-32 h-32 flex justify-center items-center'><img src={profile} className='w-28 h-28' alt="" /></div>
            </div>
            <h1 className='text-3xl text-center my-3'>
              Md. Rafiz Uddin
            </h1>

            <div className='flex justify-center py-3'>
              <div className='bg-card text-white py-1 px-4 rounded-md text-sm'>Web Developer</div>
            </div>
            <div className='my-3 px-5'>
              <hr className=' text-border' />
            </div>
            <div className='flex '>
              <div className='flex flex-col gap-4'>
                <div className='flex '>
                  <div className='bg-card w-12 h-12 rounded-md flex justify-center items-center'> <MdMailOutline className='w-6 h-6 text-primary' /></div>
                <div className='ml-2'>

                  <div className='text-title'>Email</div>
                  <a href='mailto:rafiz.t33pk5@gmail.com'>rafiz.t33pk5@gmail.com</a>

                </div>
              </div>
              <div className='flex '>
                <div className='bg-card w-12 h-12 rounded-md flex justify-center items-center'> <MdOutlineCall className='w-6 h-6 text-primary' /></div>
              <div className='ml-2'>
                <div className='text-title'>Phone</div>
                <a href='phone:+8801724065716'>+8801724065716</a>
              </div>

            </div>
              <div className='flex '>
                <div className='bg-card w-12 h-12 rounded-md flex justify-center items-center'> <MdOutlineCalendarMonth className='w-6 h-6 text-primary' /></div>
              <div className='ml-2'>
                <div className='text-title'>Birth Day</div>
                <div>6 September, 2002</div>
              </div>

            </div>
              <div className='flex '>
                <div className='bg-card w-12 h-12 rounded-md flex justify-center items-center'> <MdOutlineLocationOn className='w-6 h-6 text-primary' /></div>
              <div className='ml-2'>
                <div className='text-title'>Location</div>
                <a href='https://maps.app.goo.gl/9wiNFMpodfNJr4Mi9' className='truncate'>Chotobongram, Sopura-6203,<br/> Rajshahi, Bangladesh</a>
              </div>

            </div>
          </div>
          </div>
          </div>
          <div className='flex-0 xl:flex-8 b i bg-background text-text  p-3 rounded-2xl border border-border'>rafiz</div>
        </div>
      </div>
    </>
  )
}

export default App
