import {Link} from 'react-router-dom'

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
      </div>
    </footer>
  )
}

export default Footer
