import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { IconMenu2, IconTrophy, IconBallFootball, IconX } from '@tabler/icons-react';
import Logo from '/images/logo.png';
import LoginModal from './Login';
import SignUpModal from './Signup';

const Header = ({ onClick }) => {
  const [modalLoginOpen, setModalLoginOpen] = useState(false);
  const [modalSignUpOpen, setModalSignUpOpen] = useState(false);
  const [isIconX, setIsIconX] = useState(false);

  const handleClick = () => {
    setIsIconX(!isIconX);
  };

  const handleLoginClick = () => {
    setModalLoginOpen(true);
  };

  const handleSignUpClick = () => {
    setModalSignUpOpen(true);
  };

  return (
    <>
      <header>
        <nav className='dark-1 px-4 py-2 fixed w-full z-50 shadow-xl'>
          <div className='navbar'>
            <div className='flex-1 items-center'>
              <div className='flex gap-2 items-center pr-4'>
                <div onClick={onClick}>
                  <button onClick={handleClick}>
                    {isIconX ? (
                      <IconX className='cursor-pointer swap-off fill-current' color='orange' />
                    ) : (
                      <IconMenu2 className='cursor-pointer swap-off fill-current' color='orange' />
                    )}
                  </button>
                </div>
                <Link className='normal-case text-xl px-2 h-12 w-36' to='/'>
                  <img src={Logo} alt='Logo' />
                </Link>
              </div>
              <div className='flex gap-2'>
                <Link to='sports'>
                  <button className='btn gap-1 border__line__btn hover:border-white'>
                    <IconBallFootball className='pointer' color='orange' /> Sports
                  </button>
                </Link>
                <button className='btn gap-1 gradientBorder'>
                  <IconTrophy className='pointer' color='orange' /> Esports
                </button>
              </div>
            </div>
            <div className='flex gap-2'>
              <button className='btn bg-gradient-shifter text-white' onClick={handleLoginClick}>
                Login
              </button>
              <button className='btn bg-gradient-blueraspberry text-white' onClick={handleSignUpClick}>
                Sign Up
              </button>
            </div>
          </div>
        </nav>
      </header>

      {modalLoginOpen && <LoginModal isOpen={modalLoginOpen} handleModalOpen={setModalLoginOpen} />}
      {modalSignUpOpen && <SignUpModal isOpen={modalSignUpOpen} handleModalOpen={setModalSignUpOpen} />}
    </>
  );
};

export default Header;
