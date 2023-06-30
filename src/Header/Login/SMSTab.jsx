import { useState } from 'react';
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'

const LoginModalAccount = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = (event) => {
    event.preventDefault();
    setPasswordVisible(!passwordVisible);
  };

  const [value, setValue] = useState()

  return (
    <div className="form__wrapper mt-[10px]">
      <form action="">
        <div className="input__wrapper">
            <PhoneInput
            placeholder="Enter phone number"
            countrySelectProps={{ unicodeFlags: true }}
            value={value}
            onChange={setValue}/>
        </div>
        <div className="input__wrapper mt-3">
          <input className="input-tag placeholder:text-[#849eb7]" type='text' placeholder="Enter verification code" />
          <span className='rounded-[6px] w-[80px] h-[36px] cursor-pointer flex items-center justify-center text-[14px] font-[700] bg-gradient-blueraspberry text-white'>Send</span>
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
