import React from 'react'
function capitalize(given){
    return given
    .split(' ')
    .map((word) => word[0].toUpperCase() + word.substr(1))
    .join(' ');
}
export default function Blog() {
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

            <div className="grid grid-cols-2 gap-8">


                {blog.map(function (v, k) {
                    return <div key={k} className='flex justify-center rounded-xl cursor-pointer bg-card group'> <div>
                        <div className='h-50 object-cover rounded-xl overflow-hidden  relative ' onClick>
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
