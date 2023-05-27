import React, {useState} from 'react';
import {Link} from 'react-router-dom'
import { IconMenu2, IconTrophy, IconBallFootball, IconX } from '@tabler/icons-react';
import Logo from  '/images/logo.png'

const Header = ({onClick}) => {

  return (
    <>
    <header>
      <nav className='dark-1 px-4 py-2 fixed w-full z-50 shadow-xl'>
        <div className="navbar">

          <div className="flex-1 items-center">
            <div className='flex gap-2 items-center pr-4'>
              <button onClick={onClick}>
                <IconMenu2 className='cursor-pointer swap-off fill-current' color='orange' />
              </button>
              <Link className="normal-case text-xl px-2 h-12 w-36" to="/"><img src={Logo}/></Link>
            </div>
            <div className='flex gap-2'>
              <Link to="sports">
                <button component={Link} to="sports" className="btn gap-1 border__line__btn hover:border-white">
                  <IconBallFootball className='pointer' color='orange' /> Sports
                </button>
              </Link>
              <button className="btn gap-1"><IconTrophy className='pointer' color='orange' /> Esports</button>
            </div>
          </div>
          <div className="flex gap-2">
          <button className="btn bg__pink text-white">Login</button>
          <button className="btn bg__lightblue text-white">Sign Up</button>
          </div>

        </div>
      </nav>
    </header>
    </>
  )
}

export default Header
