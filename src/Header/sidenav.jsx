import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import { IconChevronRight, IconWorld } from '@tabler/icons-react';
import TargetIcon from '/images/target-icon.png'
import PiggyIcon from '/images/pig-icon.png'
import GiftIcon from '/images/gift-icon.png'
import WheelIcon from '/images/wheel-icon.png'
import PromoIcon from '/images/promo-icon.png'
import CoinIcon from '/images/coin-icon.png'
import DiceIcon from '/images/dice-icon.png'
import BasketballIcon from '/images/basketball-icon.png'
import TrophyIcon from '/images/esports-trophy-icon.png'
import HeadphoneIcon from '/images/headset-icon.png'
import MiniSidenav from './miniSidenav';
import CurrencyModal from './currrencyModal'
import {navlistData, navlistInnerData } from './navlistdata'

function Sidenav({ show }) {

  const [modalCurrencyOpen, setModalCurrencyOpen] = useState(false);

  return (
    <>

      <aside className={`flex w-72 box-shadow-8 overflow-x-hidden overflow-y-auto ${show ? 'show' : null}`}>

        <div className='desktop__sidenav flex flex-col min-h-full relative w-full'>

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
                    <span className='block'><img className='w-[40px]' src={TargetIcon} alt="" /></span>
                    <p className='whitespace-pre-line w-1/3 leading-4 text-xs'>Task</p>
                  </div>
                </div>

                <div className='w-[103px] h-14 rounded-lg bg-gradient-neuromancer flex justify-center items-center'>
                  <div className='flex justify-evenly items-center'>
                    <span className='block'><img className='w-[40px]' src={PiggyIcon} alt="" /></span>
                    <p className='whitespace-pre-line w-1/3 leading-4 text-xs'>Rake Back</p>
                  </div>
                </div>

              </div>

              <div className='flex flex-row items-center justify-between mt-1 mb-2'>

                <div className='w-[103px] h-14 rounded-lg bg-gradient-behongo flex justify-center items-center'>
                  <div className='flex justify-evenly items-center'>
                    <span className='block'><img className='w-[40px]' src={GiftIcon} alt="" /></span>
                    <p className='whitespace-pre-line w-1/3 leading-4 text-xs'>Free Box</p>
                  </div>
                </div>

                <div className='w-[103px] h-14 rounded-lg bg-gradient-warm flex justify-center items-center'>
                  <div className='flex justify-evenly items-center'>
                    <span className='block'><img className='w-[40px]' src={WheelIcon} alt="" /></span>
                    <p className='whitespace-pre-line w-1/3 leading-4 text-xs'>Lucky Wheel</p>
                  </div>
                </div>

              </div>

              <div className='flex flex-row items-center justify-between mt-1'>

                <div className='w-[103px] h-14 rounded-lg bg-gradient-lemontwist flex justify-center items-center'>
                  <div className='flex justify-evenly items-center'>
                    <span className='block'><img className='w-[40px]' src={PromoIcon} alt="" /></span>
                    <p className='whitespace-pre-line w-1/3 leading-4 text-xs'>Bonus Code</p>
                  </div>
                </div>

                <div className='w-[103px] h-14 rounded-lg bg-gradient-loveliberty flex justify-center items-center'>
                  <div className='flex justify-evenly items-center'>
                    <span className='block'><img className='w-[40px]' src={CoinIcon} alt="" /></span>
                    <p className='whitespace-pre-line w-1/3 leading-4 text-xs'>Bonus</p>
                  </div>
                </div>

              </div>

            </div>

            <div className="collapse ovf-inherit">
              <input type="checkbox" className="peer" />
              <div className="collapse-title w-full min-40 bg-blue1 link__color1 h-10 pl-4 pr-4 flex justify-between items-center rounded-lg mt-5">
                <div className='flex justify-between items-center'>
                  <img className='w-[24px] mr-2' src={DiceIcon} alt="" />
                  Casino
                </div>  
                <IconChevronRight width="16" height="16" color='#909999' />
              </div>
              <div className="collapse-content p-0 pb-0 dark-2 rounded-b-xl text-white">
                <ul className='mt-1'>
                  { navlistData.map((item) => {
                      return (
                        <li className='px-4 py-3 hover:bg-gray-800 transition-all delay-100' key={item.id}>
                          <Link className='sideNavList' to={item.link}>
                              <img className='w-[18px] mr-3' src={ item.img } alt={item.title} />
                              <span>{item.title}</span>
                          </Link>
                        </li>
                      )
                    }
                  )}
                </ul>
              </div>
            </div>
                    
            <div className='w-full min-40 bg-blue1 link__color1 h-10 pl-4 pr-4 flex justify-between items-center rounded-lg mt-2'>
              <Link to="sports">
                <div className='flex justify-between items-center'>
                  <img className='w-[24px] mr-2' src={BasketballIcon} alt="" />
                  Sports
                </div>
              </Link>
            </div>

            <div className='w-full min-40 bg-blue1 link__color1 h-10 pl-4 pr-4 flex justify-between items-center rounded-lg mt-2'>
              <Link to="sports">
                <div className='flex justify-between items-center'>
                  <img className='w-[24px] mr-2' src={TrophyIcon} alt="" />
                  Esports
                </div>
              </Link>
            </div>

            <div className='w-full bg-blue1 link__color1 rounded-lg mt-5'>
              <ul className=''>
                { navlistInnerData.map((item) => {
                    return (
                      <li key={item.id} className='py-3 hover:bg-gray-800 transition-all delay-100 px-4'>
                        <Link className='sideNavList' to={item.link}>
                          <div className='flex justify-between items-center'>
                            <img className='w-[24px] mr-2' src={item.img} alt={item.title}/>
                            {item.title}
                          </div>
                        </Link>
                      </li> 
                    )
                  }
                )}
              </ul>
            </div>

            <div className='w-full min-40 bg-blue1 link__color1 h-10 pl-4 pr-4 flex justify-between items-center rounded-lg my-5'>
              <Link to="sports">
                <div className='flex justify-between items-center'>
                  <img className='w-[24px] mr-2' src={HeadphoneIcon} alt="" />
                  Live Support
                </div>
              </Link>
            </div>

            <div className='flex justify-between items-center gap-2 w-full'>
              <div className='w-1/2'>
                <div className="dropdown dropdown-top bg-blue1 rounded-lg w-full">
                  <label tabIndex={0} className="h-11 flex justify-between items-center text-xs font-medium px-3 cursor-pointer">
                    <div className='flex justify-start items-center gap-2 link__color1'>
                      <IconWorld width="16" height="16" color='#909999' />
                      English
                    </div>
                    <IconChevronRight width="16" height="16" color='#909999' />
                  </label>
                  <ul tabIndex={0} className="dropdown-content menu p-2 shadow rounded-box w-52 bg-gray-800">
                    <li><Link className='text-white'>Portuguese</Link></li>
                    <li><Link className='text-white'>中文繁體</Link></li>
                  </ul>
                </div>
              </div>
              <div className='w-1/2 bg-blue1 h-11 flex justify-center items-center rounded-lg link__color1 cursor-pointer' onClick={setModalCurrencyOpen}>
                $ USD
              </div>
            </div>

        </div>

        <MiniSidenav />
        <CurrencyModal />

      </aside>

    </>
  );
} 

export default Sidenav