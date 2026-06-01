import React from 'react'
import { PiBriefcase, PiStudentLight } from 'react-icons/pi'

export default function Resume() {
    let resumes = [
        {
            "type": "Education",
            "icon": <PiStudentLight className='h-8 w-8 text-primary' />,
            "inside": [
                {
                    "institute": "Varendra University",
                    "time": "2022-2026(expected)",
                    "details": "Completed coursework toward a BSc in Computer Science and Engineering with a current CGPA of 3.82 out of 4.00. Expected graduation in 2026."
                },
                {
                    "institute": "Rajshahi Education Board Govt. Model School & College",
                    "time": "2012-2021",
                    "details": "Completed Secondary School Certificate (SSC) and Higher Secondary Certificate (HSC) in the Science group from this institution."
                }
            ],

        },
        {
            "type": "Experience",
            "icon": <PiBriefcase className='h-8 w-8 text-primary' />,
            "inside": [
                {
                    "institute": "Blue Hills IT",
                    "time": "February 2024 - July 2024 (Onsite)",
                    "details": "Developed backend for SaaS based project using Laravel."
                },
                {
                    "institute": "As Suffa Education Board",
                    "time": "2023-2026 (Project Based)",
                    "details": "Implemented full featured education board website including board-wise result, admission, certificate, payment gateway etc. Served 400+ students."
                },
                {
                    "institute": "Bangla Munjusha",
                    "time": "2023-2024 (Project Based)",
                    "details": "Developed a couching center website where students can purchase courses, see course contents with interactive way, practice MCQ and random model test."
                }
            ],

        }
    ]
    let skills = [
        {
            "name": "Backend Development (Laravel, PHP, MySql)",
            "amount": 85,
        },
        {
            "name": "Frontend Development (React, TailwindCSS)",
            "amount": 75,
        },
        {
            "name": "App Development (Flutter)",
            "amount": 70,
        },
        {
            "name": "IoT (NodeMCU, Esp32, Arduino)",
            "amount": 70,
        },
    ]
    return (
        <>
            <header className='mt-3'>
                <h1 className='text-4xl'>Resume</h1>
                <div className='bg-primary w-20 h-1 my-4 rounded-3xl'></div>
            </header>
            <section>

                {resumes.map((val, key) => <div key={key} className='mb-10'>
                    <div className="flex items-center gap-3 pb-3">
                        <div className='card p-2 relative before:absolute before:top-full before:left-6 before:w-px before:h-full before:bg-primary'>{val.icon}</div>
                        <div className='text-3xl'>{val.type}</div>
                    </div>
                    <ul className='pl-4'>
                        {val.inside.map((v, k) => <li key={k} className='relative flex gap-3 pt-3'>
                            <div className='mt-1 before:absolute before:left-2 before:top-2 before:w-px before:h-full before:bg-primary'>
                                <div className='h-4 w-4 rounded-full bg-primary-outer flex items-center justify-center '>
                                    <div className='h-2 w-2 rounded-full bg-primary z-10 '></div>
                                </div>
                            </div>
                            <div>
                                <b className=''>{v.institute}</b>
                                <div className='text-primary'>{v.time}</div>
                                <p>{v.details}</p>

                            </div>
                        </li>)}
                    </ul>
                </div>)}

                <h1 className='text-3xl py-3 font-bold'>
                    My Skills
                </h1>

                <div className="card p-10 mt-3 ">
                    <div className='flex flex-col items-start w-full gap-6'>
                        {skills.map((v, k) => <div key={k} className='w-full'>
                            <div>{v.name} <span className='text-gray-400'>{v.amount}%</span></div>
                            <div className='w-full bg-background'>
                            <div className='bg-primary h-2 rounded-full ' style={{ "width": `${v.amount}%` }}></div>
                            </div>
                        </div>)}
                    </div>

                </div>

            </section>
        </>
    )
}
