import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { IconPlayerPlayFilled } from '@tabler/icons-react';
import { LineWave } from 'react-loader-spinner';
import Homepagehero2 from '../Home/homepage-hero2';
import SearchSlots from '../../components/searchSlots';
import LazyLoad from 'react-lazy-load';

const SlotsAllGames = () => {
  const [selectedProvider, setSelectedProvider] = useState('5632/slots');
  const [selectedData, setSelectedData] = useState([]);
  const [sortOrder, setSortOrder] = useState('asc');
  const [visibleData, setVisibleData] = useState([]);
  const [loadCount, setLoadCount] = useState(28);
  const [isLoading, setIsLoading] = useState(false);
  const [isLoadingMore, setIsLoadingMore] = useState(false);
  const [isDataLoaded, setIsDataLoaded] = useState(false);
  const [isChangingProvider, setIsChangingProvider] = useState(false);

  useEffect(() => {
    
    const fetchData = async () => {
      try {
        setIsLoading(true);
        if (selectedProvider === 'all-games') {
          setSelectedData([]);
        } else {
          const response = await axios.get(
            `http://player.staging.smash.t1t.in/pub/get_frontend_games/${selectedProvider}?game_type_code=slots`
          );
          const data = response?.data?.game_list || [];
          setSelectedData(data);
        }
        setIsDataLoaded(true);
        setIsLoading(false);
      } catch (error) {
        console.log('Error fetching data:', error);
        setIsDataLoaded(false);
        setIsLoading(false);
      }
    };

    if (isChangingProvider) {
      setIsChangingProvider(false);
      return;
    }

    fetchData();
  }, [selectedProvider, isChangingProvider]);

  useEffect(() => {
    sortData();
  }, [sortOrder, selectedData]);

  useEffect(() => {
    setVisibleData(selectedData.slice(0, loadCount));
  }, [loadCount, selectedData]);

  const handleProviderChange = (event) => {
    setIsChangingProvider(true);
    setSelectedProvider(event.target.value);
    setLoadCount(21);
  };

  const handleSortOrderChange = (event) => {
    setSortOrder(event.target.value);
  };

  const sortData = () => {
    if (!selectedData || selectedData.length === 0) {
      return;
    }

    const sortedData = [...selectedData];
    if (sortOrder === 'asc') {
      sortedData.sort((a, b) => {
        if (a.game_name_en && b.game_name_en) {
          return a.game_name_en.localeCompare(b.game_name_en);
        } else {
          return 0;
        }
      });
    } else if (sortOrder === 'desc') {
      sortedData.sort((a, b) => {
        if (a.game_name_en && b.game_name_en) {
          return b.game_name_en.localeCompare(a.game_name_en);
        } else {
          return 0;
        }
      });
    }
    setVisibleData(sortedData.slice(0, loadCount));
  };

  const loadMore = () => {
    if (isDataLoaded) {
      setIsLoadingMore(true);
      setLoadCount(prevLoadCount => prevLoadCount + 28);
      setIsLoading(true); // Set isLoading to true to show the loading animation
  
      // Delay the update of isLoadingMore and isLoading states to simulate loading
      setTimeout(() => {
        setIsLoadingMore(false);
        setIsLoading(false);
      }, 1000); // Adjust the delay time as needed
    }
  };

  return (
    <>
      <Homepagehero2 />

      <section className='pb-6'>

        <div className='w-full relative'>
          <SearchSlots />
        </div>

        <div>

          <div className='flex justify-between items-center'>

            <div className='game__title pt-7 pb-4'>
              <h3 className='text-white text-2xl'>Slots</h3>
              <span className='loading loading-ring loading-md'></span>
            </div>

            <div className='gameprovider__dropdown'>
              <select
                value={selectedProvider}
                onChange={handleProviderChange}
                className='select select-infi max-w-xs mr-4 dark-1 link__color1'
              >
                {/* <option value='all-games'>All</option> */}
                <option value='5632/slots'>Pragmatic Play</option>
                <option value='5936/slots'>Caleta</option>
                <option value='5938/slots'>KA Gaming</option>
                <option value='5941/slots'>Evolution</option>
                <option value='5942/slots'>Netent</option>
                <option value='5943/slots'>Redtiger</option>
                <option value='5956/slots'>Joker</option>
                <option value='5987/slots'>Microgaming</option>
                <option value='6009/slots'>PgSoft</option>
                <option value='6126/slots'>Amatic</option>
              </select>
              <select
                value={sortOrder}
                onChange={handleSortOrderChange}
                className='select select-infi max-w-xs dark-1 link__color1'
              >
                <option value='asc'>Sort A-Z</option>
                <option value='desc'>Sort Z-A</option>
              </select>
            </div>

          </div>

          <div className='game__wrapper relative overflow-hidden w-full'>
            {isLoading ? ( // Display loading text if isLoading is true
              <>
                <div className='flex justify-center items-center w-full py-40'>
                  <div>
                    <p className='text-white'>Loading</p>
                    <LineWave
                      className='flex justify-center items-center'
                      height='100'
                      width='100'
                      color='#12c2e9'
                      ariaLabel='line-wave'
                      wrapperStyle={{}}
                      wrapperClass=''
                      visible={true}
                      firstLineColor=''
                      middleLineColor=''
                      lastLineColor=''
                    />
                  </div>
                </div>
              </>
            ) : (
              visibleData.length > 0 && (
                <div className='grid grid-cols-7 m-0 p-0 gap-4'>
                  {visibleData.map((game, index) => (
                    <div className='game__box' key={`${game.game_unique_id}_${index}`}>
                      <figure className='relative rounded-xl overflow-hidden'>
                        <div className='img__thumb'>
                          <LazyLoad>
                            <img className='w-full' src={game.image_path.en} alt={game.game_name_en} />
                          </LazyLoad>
                        </div>
                        <figcaption className='flex justify-center items-center opacity-0 invisible absolute top-0 left-0 w-full h-full cursor-pointer transition-all'>
                          <div className='text-center text-lg '>
                            <Link
                              to={game.game_launch_url.web}
                              className='flex justify-between flex-col h-[180px]'
                              target='_blank'
                            >
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
              )
            )}

            {visibleData.length < selectedData.length && (
              <div className="w-full flex justify-center items-center loading__btn">
                <button
                  onClick={loadMore}
                  className={
                    isLoadingMore ? 'loading btn bg-gradient-shifter w-[200px] h-[45px] m-auto block mt-9 text-white' : 'btn bg-gradient-shifter w-[200px] h-[45px] m-auto block mt-9 text-white'
                  }
                  disabled={isLoadingMore} // Disable the button when loading to prevent multiple clicks
                >
                  {isLoadingMore ? (
                    <div className='flex justify-center items-center w-full py-5 relative'>
                      <div className="loading__animation w-[100px] text-center flex justify-center items-center">
                        <p className='text-white'>Loading..</p>
                      </div>
                    </div>
                  ) : (
                    'Load More'
                  )}
                </button>

              </div>
            )}
          </div>

        </div>

      </section>
    </>
  );
};

export default SlotsAllGames;
