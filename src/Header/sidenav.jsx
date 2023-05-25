import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import { IconChevronRight } from '@tabler/icons-react';

const Sidenav = ({show}) => {

  return (
    <>
    <aside className={`flex w-72 box-shadow-8 ${show ? 'show' : null}`}>
      <div className='flex flex-col min-h-full relative w-full'>
        <div className='h-56 p-2 rounded-lg mt-[20px] bg-blue1 text-white'>
          <div className='flex justify-between items-center'>
            <p className='text-red-600'>My VIP Perks</p>
            <Link className='link__color1' to="sports"><span className='cursor-pointer flex justify-end items-center'>More <IconChevronRight width="16" height="16" color='orange' /></span></Link>
          </div>
        </div>
      </div>
      {/* <div className="flex-none">
        <ul className="menu px-1">
          <li><Link to="/">Home</Link></li>
          <li><Link to="about">About</Link></li>
          <li><Link to="contact">Contact</Link></li>
          <li><Link to="projects">Projects</Link></li>
          <li><Link to="sports">Sports</Link></li>
        </ul>
      </div> */}
    </aside>
    </>
  )
}

export default Sidenav
