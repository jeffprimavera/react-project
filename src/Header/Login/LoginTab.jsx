import { useState } from 'react';
import { IconUser, IconLock, IconEye, IconEyeOff } from '@tabler/icons-react';

const LoginModalAccount = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = (event) => {
    event.preventDefault();
    setPasswordVisible(!passwordVisible);
  };

  return (
    <div className="form__wrapper mt-[10px]">
      <form action="">
        <div className="input__wrapper">
          <span className="w-[20px] h-[20px] block mr-[10px]">
            <IconUser width="18" height="18" color='orange' />
          </span>
          <input className="input-tag placeholder:text-[#849eb7]" type="text" placeholder="Fill in email or username" />
        </div>
        <div className="input__wrapper mt-3">
          <span className="w-[20px] h-[20px] block mr-[10px]">
            <IconLock width="18" height="18" color='orange' />
          </span>
          <input className="input-tag placeholder:text-[#849eb7]" type={passwordVisible ? 'text' : 'password'} placeholder="Fill in the password (8-24 characters)" />
          <button className="border-none ml-[7px]" onClick={togglePasswordVisibility}>
            <span className="w-[22px] h-[22px] block">
              {passwordVisible ? (
                <IconEyeOff width="18" height="18" color='orange' />
              ) : (
                <IconEye width="18" height="18" color='orange' />
              )}
            </span>
          </button>
        </div>
        <div className="my-5 text-[14px] text-right">
          <span className="text-[14px] font-[400] text-[#4DADF3] cursor-pointer">Forgot Password?</span>
        </div>
        <div className="mt-[20px] flex flex-row px-[17px] h-[46px] items-center rounded-[10px] cursor-pointer justify-center bg-primary-linear-1 box-shadow-7 bg-gradient-shifter">
          <span className="font-[700]">Log in</span>
        </div>
      </form>
    </div>
  );
};

export default LoginModalAccount;
