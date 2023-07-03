import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Link } from 'react-router-dom';
import { IconPlayerPlayFilled } from '@tabler/icons-react';
import { Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import { IconChevronLeft, IconChevronRight } from '@tabler/icons-react';
import SlotsTopLoading from '../SlotsLoading';
import LazyLoad from 'react-lazy-load';

const TableGames = () => {
  const [gamesData, setGamesData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          'https://player.staging.smash.t1t.in/pub/get_frontend_games/all?game_type_code=table_games'
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

  return (
    <div className='pb-6'>
      <div className='flex justify-between items-center'>
        <div className='game__title pt-7 pb-4'>
          <h3 className='text-white text-2xl'>Table Games</h3>
        </div>
        <div className='swiper__navigation__btn relative flex justify-end items-center gap-3'>
            <div className='relative flex grid-cols-2 gap-3'>
                <i className="icon-arrow-long-left table-games-swiper-button-prev dark-1 w-[65px] h-[45px] rounded-lg z-10 flex justify-center items-center cursor-pointer">
                    <IconChevronLeft color='orange' />     
                </i>
                <i className="icon-arrow-long-right table-games-swiper-button-next dark-1 w-[65px] h-[45px] rounded-lg z-10 flex justify-center items-center cursor-pointer">
                    <IconChevronRight color='orange' /> 
                </i>
            </div>
        </div>
      </div>
      <div className='game__wrapper relative w-full'>
        {gamesData ? (
          <Swiper
            spaceBetween={15}
            slidesPerView={7}
            loop={true}
            navigation={{
              nextEl: '.table-games-swiper-button-next',
              prevEl: '.table-games-swiper-button-prev',
            }}
            modules={[Navigation]}
          >
            {gamesData.map((game) => (
              <SwiperSlide key={game.game_unique_id}>
                <div className='game__box'>
                  <figure className='relative rounded-xl overflow-hidden'>
                    <div className='img__thumb'>
                        <img
                          className='w-full'
                          src={game.image_path.en}
                          alt={game.game_name_en}
                        />
                    </div>
                    <figcaption className='flex justify-center items-center opacity-0 invisible absolute top-0 left-0 w-full h-full cursor-pointer transition-all'>
                      <div className='text-center text-lg '>
                        <Link
                          to={game.game_launch_url.web}
                          className='flex justify-between flex-col h-[180px]'
                          target='_blank'
                        >
                          <p className='text-white block text-sm'>
                            {game.game_name_en}
                          </p>
                          <span className='flex justify-center items-center w-14 h-14 rounded-full'>
                            <IconPlayerPlayFilled className='text-white' />
                          </span>
                          <p className='block text-xs text-yellow-200'>
                            {game.provider_name}
                          </p>
                        </Link>
                      </div>
                    </figcaption>
                  </figure>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        ) : (
          <SlotsTopLoading />
        )}
      </div>
    </div>
  );
};

export default TableGames;
