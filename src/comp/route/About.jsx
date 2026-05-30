import React from 'react'
import { MdOutlineDevices } from 'react-icons/md'
import { HiOutlineDevicePhoneMobile } from 'react-icons/hi2'
import { LuMicrochip } from 'react-icons/lu'
import { GiTeacher } from 'react-icons/gi'
export default function About() {
      let doing = [
    {
      "icon": <MdOutlineDevices className='h-16 w-16 text-primary' />,
      "title": "Web Development",
      "des": "High-quality development of sites at the professional level."
    },
    {
      "icon": <HiOutlineDevicePhoneMobile className='h-16 w-16 text-primary' />,
      "title": "App Development",
      "des": "Cross platform app development where performance and satisfaction combines."
    },
    {
      "icon": <LuMicrochip className='h-16 w-16 text-primary' />,
      "title": "IoT",
      "des": "Developes custom IoT device to solve particular problem."
    },
    {
      "icon": <GiTeacher className='h-16 w-16 text-primary' />,
      "title": "Instructor",
      "des": "Instructs to solve hard topics in easy way that I learned hardly."
    },
  ]
  return (
    <>
    <header className='mt-3'>
          <h1 className='text-4xl'>About Me</h1>
          <div className='bg-primary w-20 h-1 my-4 rounded-3xl'></div>
        </header>
        <article className='text-justify'>
          I am Md Rafiz Uddin I am Md Rafiz Uddin I am Md Rafiz Uddin I am Md Rafiz Uddin I am Md Rafiz Uddin I am Md Rafiz Uddin I am Md Rafiz Uddin I am Md Rafiz Uddin I am Md Rafiz Uddin I am Md Rafiz Uddin I am Md Rafiz Uddin I am Md Rafiz Uddin I am Md Rafiz Uddin I am Md Rafiz Uddin I am Md Rafiz Uddin I am Md Rafiz Uddin I am Md Rafiz Uddin I am Md Rafiz Uddin I am Md Rafiz Uddin I am Md Rafiz Uddin I am Md Rafiz Uddin I am Md Rafiz Uddin I am Md Rafiz Uddin I am Md Rafiz Uddin I am Md Rafiz Uddin I am Md Rafiz Uddin I am Md Rafiz Uddin I am Md Rafiz Uddin I am Md Rafiz Uddin I am Md Rafiz Uddin I am Md Rafiz Uddin I am Md Rafiz Uddin I am Md Rafiz Uddin I am Md Rafiz Uddin I am Md Rafiz Uddin I am Md Rafiz Uddin I am Md Rafiz Uddin I am Md Rafiz Uddin I am Md Rafiz Uddin I am Md Rafiz Uddin I am Md Rafiz Uddin I am Md Rafiz Uddin I am Md Rafiz Uddin I am Md Rafiz Uddin I am Md Rafiz Uddin I am Md Rafiz Uddin I am Md Rafiz Uddin I am Md Rafiz Uddin I am Md Rafiz Uddin I am Md Rafiz Uddin
        </article>
        <h2 className='text-3xl my-4'>What I'm Doing</h2>
        <article className='text-justify'>
          <div className="grid grid-cols-2 gap-5">
            {doing.map((v, k) => <>
              <div className='card p-4'>
                <div className='flex gap-3'>
                  <div className="flex-1">{v.icon}</div>
                  <div className="flex-8">
                    <h2 className='text-2xl'>{v.title}</h2>
                    <p className='text-left '>{v.des}</p>
                  </div>
                </div>
              </div>
            </>)}
          </div>
        </article>
    </>
  )
}
