import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useEffect, useState } from "react";
import {Link} from 'react-router-dom';
import { IconPlayerPlayFilled } from '@tabler/icons-react';
import { Navigation } from "swiper";
import 'swiper/css';
import "swiper/css/navigation";

const SlotsTabsGame = () => {

    const [gamesData, setGamesData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await fetch(
              'http://player.staging.smash.t1t.in/pub/get_frontend_games/5632'
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
    
        <section className='pb-6'>
            <div>

                <div className='game__title pt-7 pb-4'>
                    <h3 className='text-white text-2xl'>Slots</h3>
                </div>

                <div className='game__wrapper relative w-full'>

                <Swiper
                spaceBetween={10}
                slidesPerView={6}
                loop={true}
                navigation={{
                    nextEl: '.review-swiper-button-next',
                    prevEl: '.review-swiper-button-prev',
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
                                                    <img className='w-full' src={game.image_path.en} alt={game.game_name_en} />
                                                </div> 
                                                <figcaption className='flex justify-center items-center opacity-0 invisible absolute top-0 left-0 w-full h-full cursor-pointer transition-all'>
                                                    <div className='text-center text-lg '>
                                                        <Link to={game.game_launch_url.web} className='flex justify-between flex-col h-[225px]'>
                                                            <p className='text-white block'>{game.game_name_en}</p>
                                                            <span className='flex justify-center items-center w-20 h-20 rounded-full'>
                                                                <IconPlayerPlayFilled className='text-white' /> 
                                                            </span>
                                                            <p className='text-white block text-xs link__color1'>{game.provider_name}</p>
                                                        </Link>
                                                    </div>
                                                </figcaption>
                                            </figure>
                                        </div>
                                    </SwiperSlide>
                                ))}
                            </>
                    ) : (
                        <p>Loading...</p>
                    )}
                    
                </Swiper>

                        {/* <div className='game__box' key={i}>
                                <figure key={game.game_unique_id} className='relative rounded-xl overflow-hidden'>
                                    <div className='img__thumb'>
                                        <img className='w-full' src={game.image_path.en} alt={item.title} />
                                    </div> 
                                    <figcaption className='flex justify-center items-center opacity-0 invisible absolute top-0 left-0 w-full h-full cursor-pointer transition-all'>
                                        <div className='text-center text-lg '>
                                            <Link to={item.link} className='flex justify-between flex-col h-[225px]'>
                                                <p className='text-white block'>{ item.gamename }</p>
                                                <span className='flex justify-center items-center w-20 h-20 rounded-full'>
                                                    <IconPlayerPlayFilled className='text-white' /> 
                                                </span>
                                                <p className='text-white block text-xs link__color1'>{ item.owner }</p>
                                            </Link>
                                        </div>
                                    </figcaption>
                                </figure>
                            </div> */}
                    

                </div>

            </div>
        </section>
    
    )
  }
  
  export default SlotsTabsGame;