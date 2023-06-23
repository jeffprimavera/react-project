import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useEffect, useState } from "react";
import {Link} from 'react-router-dom';
import { IconPlayerPlayFilled } from '@tabler/icons-react';
import { Navigation } from "swiper";
import 'swiper/css';
import "swiper/css/navigation";
import 'react-tabs/style/react-tabs.css';
import { IconChevronLeft, IconChevronRight } from '@tabler/icons-react';
import SlotsTopLoading from '../SlotsLoading';
import LazyLoad from 'react-lazy-load';

const PragmaticPlayTops = () => {

    const [gamesData, setGamesData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await fetch(
              'https://player.staging.smash.t1t.in/pub/get_frontend_games/5632/live_dealer'
            );
                
            if (response.ok) {
              const data = await response.json();
              setGamesData(data.game_list);
            } else {
              console.log('Error:', response.status);
            }
          } catch (error) {
            console.log('Error:', error);
          }
        };
    
        fetchData();
      }, []);

    const allowedTopGameOrders = ["1", "2", "3", "4", "5", "6","7","8","9","10","11","12","13","14","15","16","17","18","19","20"];
    const filteredGames = gamesData?.filter(game => allowedTopGameOrders.includes(game.top_game_order));

    return (
        

            <div className='pb-6'>

                <div className='flex justify-between items-center mb-4 border-b border-solid border-gray-800'>
                    <div className='game__title pt-7 pb-4'>
                        <h3 className='text-white text-2xl'>Live Casino</h3>
                    </div>

                    <div className='swiper__navigation__btn relative flex justify-end items-center gap-3'>
                        <div className='view__all'>
                            <Link className='flex justify-center items-center w-[95px] h-[45px] dark-1 rounded-lg text-white'>View All</Link>
                        </div>
                        <div className='relative flex grid-cols-2 gap-3'>
                            <i className="icon-arrow-long-left livecasino-top-pp-swiper-button-prev dark-1 w-[65px] h-[45px] rounded-lg z-10 flex justify-center items-center cursor-pointer">
                                <IconChevronLeft color='orange' />     
                            </i>
                            <i className="icon-arrow-long-right livecasino-top-pp-swiper-button-next dark-1 w-[65px] h-[45px] rounded-lg z-10 flex justify-center items-center cursor-pointer">
                                <IconChevronRight color='orange' /> 
                            </i>
                        </div>
                    </div>
                </div>

                <div className='game__wrapper relative w-full'>
                    
                    <Swiper
                    spaceBetween={15}
                    slidesPerView={7}
                    loop={true}
                    navigation={{
                        nextEl: '.livecasino-top-pp-swiper-button-next',
                        prevEl: '.livecasino-top-pp-swiper-button-prev',
                    }}
                    modules={[Navigation]}
                    >
                        {filteredGames ? (
                                <>
                                    {filteredGames.map((game) => (
                                        <SwiperSlide key={game.game_unique_id}>
                                            <div className='game__box'>
                                                <figure className='relative rounded-xl overflow-hidden'>
                                                    <div className='img__thumb'>
                                                        <LazyLoad>
                                                            <img className='w-full' src={game.image_path.en} alt={game.game_name_en} />
                                                        </LazyLoad>
                                                    </div> 
                                                    <figcaption className='flex justify-center items-center opacity-0 invisible absolute top-0 left-0 w-full h-full cursor-pointer transition-all'>
                                                        <div className='text-center text-lg '>
                                                            <Link to={game.game_launch_url.web} className='flex justify-between flex-col h-[180px]' target='_blank'>
                                                                <p className='text-white block text-sm'>{game.game_name_en}</p>
                                                                <span className='flex justify-center items-center w-14 h-14 rounded-full'>
                                                                    <IconPlayerPlayFilled className='text-white' /> 
                                                                </span>
                                                                <p className='block text-xs text-yellow-200'>{game.provider_name}</p>
                                                            </Link>
                                                        </div>
                                                    </figcaption>
                                                </figure>
                                            </div>
                                        </SwiperSlide>
                                    ))}
                                </>
                        ) : (
                            <>
                                <SlotsTopLoading/>
                            </>
                        )}
                        
                    </Swiper>

                </div>

            </div>
    
    )
  }
  
  export default PragmaticPlayTops;