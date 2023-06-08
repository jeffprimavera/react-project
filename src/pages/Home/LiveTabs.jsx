import React from 'react';
import { useEffect, useState } from "react";
import {Link} from 'react-router-dom';
import { IconPlayerPlayFilled } from '@tabler/icons-react';

const LiveCasinoTabsGame = () => {
  const [gameData, setGameData] = useState([]);
  const [limit, setLimit] = useState(21);
  const [isLoading, setIsLoading] = useState(false);
  const [totalGames, setTotalGames] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://player.staging.smash.t1t.in/pub/get_frontend_games/5632/live_dealer');
        const jsonData = await response.json();

        setGameData(jsonData.game_list.slice(0, limit));
        setTotalGames(jsonData.game_list.length);
        setIsLoading(false);
      } catch (error) {
        console.error(error);
      }
    };


    fetchData();
  }, [limit]);

  const loadMore = () => {
    setLimit(prevLimit => prevLimit + 21);
  };

  return (
   
    <section className='pb-6'>
      <div>
        <div className='game__title pt-7 pb-4'>
            <h3 className='text-white text-2xl'>Live Casino</h3>
        </div>
        <div className='game__wrapper relative overflow-hidden w-full'>  
          {gameData.length > 0 ? (
              <div className='grid grid-cols-7 m-0 p-0 gap-4'>
                {gameData.map(game => (
                  <div className='game__box' key={game.game_unique_id}>
                    <figure className='relative rounded-xl overflow-hidden'>
                        <div className='img__thumb'>
                          <img className='w-full' src={game.image_path.en} alt={game.game_name_en} />
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
                ))}
              </div>
          ) : (
            <p>Loading...</p>
          )}
        </div>
        {gameData.length < totalGames && (
            <button onClick={loadMore} className={isLoading ? 'loading' : 'btn bg-gradient-shifter w-[182px] h-[45px] m-auto block mt-9'}>
              {isLoading ? 'Loading...' : 'Load More'}
            </button>
        )}
      </div>
    </section>

  );
};

export default LiveCasinoTabsGame;
