import React, { useState } from 'react';
import Modal from "react-modal";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import LoginModalAccount from './LoginTab';
import LoginModalSms from './SMSTab';
import LoginImg from '/images/newrakeback-blank.png';
import { IconX } from '@tabler/icons-react';
import LoginFB from '/images/login_fb.png';
import LoginGoogle from '/images/login_google.png';
import SignUpModal from '../Signup';

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
        width: 800,
    },
};

const LoginModal = ({ isOpen, handleModalOpen }) => {

    const [modalSignUpOpen, setModalSignUpOpen] = useState(false);

    const handleSignUpClick = () => {
        setModalSignUpOpen(true);
    };

    return (

        <>
        <Modal
            closeTimeoutMS={200}
            isOpen={isOpen}
            ariaHideApp={false}
            shouldCloseOnOverlayClick={true}
            onRequestClose={() => handleModalOpen(false)}
            style={customStyles}
        >
            <div className='logreg__wrapper text-white'>
                <div className="modal__wrapper flex flex-row gap-5">

                    <div className="modal__img__wrapper relative">
                        <div className="flex-1 flex items-center">
                            <div className="relative">
                                <img className='w-[374px] h-[581px]' src={LoginImg} alt="" />
                                <div className="absolute left-0 bottom-[30px] w-full text-center">
                                    <span className="text-center text-[20px] font-[800]">FIRST DEPOSIT BONUS</span>
                                    <span className="mt-[4px] text-center text-[28px] font-[800] leading-[140%]">270% UP TO 20,000 B9C</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="w-[50%]">
                        <div className="flex flex-row justify-between items-center">
                            <span className="text-[32px] font-[700] mobile:text-[28px]">Log in</span>
                        </div>

                        <div className="flex flex-col mt-3 tabs__wrapper">
                            <Tabs>

                                <div className='flex justify-between items-center relative'>
                                    <TabList>
                                        <Tab>Account</Tab>
                                        <Tab>SMS</Tab>
                                    </TabList>
                                </div>

                                <TabPanel>
                                    <LoginModalAccount />
                                </TabPanel>

                                <TabPanel>
                                    <LoginModalSms />
                                </TabPanel>

                            </Tabs>

                            <div className='flex justify-center gap-4 mt-[10px] w-[256px] m-[0_auto] pt-12'>
                                <div className='flex items-center justify-center cursor-pointer'>
                                <span className='w-[46px] h-[46px]'><img src={LoginFB} alt="" /></span>
                                </div>
                                <div className='flex items-center justify-center cursor-pointer'>
                                <span className='w-[46px] h-[46px]'><img src={LoginGoogle} alt="" /></span>
                                </div>
                            </div>

                            <div className='mt-[20px] text-[12px] text-left text-[#8194B0] mobile:text-[14px] flex justify-center'>
                                <div>Don't have an account?</div>
                                <span className='text-[#00b0d8] cursor-pointer ml-[5px]' onClick={handleSignUpClick}>Sign Up</span>
                            </div>

                        </div>

                    </div>

                </div>
            </div>
            <IconX 
            className='absolute right-4 top-4 w-6 h-6 rounded-full cursor-pointer p-1 border__1' 
            onClick={() => handleModalOpen(false)} 
            color='orange' 
            />
        </Modal>
        
        {modalSignUpOpen && <SignUpModal isOpen={modalSignUpOpen} handleModalOpen={setModalSignUpOpen} />}
        </>
    );
};

export default LoginModal;
