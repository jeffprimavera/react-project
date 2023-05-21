import {Link} from 'react-router-dom'
import { IconMenu2, IconTrophy, IconBallFootball } from '@tabler/icons-react';

const Header = () => {
  return (
    <>
    <header>
      <nav className='dark-1 px-4 py-2 fixed w-full z-50 shadow-xl'>
        <div className="navbar">

          <div className="flex-1 items-center">
            <div className='flex gap-2 items-center pr-4'>
              <IconMenu2 className='cursor-pointer' color='orange' />
              <Link className="normal-case text-xl px-2" to="/">Logo Casino</Link>
            </div>
            <div className='flex gap-2'>
              <button className="btn btn-sm gap-1"><IconBallFootball className='pointer' color='orange' /> Sports</button>
              <button className="btn btn-sm gap-1"><IconTrophy className='pointer' color='orange' /> Esports</button>
            </div>
          </div>
          <div className="flex gap-2">
          <button className="btn">Login</button>
          <button className="btn btn-outline">Sign Up</button>
            {/* <ul className="menu menu-horizontal px-1">
              <li><Link to="/">Home</Link></li>
              <li><Link to="about">About</Link></li>
              <li><Link to="contact">Contact</Link></li>
              <li><Link to="projects">Projects</Link></li>
            </ul> */}
          </div>

        </div>
      </nav>
    </header>
    </>
  )
}

export default Header
