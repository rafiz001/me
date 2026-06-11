import React from 'react'

export default function Contact() {
    return (
        <>
            <header className='mt-3'>
                <h1 className='text-4xl'>Contact</h1>
                <div className='bg-primary w-20 h-1 my-4 rounded-3xl'></div>
            </header>
            <div className='rounded-xl'>
                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d506.53590871676215!2d88.61405401067269!3d24.38609859462845!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbd!4v1781180912874!5m2!1sen!2sbd" className='rounded-2xl  invert hue-rotate-180' width="100%" height="450" style={{border:0}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                {/* <iframe width="100%" height="350" src="https://www.openstreetmap.org/export/embed.html?bbox=88.61312896013261%2C24.385177881111414%2C88.61571460962297%2C24.386883035087866&amp;layer=mapnik&amp;marker=24.38603046097523%2C88.61442178487778" className='rounded-2xl  invert hue-rotate-180' style={{ "border": "1px solid black" }}></iframe> */}
            </div>
        </>
    )
}
