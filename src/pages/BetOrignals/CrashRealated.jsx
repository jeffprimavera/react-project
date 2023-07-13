import { Splide, SplideTrack, SplideSlide } from '@splidejs/react-splide';
import {Link} from 'react-router-dom'
import { IconPlayerPlayFilled } from '@tabler/icons-react';
import { CrashRelated } from './RelatedImgData';
import '@splidejs/react-splide/css/skyblue';
import '@splidejs/react-splide/css/sea-green';
import '@splidejs/react-splide/css/core';

const CrashRelatedGames = () => {
  return (
    <>
        <section className='related__wrapper relative py-4 '>

            <div className='game__wrapper'>
            
            <div className='pb-2'>
                <div className='text-white text-3xl'>Related Games</div>
            </div>

            <Splide
            options={{
            perPage: 7,
            gap: '0.5rem',
            pagination: false,
            }}
            >
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
                                            <p className='text-white block text-sm'>{ item.gamename }</p>
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
                <div className="splide__arrows">
                    <button className="splide__arrow splide__arrow--prev">Prev</button>
                    <button className="splide__arrow splide__arrow--next">Next</button>
                </div>
            </Splide>

            </div>

        </section>
    </>
  );
};

export default CrashRelatedGames;
