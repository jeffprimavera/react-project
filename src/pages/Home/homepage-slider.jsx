import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import "swiper/css/navigation";
import "swiper/css/autoplay";
import { Navigation, Autoplay } from "swiper";
import IMAGES from '../../images.json';
import { IconChevronLeft, IconChevronRight } from '@tabler/icons-react';
import {Link} from 'react-router-dom'

const Homepageslider = () => {
    
    return (
    
    // Homepage Slider
    <section className='hp__promo__swiper relative'> 
        <i className="icon-arrow-long-left review-swiper-button-prev absolute top-0 bottom-0 right-0 -left-6 z-10 flex justify-center items-center cursor-pointer">
            <IconChevronLeft color='orange' />     
        </i>
        <Swiper
        spaceBetween={10}
        slidesPerView={4}
        loop={true}
        autoplay={{
            delay: 2500,
            disableOnInteraction: false,
        }}
        navigation={{
            nextEl: '.review-swiper-button-next',
            prevEl: '.review-swiper-button-prev',
        }}
        modules={[Navigation, Autoplay ]} >
            
               { IMAGES && IMAGES.map((item) => {
                return (
                    <SwiperSlide key={item.id} >
                        <Link to={item.link}><img src={ item.img } alt={item.alt} /></Link>
                    </SwiperSlide>
                )
               }
               )}
        </Swiper>
        <i className="icon-arrow-long-right review-swiper-button-next absolute top-0 bottom-0 -right-6 z-10 flex justify-center items-center cursor-pointer">
            <IconChevronRight color='orange' /> 
        </i>
    </section>

    )
  }
  
  export default Homepageslider