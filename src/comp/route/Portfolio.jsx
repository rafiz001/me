import React, { Suspense, useState } from 'react'
import { VscEye, VscGithub, VscGlobe } from 'react-icons/vsc'
export default function Portfolio() {
    let portfolio = [
        {
            "category": "Full Stack",
            "name": "Assuffa Education Board",
            "image": "/portfolio/assuffa.png",
            "des": "I developed full featured education board website using PHP, MySql, Bootstrap CSS. Features including institute and board wise result, certificate, payment gateway, teacher salary using attendance etc.",
            "tech": ["PHP", "MySql", "Bootstrap CSS", "Vanilla JS"],
            "live": "https://assuffaeducationboard.com/",
            "source": null

        },
        {
            "category": "Full Stack",
            "name": "Bangla Munjusha",
            "image": "/portfolio/banglaMunjusha.png",
            "des": "I developed a couching center website where students can purchase courses, see course contents with interactive way, practice MCQ and random model test.",
            "tech": ["Laravel", "MySql", "Bootstrap CSS", "Vanilla JS"],
            "live": "https://banglamunjusha.com/",
            "source": null

        },
        {
            "category": "Front-End",
            "name": "Cover Page Generator",
            "image": "/portfolio/coverPage.png",
            "des": "I developed a cover page generator that can generate assignment and lab report cover page as well as index page of lab report, which is very crusial for every university student.",
            "tech": ["React", "TailwindCSS", "DaisyUI"],
            "live": "https://rafiz001.github.io/cover",
            "source": "https://github.com/rafiz001/cover"
        },
        {
            "category": "Back-End",
            "name": "PHP File Manager",
            "image": "/portfolio/FM.png",
            "des": "I developed a php based file manager covering in only a single file. By using this we can easily manage our server's file with its crusial features like Cut, Copy, Paste, Zip/UnZip, Multiple File Upload etc.",
            "tech": ["PHP", "Raw CSS"],
            "live": null,
            "source": "https://github.com/rafiz001/php-file-manager"
        },
        {
            "category": "Front-End",
            "name": "Sheet Routine",
            "image": "/portfolio/sheet_routine.png",
            "des": "In this project I developed a web based routine client that is designed for university students. It directly fetches routine from the custom Google Sheet URL and saves it to the browser's local storage. ",
            "tech": ["React", "TailwindCSS"],
            "live": "https://rafiz001.github.io/sheet-routine/",
            "source": "https://github.com/rafiz001/sheet-routine"
        },
        {
            "category": "App",
            "name": "Sheet Routine",
            "image": "/portfolio/sheet_routine_flutter.png",
            "des": "This is a succesor of my react based routine client made using dart language. It saves the routine into phone storage for offline access. The routine is collected dynamically from the provided Google Sheet URL. Downloaded 1k+ from Google Play.",
            "tech": ["Flutter", "Dart"],
            "live": "https://play.google.com/store/apps/details?id=com.rafizuddin.sheetroutine",
            "source": "https://github.com/rafiz001/sheet-routine-flutter"
        },
        {
            "category": "Full Stack",
            "name": "Simple URL Shortner",
            "image": "/portfolio/url-shortner.png",
            "des": "On the starting of my backend journey, I developed a simple URL shortner based on php and `.htaccess` of apache http server. It allows users to short URL using custom alias and show a statistical info about the shorted URL",
            "tech": ["PHP", ".htaccess"],
            "live": null,
            "source": "https://github.com/rafiz001/php-URL-shortner"
        },
    ]
    let categories = new Set(portfolio.map((v, k) => v.category))

    const [selected, setSelected] = useState(0)
    const [selectedCat, setSelectedCat] = useState('All')
    const selectProject = function (key) {
        setSelected(key);
        document.getElementById('modal').showModal();
    }
    const selectCat = function (cat) {
        setSelectedCat(cat);
    }
    return (
        <>
            <dialog className='mx-0 md:mx-auto m-auto max-w-[100vw] md:max-w-[650px] rounded-xl ttranslate-y-[-20%] bg-transparent focus-visible:outline-0 backdrop:bg-gray-600/70' id='modal'>
                <div className='p-2 flex flex-col items-centerr bg-card'>
                    <div className='py-2 flex flex-row justify-end sticky top-0'>
                        <div onClick={() => document.getElementById('modal').close()} className='rounded-full px-3 py-1 border border-primary text-primary cursor-pointer '> X </div>
                    </div>
                    <div className='flex justify-center'>
                        <img src={portfolio[selected].image} alt="" srcset="" className='h-auto w-150' />
                    </div>
                    <div className='text-white text-center'>
                        <h1 className='text-2xl font-bold my-2'>
                            {portfolio[selected].name}
                        </h1>
                        <h3 >
                            <span className='bg-gray-700 p-1 rounded-md'>{portfolio[selected].category}</span>
                        </h3>
                        <div className='text-left flex justify-center gap-2 my-2'>
                            {/* don't be confisued here, these are simple ternary operations */}
                            {portfolio[selected].live ?
                                <a href={portfolio[selected].live} className='text-primary outline-0 flex items-center gap-1' target='_blank'> <VscGlobe /> Live Link</a> : <></>}

                            {(portfolio[selected].live && portfolio[selected].source) ? <div>||</div> : <></>}

                            {portfolio[selected].source ?
                                <a href={portfolio[selected].source} className='text-primary outline-0 flex items-center gap-1' target='_blank'> <VscGithub /> Source Code</a> : <></>}
                        </div>
                        <div className='text-justify'>
                            {portfolio[selected].des}
                        </div>
                        <div className='text-left my-5'>
                            Technology Used:
                            {portfolio[selected].tech?.map((v, k) => <span key={k} className='bg-gray-700 p-1 mx-1 rounded-md'>{v}</span>)}
                        </div>
                    </div>
                </div>
            </dialog>
            <header className='mt-3'>
                <h1 className='text-4xl'>Portfolio</h1>
                <div className='bg-primary w-20 h-1 my-4 rounded-3xl'></div>
            </header>
            <ul className='flex gap-4 my-4'>
                <li><button onClick={() => selectCat('All')} className={`${selectedCat == 'All' ? 'text-primary' : ''} cursor-pointer`}>All</button></li>
                {Array.from(categories).map((v, k) => <li key={k}><button onClick={() => selectCat(v)} className={`${selectedCat == v ? 'text-primary' : ''} cursor-pointer`}>{v}</button></li>)}
            </ul>
            <div className="grid grid-cols-3 gap-5">


                {portfolio.map(function (v, k) {
                    // console.log(v.category, selectedCat)
                    if (v.category == selectedCat || selectedCat=='All') {
                        return <div key={k} className='flex justify-center'> <div className='scale-100 transition-all duration-500  starting:scale-50'>
                            <div className='h-40 w-60 object-cover rounded-md overflow-hidden cursor-pointer relative group' onClick={() => selectProject(k)}>
                                <img src={v.image} loading='lazy' className='h-40 w-60   duration-200 group-hover:scale-110 group-hover:brightness-50' />
                                <div className='bg-card rounded-xl p-3 absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] hidden group-hover:block '>
                                    <VscEye className='h-6 w-6 text-primary' />

                                </div>
                            </div>
                            <div className='mt-3'>{v.name}</div>
                            <div className='text-gray-500'>{v.category}</div>
                        </div></div>;
                    }
                })}







            </div>
        </>
    )
}
