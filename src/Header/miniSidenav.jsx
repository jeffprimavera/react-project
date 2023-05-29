import TargetIcon from '/images/target-icon.png'
import HeadphoneIcon from '/images/headset-icon.png'
import {Link} from 'react-router-dom'
import { miniNavlistVIP, miniNavLinks, navlistInnerData } from './navlistdata'
const MiniSidenav = () => {
    return (
    
    <div className='desktop__mini__sidenav'>

        <div className='vip__perls'>
            <div className="dropdown dropdown-hover mt-8 flex justify-center items-center">
                <label tabIndex={0} className='w-[40px] block relative z-50 cursor-pointer'><img src={TargetIcon} alt="" /></label>
                <ul tabIndex={0} className="dropdown-content flex justify-start items-center p-2 shadow w-[330px] z-20 rounded-lg pl-14 bg-gray-800">
                    { miniNavlistVIP.map((item) => {
                        return (
                            <li key={item.id} className='mr-4'>
                                <Link to={item.link} className='flex justify-center items-center'>
                                    <img className='block' src={item.img} />
                                </Link>
                            </li>
                        )
                        }
                    )}
                </ul>
            </div>
        </div>

        <div className='py-2 mt-5 w-[55px]'>
            <ul>
                { miniNavLinks.map((item) => {
                    return (
                        <li key={item.id} className='bg-blue1 p-3 rounded-lg mb-2 tooltip tooltip-right' data-tip={item.ttip}>
                            <Link to={item.link} className='flex justify-center items-center'>
                                <img src={item.img} />
                            </Link>
                        </li>
                    )
                    }
                )}
            </ul>
        </div>

        <div className='py-2 mt-5 w-[55px]'>
            <ul className='bg-blue1 rounded-lg py-2'>
                { navlistInnerData.map((item) => {
                    return (
                        <li key={item.id} className='tooltip tooltip-right block py-3' data-tip={item.title}>
                            <Link to={item.link} className='flex justify-center items-center'>
                                <img className='w-[30px]' src={item.img} />
                            </Link>
                        </li>
                    )
                    }
                )}
            </ul>
        </div>

        <div>
            <ul>
                <li>
                    <a href="#!"><img src={HeadphoneIcon} alt="" /></a>
                </li>
            </ul>
        </div>

    </div>
    
    )
  }
  
  export default MiniSidenav