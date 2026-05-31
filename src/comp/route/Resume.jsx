import React from 'react'
import { PiStudentLight } from 'react-icons/pi'

export default function Resume() {
    return (
        <>
            <header className='mt-3'>
                <h1 className='text-4xl'>Resume</h1>
                <div className='bg-primary w-20 h-1 my-4 rounded-3xl'></div>
            </header>
            <section>

            <div className="flex items-center gap-3 pb-6 ">
                <div className='card p-2 '><PiStudentLight className='h-8 w-8 text-primary'/></div>
                <div className='text-3xl'>Education</div>
            </div>
            <ul className='pl-3'>
                <li className='relative flex gap-3'>
                        <div className='mt-1 before:absolute before:left-2 before:top-2 before:w-px before:h-full before:bg-primary'>
                            <div className='h-4 w-4 rounded-full bg-primary-outer flex items-center justify-center'>
                                <div className='h-2 w-2 rounded-full bg-primary z-10'></div>
                            </div>
                        </div>
                    <div>

                        <b className=''>Varendra University</b>
                        <div className='text-primary'>2022-2026</div>
                        <p>I graduated BSc in Computer Science and Engineering from Varendra University with CGPA: 3.82 out of 4.00 .</p>
                        
                    </div>
                </li>
            </ul>

            </section>
        </>
    )
}
