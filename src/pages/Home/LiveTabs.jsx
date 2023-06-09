
import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import { IconPlayerPlayFilled } from '@tabler/icons-react';
import { LineWave } from 'react-loader-spinner';
import LazyLoad from 'react-lazy-load';

const LiveCasinoTabsGame = () => {
  const [gameData, setGameData] = useState([]);
  const [limit, setLimit] = useState(21);
  const [isLoading, setIsLoading] = useState(false);
  const [totalGames, setTotalGames] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const response = await fetch('https://player.staging.smash.t1t.in/pub/get_frontend_games/all?game_type_code=live_dealer');
        const jsonData = await response.json();

        setGameData(jsonData.game_list.slice(0, limit));
        setTotalGames(jsonData.game_list.length);
        setIsLoading(false);
      } catch (error) {
        console.error(error);
        setIsLoading(false);
      }
    };

    fetchData();
  }, [limit]);

  const loadMore = () => {
    setIsLoading(true);
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
                      <div className='text-center text-lg'>
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
            <div className='flex justify-center items-center w-full py-40'>
              {isLoading ? (
                <div>
                  <p className='text-white'>Loading </p>
                  <LineWave
                    className="flex justify-center items-center"
                    height="100"
                    width="100"
                    color="#12c2e9"
                    ariaLabel="line-wave"
                    wrapperStyle={{}}
                    wrapperClass=""
                    visible={true}
                    firstLineColor=""
                    middleLineColor=""
                    lastLineColor=""
                  />
                </div>
              ) : (
                <p className='text-white'>No games available</p>
              )}
            </div>
          )}
        </div>
        {gameData.length < totalGames && (
          <>
            <div className="w-full flex justify-center items-center">
              <button onClick={loadMore} className={isLoading ? 'loading' : 'btn bg-gradient-shifter w-[200px] h-[45px] m-auto block mt-9 text-white'}>
                {isLoading ? (
                  <div className='flex justify-center items-center w-full py-5 relative'>
                    <div className="loading__animation w-[100px] text-center">
                      <p className='text-white text-left pl-2'>Loading</p>
                      <LineWave
                        className="flex justify-center items-center"
                        height="100"
                        width="100"
                        color="#12c2e9"
                        ariaLabel="line-wave"
                        wrapperStyle={{}}
                        wrapperClass=""
                        visible={true}
                        firstLineColor=""
                        middleLineColor=""
                        lastLineColor=""
                      />
                    </div>
                  </div>
                ) : (
                  'Load More'
                )}
              </button>
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default LiveCasinoTabsGame;
