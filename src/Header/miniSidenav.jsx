import React, {useState} from 'react'
import TargetIcon from '/images/target-icon.png'
import HeadphoneIcon from '/images/headset-icon.png'
import {Link} from 'react-router-dom'
import { miniNavlistVIP, miniNavLinks, navlistInnerData } from './navlistdata'
import Modal from "react-modal";

const customStyles = {
    overlay: {
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgb(0 0 0 / 75%)'
    },
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      backgroundColor: "#192028",
      width: 680,
    },
};

const MiniSidenav = () => {

    const [modalOpen, setModalOpen] = useState(false);

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
                    <Link to='' className='link__color1 font-semibold flex justify-center items-center' onClick={setModalOpen}><span>USD</span></Link>
                </li>
            </ul>
        </div>

        <Modal
            closeTimeoutMS={200}
            isOpen={modalOpen}
            onRequestClose={() => setModalOpen(false)}
            style={customStyles} >
            <div>Login/Signup</div>

            <button onClick={() => setModalOpen(false)}>Close Modal</button>
        </Modal>

    </div>
    
    
    )
  }
  
  export default MiniSidenav