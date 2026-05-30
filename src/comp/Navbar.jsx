import React from 'react'
import { Link, Router } from 'wouter'
import { useHashLocation } from 'wouter/use-hash-location'

export default function Navbar() {
    return (
        <>
            <div className='absolute top-0 right-0 flex gap-5 p-5 border border-border border-t-0 border-r-0 rounded-bl-2xl rounded-tr-2xl   '>
                <Router hook={useHashLocation}>
                    <Link className={(active) => (active ? "text-primary" : "")} href="/">About</Link>
                    <Link className={(active) => (active ? "text-primary" : "")} href="/resume">Resume</Link>
                    <Link className={(active) => (active ? "text-primary" : "")} href="/portfolio">Portfolio</Link>
                    <Link className={(active) => (active ? "text-primary" : "")} href="/blog">Blog</Link>
                    <Link className={(active) => (active ? "text-primary" : "")} href="/contact">Contact</Link>
                </Router>
            </div>
        </>
    )
}
