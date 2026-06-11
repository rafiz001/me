import React from 'react'
import Navbar from './Navbar'
import Sidebar, { fiz } from './Sidebar'

import { Route, Router } from 'wouter'
import { useHashLocation } from 'wouter/use-hash-location'
import About from './route/About'
import Resume from './route/Resume'
import Portfolio from './route/Portfolio'
import Blog from './route/Blog'

export default function MainContent() {

  return (
    <>
      <div className='flex-0 xl:flex-9 b i bg-background text-text  p-6 rounded-2xl border border-border relative'>
        <Navbar />
        
        <article>
          <Router hook={useHashLocation}>
            <Route path={"/about"} component={About}/>
            <Route path={"/"} component={About}/>
            <Route path={"/resume"} component={Resume}/>
            <Route path={"/portfolio"} component={Portfolio}/>
            <Route path={"/blog"} component={Blog}/>
          </Router>
        </article>
      </div>
    </>
  )
}
