import Modal from "react-modal";
import React, {useState} from 'react'
import { IconX } from '@tabler/icons-react';

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

const LoginModal = ({isOpen, handleModalOpen}) => {

    return (
    
        <Modal
            closeTimeoutMS={200}
            isOpen={isOpen}
            ariaHideApp={false}
            shouldCloseOnOverlayClick={true}
            onRequestClose={() => handleModalOpen(false)}
            style={customStyles} 
            >
            <div className='p-3 text-white'>
                I am Modal for login
            </div>
            {/* <IconX className='absolute right-2 top-2 w-6 h-6 rounded-full cursor-pointer p-1 border__1' onClick={() => handleModalOpen(false)} color='orange' /> */}
        </Modal>
    
    )
}
  
export default LoginModal