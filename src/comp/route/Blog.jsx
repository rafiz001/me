import React, { useState } from 'react'
function capitalize(given) {
    return given
        .split(' ')
        .map((word) => word[0].toUpperCase() + word.substr(1))
        .join(' ');
}
export default function Blog() {
    const [selected, setSelected] = useState(0);
    const selectProject = function (key) {
        setSelected(key);
        document.getElementById('modal').showModal();
    }
    const blog = [
        {
            "ctgry": "xyz",
            "time": 1781064375000,
            "img": null,
            "title": "This is my blog",
            "dscrptn": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non fugiat, praesentium minima esse nesciunt a similique ut eos veritatis possimus beatae veniam necessitatibus, facere ipsum."
        },
        {
            "ctgry": "abc",
            "time": 1721064375000,
            "img": null,
            "title": "This is my blog 2",
            "dscrptn": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non fugiat, praesentium minima esse nesciunt a similique ut eos veritatis possimus beatae veniam necessitatibus, facere ipsum."
        },
        {
            "ctgry": "abc",
            "time": 1721064375000,
            "img": null,
            "title": "This is my blog 2",
            "dscrptn": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non fugiat, praesentium minima esse nesciunt a similique ut eos veritatis possimus beatae veniam necessitatibus, facere ipsum."
        },
        {
            "ctgry": "abc",
            "time": 1721064375000,
            "img": null,
            "title": "This is my blog 2",
            "dscrptn": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non fugiat, praesentium minima esse nesciunt a similique ut eos veritatis possimus beatae veniam necessitatibus, facere ipsum."
        },
        {
            "ctgry": "abc",
            "time": 1721064375000,
            "img": 'https://wallpapersok.com/images/high/minimalist-macbook-classic-keyboard-y9dsxns6sdvy4kuh.jpg',
            "title": "This is my blog 2",
            "dscrptn": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non fugiat, praesentium minima esse nesciunt a similique ut eos veritatis possimus beatae veniam necessitatibus, facere ipsum."
        },
        {
            "ctgry": "abc",
            "time": 1721064375000,
            "img": null,
            "title": "This is my blog 2",
            "dscrptn": `অংশ অংশভাক আঁইশ ইঁচড়েপাকা ঈক্ষণ ঈদৃক অংশভাগী জওয়ান অংশাঙ্কিত ইউক্যালিপটাস অংশাবতার হালহদিশ পিতৃতর্পণ টকানো ঈক্ষিত জগজ্জন তকতনামা আঁকুবাঁকু পঁইছা
  জগঝপ্প পঁহুছা দ্রাবিড়ী আঁকুড়ি ঈদৃক জগদম্বা টঙ্ক অংশিন্‌ জগদ্গৌরী আঁচা তকরার তিলপিটালি গজ-দাঁত অংশু ঈপ্সনীয় পইতা শংকরাভরণ হংসগমন পকড় অংশুধর ঈপ্সু ঈর্ষী
  জগদ্ধাত্রী আঁজনাই তক্তি শংসনপত্র হংসারূঢ়া দংশল তক্ষক অংশুমান ইকেবানা জগদ্বন্ধু ঈশিত্ব ইক্ষ্বাকু আঁজি অংসকুট টঙ্কক তক্ষণাস্ত্র পকোড়া দংষ্ট্রা শকটিকা হকচকা বঁইচি শকল`
        },
        {
            "ctgry": "abc",
            "time": 1721064375000,
            "img": null,
            "title": "This is my blog 2",
            "dscrptn": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non fugiat, praesentium minima esse nesciunt a similique ut eos veritatis possimus beatae veniam necessitatibus, facere ipsum."
        },
        {
            "ctgry": "abc",
            "time": 1721064375000,
            "img": null,
            "title": "This is my blog 2",
            "dscrptn": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non fugiat, praesentium minima esse nesciunt a similique ut eos veritatis possimus beatae veniam necessitatibus, facere ipsum."
        },
        {
            "ctgry": "abc",
            "time": 1721064375000,
            "img": null,
            "title": "This is my blog 2",
            "dscrptn": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non fugiat, praesentium minima esse nesciunt a similique ut eos veritatis possimus beatae veniam necessitatibus, facere ipsum."
        },
        {
            "ctgry": "abc",
            "time": 1721064375000,
            "img": null,
            "title": "This is my blog 2",
            "dscrptn": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non fugiat, praesentium minima esse nesciunt a similique ut eos veritatis possimus beatae veniam necessitatibus, facere ipsum."
        },
        {
            "ctgry": "abc",
            "time": 1721064375000,
            "img": null,
            "title": "This is my blog 2",
            "dscrptn": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non fugiat, praesentium minima esse nesciunt a similique ut eos veritatis possimus beatae veniam necessitatibus, facere ipsum."
        },
        {
            "ctgry": "abc",
            "time": 1721064375000,
            "img": null,
            "title": "This is my blog 2",
            "dscrptn": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non fugiat, praesentium minima esse nesciunt a similique ut eos veritatis possimus beatae veniam necessitatibus, facere ipsum."
        },
    ]
    return (
        <>
            <header className='mt-3'>
                <h1 className='text-4xl'>Blog</h1>
                <div className='bg-primary w-20 h-1 my-4 rounded-3xl'></div>
            </header>
            <dialog className='mx-0 md:mx-auto m-auto max-w-[100vw] md:max-w-[650px] rounded-xl bg-transparent focus-visible:outline-0 backdrop:bg-gray-600/70' id='modal'>
                <div className='p-2 flex flex-col items-centerr bg-card'>
                    <div className='py-2 flex flex-row justify-end sticky top-0'>
                        <div onClick={() => document.getElementById('modal').close()} className='rounded-full px-3 py-1 border border-primary text-primary cursor-pointer '> X </div>
                    </div>
                    <div className='flex justify-center'>
                        <img src={blog[selected].img ?? '/macbook.jpg'} alt="" srcset="" className='h-auto w-150' />
                    </div>
                    <div className='text-white text-center'>
                        <h1 className='text-2xl font-bold my-2'>
                            {capitalize(blog[selected].title)}
                        </h1>
                        <div className='text-gray-500 mb-2'>{capitalize(blog[selected].ctgry)} &bull; {new Date(blog[selected].time).toDateString()}</div>
                        

                        <div className='text-left'>
                            {blog[selected].dscrptn}
                        </div>

                    </div>
                </div>
            </dialog>
            <div className="grid grid-cols-2 gap-8">


                {blog.map(function (v, k) {
                    return <div key={k} className='flex justify-center rounded-xl cursor-pointer bg-card group' onClick={() => selectProject(k)}> <div>
                        <div className='h-50 object-cover rounded-xl overflow-hidden  relative '>
                            <img src={v.img ?? '/macbook.jpg'} loading='lazy' className=' duration-200 group-hover:scale-110' />

                        </div>
                        <div className='p-5 mt-3'>
                            <div className='text-gray-500'>{capitalize(v.ctgry)} &bull; {new Date(v.time).toDateString()}</div>
                            <div className='my-2 text-bold text-2xl group-hover:text-primary'>{capitalize(v.title)}</div>
                            <div className='text-justify'>{v.dscrptn.split(' ').slice(0, 10).join(' ')} ...</div>
                        </div>
                    </div></div>;

                })}







            </div>
        </>
    )
}
