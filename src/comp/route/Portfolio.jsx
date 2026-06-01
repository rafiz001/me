import React, { Suspense } from 'react'
import assuffa from "./../../assets/portfolio/assuffa.png"
import munjusha from "./../../assets/portfolio/banglaMunjusha.png"
import coverpage from "./../../assets/portfolio/coverPage.png"
import fm from "./../../assets/portfolio/FM.png"
import sheetRoutine from "./../../assets/portfolio/sheet_routine.png"
import sheetRoutineFlutter from "./../../assets/portfolio/sheet_routine(flutter).webp"
import urlshortner from "./../../assets/portfolio/url-shortner.png"
export default function Portfolio() {
    let portfolio = [
        {
            "category": "Full Stack Development",
            "name": "Assuffa Education Board",
            "image": assuffa
        },
        {
            "category": "Full Stack Development",
            "name": "Bangla Munjusha",
            "image": munjusha
        },
        {
            "category": "Front-End Development",
            "name": "Cover Page Generator",
            "image": coverpage
        },
        {
            "category": "Back-End Development",
            "name": "PHP File Manager",
            "image": fm
        },
        {
            "category": "Front-End Development",
            "name": "Sheet Routine",
            "image": sheetRoutine
        },
        {
            "category": "App Development",
            "name": "Sheet Routine",
            "image": sheetRoutineFlutter
        },
        {
            "category": "Full Stack Development",
            "name": "URL Shortner",
            "image": urlshortner
        },
    ]
    return (
        <>
            <header className='mt-3'>
                <h1 className='text-4xl'>Portfolio</h1>
                <div className='bg-primary w-20 h-1 my-4 rounded-3xl'></div>
            </header>

            <div className="grid grid-cols-3 gap-5">


                {portfolio.map((v, k) => <div key={k} className='flex justify-center'> <div className='scale-100 transition-all duration-500  starting:scale-50'>

                    <img src={v.image} loading='lazy' className='h-50 w-70 object-cover rounded-md' />
                    <div className='mt-3'>{v.name}</div>
                    <div className='text-gray-500'>{v.category}</div>
                </div></div>)}







            </div>
        </>
    )
}
