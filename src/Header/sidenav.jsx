import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import { IconChevronRight } from '@tabler/icons-react';
import TargetIcon from '/images/target-icon.png'
import PiggyIcon from '/images/pig-icon.png'
import GiftIcon from '/images/gift-icon.png'

const Sidenav = ({show}) => {

  return (
    <>
    <aside className={`flex w-72 box-shadow-8 ${show ? 'show' : null}`}>
      <div className='flex flex-col min-h-full relative w-full'>
        <div className='h-56 p-4 rounded-lg mt-[20px] bg-blue1 text-white'>
          <div className='flex justify-between items-center'>
            <p className='text-red-600'>My VIP Perks</p>
            <Link className='link__color1' to="sports">
              <span className='cursor-pointer flex justify-end items-center'>
                More 
                <IconChevronRight width="16" height="16" color='orange' />
              </span>
            </Link>
          </div>

          <div className='flex flex-row items-center justify-between mt-1 mb-2'>

            <div className='w-[103px] h-14 rounded-lg bg-gradient-chill flex justify-center items-center'>
              <div className='flex justify-center items-center'>
                <span className='block'><img className='w-[40px] h-[40px]' src={TargetIcon} alt="" /></span>
                <p className='whitespace-pre-line w-1/3 leading-4'>Task</p>
              </div>
            </div>

            <div className='w-[103px] h-14 rounded-lg bg-gradient-neuromancer flex justify-center items-center'>
              <div className='flex justify-center items-center'>
                <span className='block'><img className='w-[40px] h-[40px]' src={PiggyIcon} alt="" /></span>
                <p className='whitespace-pre-line w-1/3 leading-4'>Rake Back</p>
              </div>
            </div>

          </div>

          <div className='flex flex-row items-center justify-between mt-1'>

            <div className='w-[103px] h-14 rounded-lg bg-gradient-hot flex justify-center items-center'>
              <div className='flex justify-center items-center'>
                <span className='block'><img className='w-[40px] h-[40px]' src={GiftIcon} alt="" /></span>
                <p className='whitespace-pre-line w-1/3 leading-4'>Free Box</p>
              </div>
            </div>

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
