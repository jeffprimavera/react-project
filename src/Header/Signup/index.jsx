import { useState } from 'react';
import Modal from 'react-modal';
import { IconX } from '@tabler/icons-react';
import { IconUser, IconLock, IconEye, IconEyeOff, IconTicket } from '@tabler/icons-react';
import { Link } from 'react-router-dom';
import LoginModal from '../Login';
import LoginImg from '/images/newrakeback-blank.png';
import LoginFB from '/images/login_fb.png';
import LoginGoogle from '/images/login_google.png';

const customStyles = {
  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgb(0 0 0 / 75%)',
  },
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: '#192028',
    width: 800,
  },
};

const SignUpModal = ({ isOpen, handleModalOpen }) => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [modalLoginOpen, setModalLoginOpen] = useState(false);

  const togglePasswordVisibility = (event) => {
    event.preventDefault();
    setPasswordVisible(!passwordVisible);
  };

  const handleLoginClick = () => {
    setModalLoginOpen(true);
  };

  const [isChecked, setIsChecked] = useState(false);

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
                <span className="text-[32px] font-[700] mobile:text-[28px]">Sign Up</span>
              </div>

              <div className="flex flex-col mt-3 tabs__wrapper">
                <div className="form__wrapper mt-[10px]">
                  <form action="">
                    <div className="input__wrapper">
                      <span className="w-[20px] h-[20px] block mr-[10px]">
                        <IconUser width="16" height="16" color='orange' />
                      </span>
                      <input className="input-tag placeholder:text-[#849eb7]" type="text" placeholder="Fill in your email" />
                    </div>
                    <div className="input__wrapper mt-3">
                      <span className="w-[20px] h-[20px] block mr-[10px]">
                        <IconLock width="16" height="16" color='orange' />
                      </span>
                      <input className="input-tag placeholder:text-[#849eb7]" type={passwordVisible ? 'text' : 'password'} placeholder="Fill in the password (8-24 characters)" />
                      <button className="border-none ml-[7px]" onClick={togglePasswordVisibility}>
                        <span className="w-[22px] h-[22px] block">
                          {passwordVisible ? (
                            <IconEyeOff width="22" height="22" color='#849eb7' />
                          ) : (
                            <IconEye width="22" height="22" color='#849eb7' />
                          )}
                        </span>
                      </button>
                    </div>
                    <div className="input__wrapper mt-3">
                      <span className="w-[20px] h-[20px] block mr-[10px]">
                        <IconTicket width="16" height="16" color='orange' />
                      </span>
                      <input className="input-tag placeholder:text-[#849eb7]" type="text" placeholder="Invite code (optional)" />
                    </div>

                    <div className='flex justify-start items-center mt-[25px] text-[12px] text-[#8194B0] text-left mobile:font-[400]'>
                      <span className='block pr-1'>Signing up means you have agreed</span>
                      <Link to='' className="text-[#00b0d8]">Terms and conditions</Link>
                    </div>

                    <div className='flex justify-start items-start gap-1 mt-[15px] remember__me'>
                      <div className='form-control'>
                        <label className="cursor-pointer label">
                          <input type="checkbox"
                          checked={isChecked}
                          onChange={(e) => setIsChecked(e.target.checked)}
                          className="checkbox checkbox-warning w-[16px] h-[16px]" 
                          />
                        </label>
                      </div>
                      <div className='text-[12px] text-[#8194B0] text-left mobile:font-[400]'>I agree to receive promotional and marketing information from BET777</div>
                    </div>

                    <div className="mt-[20px] flex flex-row px-[17px] h-[46px] items-center rounded-[10px] cursor-pointer justify-center bg-primary-linear-1 box-shadow-7 bg-gradient-shifter">
                      <span className="font-[700]">Create Account</span>
                    </div>
                  </form>

                  <div className='flex justify-center gap-4 w-[256px] m-[0_auto] pt-10'>
                    <div className='flex items-center justify-center cursor-pointer'>
                      <span className='w-[46px] h-[46px]'><img src={LoginFB} alt="" /></span>
                    </div>
                    <div className='flex items-center justify-center cursor-pointer'>
                      <span className='w-[46px] h-[46px]'><img src={LoginGoogle} alt="" /></span>
                    </div>
                  </div>

                  <div className='mt-[20px] text-[12px] text-left text-[#8194B0] mobile:text-[14px] flex justify-center'>
                    <div>Already have an account?</div>
                    <span className='text-[#00b0d8] cursor-pointer ml-[5px]' onClick={handleLoginClick}>Log In</span>
                  </div>
                </div>
              </div>

            </div>

          </div>
        </div>
        <IconX 
        onClick={() => handleModalOpen(false)} 
        className='absolute right-4 top-4 w-6 h-6 rounded-full cursor-pointer p-1 border__1' 
        color='orange' 
        />
      </Modal>

      {modalLoginOpen && <LoginModal isOpen={modalLoginOpen} handleModalOpen={setModalLoginOpen} />}

    </>
  );
};

export default SignUpModal;