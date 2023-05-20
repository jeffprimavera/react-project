import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import IMAGES from '../../images.json';

const Homepageslider = () => {
    return (
    
    // Homepage Slider
    <section className=''> 
        <Swiper
        spaceBetween={10}
        slidesPerView={4}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)} >
            
               { IMAGES && IMAGES.map((item) => {
                return (
                    <SwiperSlide key={item.id} >
                        <img src={ item.img } alt="" />
                    </SwiperSlide>
                )
               }
               )}
            
        </Swiper>
    </section>

    )
  }
  
  export default Homepageslider