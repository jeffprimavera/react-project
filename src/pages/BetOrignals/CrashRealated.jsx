import { Splide, SplideSlide, SplideTrack  } from '@splidejs/react-splide';
import {Link} from 'react-router-dom'
import { IconPlayerPlayFilled, IconChevronLeft, IconChevronRight } from '@tabler/icons-react';
import { CrashRelated } from './RelatedImgData';
import '@splidejs/react-splide/css/skyblue';
import '@splidejs/react-splide/css/sea-green';
import '@splidejs/react-splide/css/core';

const CrashRelatedGames = () => {
  return (
    <>
        <section className='related__wrapper relative py-4 '>

            <div className='game__wrapper'>
            
            <div className='pb-3'>
                <div className='text-white text-3xl'>Related Games</div>
            </div>

            <Splide
            hasTrack={ false }
            aria-label="..."
            options={{
                rewind: true,
                perPage: 7,
                gap: '0.5rem',
                pagination: false,
                autoplay: true,
            }}
            >   <SplideTrack>
                {CrashRelated.map((item, i) => (
                    <SplideSlide key={i}>
                        <div className='game__box'>
                            <figure key={item.id} className='relative rounded-xl overflow-hidden'>
                                <div className='img__thumb'>
                                    <img className='w-full' src={ item.img } alt={item.title} />
                                </div> 
                                <figcaption className='flex justify-center items-center opacity-0 invisible absolute top-0 left-0 w-full h-full cursor-pointer transition-all'>
                                    <div className='text-center text-lg '>
                                        <Link to={item.link} className='flex justify-between flex-col h-[180px]'>
                                            <p className='text-white block text-sm'>{ item.title }</p>
                                            <span className='flex justify-center items-center w-14 h-14 rounded-full'>
                                                <IconPlayerPlayFilled className='text-white' /> 
                                            </span>
                                            <p className='block text-xs text-yellow-200'>{ item.owner }</p>
                                        </Link>
                                    </div>
                                </figcaption>
                            </figure>
                        </div>
                    </SplideSlide>
                ))}
                </SplideTrack>

                <div className="splide__arrows absolute right-[-10px] top-[-47px] flex justify-end items-center gap-10">
                    <button className="splide__arrow splide__arrow--prev">
                        <i className="icon-arrow-long-left slots-top-pp-swiper-button-prev dark-1 w-[65px] h-[45px] rounded-lg z-10 flex justify-center items-center cursor-pointer">
                            <IconChevronLeft color='orange' />
                        </i>
                    </button>
                    <button className="splide__arrow splide__arrow--next">
                        <i className="icon-arrow-long-left slots-top-pp-swiper-button-prev dark-1 w-[65px] h-[45px] rounded-lg z-10 flex justify-center items-center cursor-pointer">
                            <IconChevronRight color='orange' /> 
                        </i>
                    </button>
                </div>

            </Splide>

            </div>

        </section>
    </>
  );
};

export default CrashRelatedGames;
