import {Link} from 'react-router-dom'
import Gccuracao from '/images/gc.svg'
import Adultguide from '/images/plus-18.png'
import Secure from '/images/3.png'
import { IconBrandTelegram, IconBrandYoutube, IconBrandTwitterFilled, IconBrandInstagram, IconBrandDiscordFilled, IconBrandFacebookFilled, IconBrandTiktoFilled  } from '@tabler/icons-react';

const Footer = () => {
  return (
    <footer className="footer p-10 text-neutral-content dark-1">
      <div className='container mx-auto px-10'>

        <div className='flex flex-row items-start justify-between w-full'>

          <div className='flex flex-col items-start text-[#8194B0] justify-start mr-[20px] flex-1 w-[121px]'>
            <div className='text-[#ECECEC] items-center mobile:justify-center pb-3 font-semibold'>
              <span>iGaming</span>
            </div>
            <ul className='footer__links'>
              <li>All Games</li>
              <li>Live</li>
              <li>Feature Buy In</li>
              <li>Bet Originals</li>
              <li>Slots</li>
            </ul>
          </div>

          <div className='flex flex-col items-start text-[#8194B0] justify-start mr-[20px] flex-1 w-[121px]'>
            <div className='text-[#ECECEC] items-center mobile:justify-center pb-3 font-semibold'>
                <span>Promotions</span>
              </div>
              <ul className='footer__links'>
                <li>VIP</li>
                <li>Referral</li>
                <li>Rakeback</li>
                <li>Affiliate</li>
              </ul>
          </div>

          <div className='flex flex-col items-start text-[#8194B0] justify-start mr-[20px] flex-1 w-[121px]'>
            <div className='text-[#ECECEC] items-center mobile:justify-center pb-3 font-semibold'>
                <span>About Us</span>
              </div>
              <ul className='footer__links'>
                <li>Blog</li>
                <li>Promotions</li>
                <li>Responsible Gaming</li>
              </ul>
          </div>

          <div className='flex flex-col items-start text-[#8194B0] justify-start mr-[20px] flex-1 w-[121px]'>
            <div className='text-[#ECECEC] items-center mobile:justify-center pb-3 font-semibold'>
                <span>Help</span>
              </div>
              <ul className='footer__links'>
                <li>Help Center</li>
                <li>Live Support</li>
                <li>Terms and Conditions</li>
                <li>Privacy Policy</li>
                <li>Sports Betting Rules</li>
                <li>Provably Fair</li>
              </ul>
          </div>

          <div className='flex flex-col items-start text-[#8194B0] justify-start mr-[20px] flex-1'>
            <div className='text-[#ECECEC] items-center mobile:justify-center pb-3 font-semibold'>
                <span>Information</span>
              </div>
              <ul className='footer__links'>
                <li>Fairness</li>
                <li>Licenses</li>
                <li>Terms and Conditions</li>
                <li>AML/KYC Policy</li>
              </ul>
          </div>

        </div>

        <div className='flex flex-row items-start justify-between w-full pt-5'>

          <div className='flex-1 flex flex-col w-[295px]'>
            <div className='flex flex-row items-center'>
              <span className='block mr-5'><img className='' src={Gccuracao} alt="" /></span>
              <span className='block mr-5'><img className='w-[40px]' src={Adultguide} alt="" /></span>
              <span><img className='' src={Secure} alt="" /></span>
            </div>
            <div className='text-[#8194B0] text-[14px] font-light mt-[17px] w-[67%]'>
              <p>This website offers online casino experience that includes risk. Users of our site must be 18+. We are not responsible for the violation of your local laws related to iGaming. Play responsibly and have fun on Bet777.win.</p>
            </div>
          </div>

          <div className='social__media__wrapper'>
            <div className='mb-[12px] mt-[19px] font-[500] text-[12px] text-[#ECECEC]'>Follow Us</div>
            <div className='flex flex-row items-center text-[#8194B0] social__icons gap-2'>
              <Link><IconBrandTelegram width="20" height="20" color='rgba(141, 177, 235, 0.5)' /></Link>
              <Link><IconBrandYoutube width="20" height="20" color='rgba(141, 177, 235, 0.5)' /></Link>
              <Link><IconBrandTwitterFilled width="20" height="20" color='rgba(141, 177, 235, 0.5)' /></Link>
              <Link><IconBrandInstagram width="20" height="20" color='rgba(141, 177, 235, 0.5)' /></Link>
              <Link><IconBrandDiscordFilled width="20" height="20" color='rgba(141, 177, 235, 0.5)' /></Link>
              <Link><IconBrandTiktoFilled width="20" height="20" color='rgba(141, 177, 235, 0.5)' /></Link>
              <Link><IconBrandFacebookFilled width="20" height="20" color='rgba(141, 177, 235, 0.5)' /></Link>
            </div>
          </div>

        </div>

        <div className='copyright__wrapper text-[#849EB7] text-[12px] font-[400] text-center w-full pt-7 mt-5'>
          Copyright (C) 2023 Bet777. All Rights Reserved.
        </div>

      </div>
    </footer>
  )
}

export default Footer
