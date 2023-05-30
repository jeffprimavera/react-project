import React, {useState} from 'react'
import TargetIcon from '/images/target-icon.png'
import HeadphoneIcon from '/images/headset-icon.png'
import {Link} from 'react-router-dom'
import { miniNavlistVIP, miniNavLinks, navlistInnerData } from './navlistdata'
import CurrencyModal from './currrencyModal'

const MiniSidenav = () => {

    const [modalCurrencyOpen, setModalCurrencyOpen] = useState(false);

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

        <div className='mt-5 w-[55px] box__link py-7'>
            <ul>
                { miniNavLinks.map((item) => {
                    return (
                        <li key={item.id} className='bg-blue1 p-3 rounded-lg mb-2'>
                            <Link to={item.link} className='flex justify-center items-center'>
                                <img src={item.img} />
                            </Link>
                        </li>
                    )
                    }
                )}
            </ul>
        </div>

        <div className='py-2 mt-5 w-[55px] box__link pb-5'>
            <ul className='bg-blue1 rounded-lg py-2'>
                { navlistInnerData.map((item) => {
                    return (
                        <li key={item.id} className='block py-3'>
                            <Link to={item.link} className='flex justify-center items-center'>
                                <img className='w-[30px]' src={item.img} />
                            </Link>
                        </li>
                    )
                    }
                )}
            </ul>
        </div>

        <div className='py-2 mt-5 w-[55px] box__link'>
            <ul>
                <li className='pb-5'>
                    <Link to=''><img className='w-[30px]' src={HeadphoneIcon} alt="" /></Link>
                </li>
                <li className='pb-5'>
                    <Link to='' className='link__color1 font-semibold flex justify-center items-center'><span>EN</span></Link>
                </li>
                <li>
                    <Link to='' className='link__color1 font-semibold flex justify-center items-center' onClick={setModalCurrencyOpen}><span>USD</span></Link>
                </li>
            </ul>
        </div>
        
        <CurrencyModal modalCurrencyOpen={modalCurrencyOpen} />

    </div>
    
    
    )
  }
  
  export default MiniSidenav