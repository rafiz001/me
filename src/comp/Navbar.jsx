import React from 'react'

export default function Navbar() {
    return (
        <>
            <div className='absolute top-0 right-0 flex gap-5 p-5 border border-border border-t-0 border-r-0 rounded-bl-2xl rounded-tr-2xl   '>
                <a href="#">About</a>
                <a href="#">Resume</a>
                <a href="#">Portfolio</a>
                <a href="#">Blog</a>
                <a href="#">Contact</a>
            </div>
        </>
    )
}
