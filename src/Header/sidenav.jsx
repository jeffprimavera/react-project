import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import { IconChevronRight } from '@tabler/icons-react';
import TargetIcon from '/images/target-icon.png'
import PiggyIcon from '/images/pig-icon.png'
import GiftIcon from '/images/gift-icon.png'
import WheelIcon from '/images/wheel-icon.png'
import PromoIcon from '/images/promo-icon.png'
import CoinIcon from '/images/coin-icon.png'
import DiceIcon from '/images/dice-icon.png'
import {navlistData} from './navlistdata'


const Sidenav = ({show}) => {


  return (
    <>
    <aside className={`flex w-72 box-shadow-8 ${show ? 'show' : null}`}>
      <div className='flex flex-col min-h-full relative w-full'>

        <div className='h-60 p-4 rounded-lg mt-[20px] bg-blue1 text-white'>
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
              <div className='flex justify-evenly items-center'>
                <span className='block'><img className='w-[40px] h-[40px]' src={TargetIcon} alt="" /></span>
                <p className='whitespace-pre-line w-1/3 leading-4 text-xs'>Task</p>
              </div>
            </div>

            <div className='w-[103px] h-14 rounded-lg bg-gradient-neuromancer flex justify-center items-center'>
              <div className='flex justify-evenly items-center'>
                <span className='block'><img className='w-[40px] h-[40px]' src={PiggyIcon} alt="" /></span>
                <p className='whitespace-pre-line w-1/3 leading-4 text-xs'>Rake Back</p>
              </div>
            </div>

          </div>

          <div className='flex flex-row items-center justify-between mt-1 mb-2'>

            <div className='w-[103px] h-14 rounded-lg bg-gradient-behongo flex justify-center items-center'>
              <div className='flex justify-evenly items-center'>
                <span className='block'><img className='w-[40px] h-[40px]' src={GiftIcon} alt="" /></span>
                <p className='whitespace-pre-line w-1/3 leading-4 text-xs'>Free Box</p>
              </div>
            </div>

            <div className='w-[103px] h-14 rounded-lg bg-gradient-warm flex justify-center items-center'>
              <div className='flex justify-evenly items-center'>
                <span className='block'><img className='w-[40px] h-[40px]' src={WheelIcon} alt="" /></span>
                <p className='whitespace-pre-line w-1/3 leading-4 text-xs'>Lucky Wheel</p>
              </div>
            </div>

          </div>

          <div className='flex flex-row items-center justify-between mt-1'>

            <div className='w-[103px] h-14 rounded-lg bg-gradient-lemontwist flex justify-center items-center'>
              <div className='flex justify-evenly items-center'>
                <span className='block'><img className='w-[40px] h-[40px]' src={PromoIcon} alt="" /></span>
                <p className='whitespace-pre-line w-1/3 leading-4 text-xs'>Bonus Code</p>
              </div>
            </div>

            <div className='w-[103px] h-14 rounded-lg bg-gradient-loveliberty flex justify-center items-center'>
              <div className='flex justify-evenly items-center'>
                <span className='block'><img className='w-[40px] h-[40px]' src={CoinIcon} alt="" /></span>
                <p className='whitespace-pre-line w-1/3 leading-4 text-xs'>Bonus</p>
              </div>
            </div>

          </div>

        </div>

        <div className="collapse">
          <input type="checkbox" className="peer" />
          <div className="collapse-title w-full min-40 bg-blue1 link__color1 h-10 pl-4 pr-4 flex justify-between items-center rounded-lg mt-5">
            <div className='flex justify-between items-center'>
              <img className='w-[24px] h-[20px] mr-2' src={DiceIcon} alt="" />
              Casino
            </div>  
            <IconChevronRight width="16" height="16" color='#909999' />
          </div>
          <div className="collapse-content p-0 pb-0 dark-2 text-white">
            { navlistData.map((item) => {
                return (
                    <ul className='mt-4' key={item.id}>
                        <li className='px-4 py-3'>
                          <Link className='sideNavList' to={item.link}>
                              <img className='w-[18px] mr-3' src={ item.img } alt={item.title} />
                              <span>{item.title}</span>
                          </Link>
                        </li>
                    </ul>
                )
               }
            )}
          </div>
        </div>

        <div>text at the bottom</div>

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