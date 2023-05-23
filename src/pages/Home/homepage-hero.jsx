import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

const Homepagehero = () => {
    return (
    
    // Homepage Hero
    <section className='pb-2'>
        <div className='top__banner w-full px-5 pb-10'>
            <div className='title__wrapper text-white text-5xl font-semibold pt-10 pl-8'>
                <span className='block'>SIGN UP & <span>GET</span> BONUS</span>
                <span className='block'>UP TO <span>$20,000</span> </span>
            </div>
            <div className='pl-8 pt-5'>
            <button className="btn btn-secondary">Sign up now</button>
            </div>
        </div>
    </section>
    
    )
  }
  
  export default Homepagehero