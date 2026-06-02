import React, { Suspense } from 'react'
import { VscEye } from 'react-icons/vsc'
export default function Portfolio() {
    let portfolio = [
        {
            "category": "Full Stack Development",
            "name": "Assuffa Education Board",
            "image": "/portfolio/assuffa.png"
        },
        {
            "category": "Full Stack Development",
            "name": "Bangla Munjusha",
            "image": "/portfolio/banglaMunjusha.png"
        },
        {
            "category": "Front-End Development",
            "name": "Cover Page Generator",
            "image": "/portfolio/coverPage.png"
        },
        {
            "category": "Back-End Development",
            "name": "PHP File Manager",
            "image": "/portfolio/FM.png"
        },
        {
            "category": "Front-End Development",
            "name": "Sheet Routine",
            "image": "/portfolio/sheet_routine.png"
        },
        {
            "category": "App Development",
            "name": "Sheet Routine",
            "image": "/portfolio/sheet_routine(flutter).webp"
        },
        {
            "category": "Full Stack Development",
            "name": "URL Shortner",
            "image": "/portfolio/url-shortner.png"
        },
    ]
    return (
        <>
            <dialog className='mx-0 md:mx-auto m-auto max-w-[100vw] md:max-w-[650px] rounded-xl ttranslate-y-[-20%] bg-transparent focus-visible:outline-0 backdrop:bg-gray-600/30' id='modal'>
                <div className='p-2 flex flex-col items-centerr bg-card'>
                    <div className='py-2 flex flex-row justify-end'>
                        <div onClick={() => document.getElementById('modal').close()} className='rounded-full px-3 py-1 border border-primary text-primary cursor-pointer'> X </div>
                    </div>
                    <div className='flex justify-center'>
                        <img src="/portfolio/assuffa.png" alt="" srcset="" className='h-auto w-150' />
                    </div>
                    <div className='text-white text-center'>
                        <h1 className='text-2xl font-bold'>
                            Assuffa Education Board
                        </h1>
                        <h3>
                            <span className='bg-gray-700 p-1 rounded-md'>Full Stack</span>
                        </h3>
                        <div className='text-justify'>
                            I developed full featured education board website using PHP, MySql, Bootstrap CSS. Features including institute and board wise result, certificate, payment gateway, teacher salary using attendance etc.
                        </div>
                        <div className='text-left my-5 '>
                            Technology Used: 
                            <span className='bg-gray-700 p-1 mx-1 rounded-md'>PHP</span>
                            <span className='bg-gray-700 p-1 mx-1 rounded-md'>MySql</span>
                            <span className='bg-gray-700 p-1 mx-1 rounded-md'>Bootstrap CSS</span>
                        </div>
                        <div className='text-left'>
                            Live Link: <a href="https://assuffaeducationboard.com/" className='text-primary' target='_blank'>assuffaeducationboard.com</a>
                        </div>
                    </div>
                </div>
            </dialog>
            <header className='mt-3'>
                <h1 className='text-4xl'>Portfolio</h1>
                <div className='bg-primary w-20 h-1 my-4 rounded-3xl'></div>
            </header>

            <div className="grid grid-cols-3 gap-5">


                {portfolio.map((v, k) => <div key={k} className='flex justify-center'> <div className='scale-100 transition-all duration-500  starting:scale-50'>

                    <div className='h-40 w-60 object-cover overflow-hidden cursor-pointer relative group' onClick={() => document.getElementById('modal').showModal()}>
                        <img src={v.image} loading='lazy' className='h-40 w-60  rounded-md  duration-200 group-hover:scale-110 group-hover:brightness-50' />
                        <div className='bg-card rounded-xl p-3 absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] hidden group-hover:block '>
                            <VscEye className='h-6 w-6 text-primary' />

                        </div>
                    </div>
                    <div className='mt-3'>{v.name}</div>
                    <div className='text-gray-500'>{v.category}</div>
                </div></div>)}







            </div>
        </>
    )
}
