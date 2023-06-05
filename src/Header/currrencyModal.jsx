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

const CurrencyModal = ({isOpen, handleModalOpen}) => {

    return (
    
        <Modal
            closeTimeoutMS={200}
            isOpen={isOpen}
            ariaHideApp={false}
            shouldCloseOnOverlayClick={true}
            onRequestClose={() => handleModalOpen(false)}
            style={customStyles} 
            >
            <div className='p-3 currency__wrapper'>
                <div className='text-white font-semibold text-2xl'>Display In Fiat</div>
                <p className='link__color1'>lease note that these are currency approximations. All bets & transactions will be settled in the crypto equivalent.For further details feel free to contact our live support</p>
                <div className='grid grid-cols-4 gap-5'>
                    <div className='btn gap-2'>R$ <strong>BRL</strong></div>
                    <div className='btn gap-2'>€ <strong>EUR</strong></div>
                    <div className='btn gap-2'>¥ <strong>JPY</strong></div>
                    <div className='btn gap-2'>₩ <strong>KRW</strong></div>
                    <div className='btn gap-2'>₱ <strong>PHP</strong></div>
                    <div className='btn gap-2'>$ <strong>USD</strong></div>
                    <div className='btn gap-2'>₫ <strong>VND</strong></div>
                </div>
            </div>
            <IconX className='absolute right-2 top-2 w-6 h-6 rounded-full cursor-pointer p-1 border__1' onClick={() => handleModalOpen(false)} color='orange' />
        </Modal>
    
    )
}
  
export default CurrencyModal