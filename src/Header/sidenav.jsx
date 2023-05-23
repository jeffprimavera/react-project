import React, {useState} from 'react'
import {Link} from 'react-router-dom'

const Sidenav = ({show}) => {

  return (
    <>
    <aside className={`flex w-72 box-shadow-8 ${show ? 'show' : null}`}>
      <div className='flex flex-col min-h-full relative px-5'>
        side nav
      </div>
      <div className="flex-none">
        <ul className="menu px-1">
          <li><Link to="/">Home</Link></li>
          <li><Link to="about">About</Link></li>
          <li><Link to="contact">Contact</Link></li>
          <li><Link to="projects">Projects</Link></li>
          <li><Link to="sports">Sports</Link></li>
        </ul>
      </div>
    </aside>
    </>
  )
}

export default Sidenav
