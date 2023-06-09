import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { IconPlayerPlayFilled } from '@tabler/icons-react';
import { LineWave } from  'react-loader-spinner'

const SlotsAllGames = () => {
  const [selectedProvider, setSelectedProvider] = useState('all-games');
  const [selectedData, setSelectedData] = useState([]);
  const [sortOrder, setSortOrder] = useState('asc');
  const [visibleData, setVisibleData] = useState([]);
  const [loadCount, setLoadCount] = useState(21);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true); // Set isLoading to true when fetching data
        if (selectedProvider === 'all-games') {
          const response = await axios.get(
            'http://player.staging.smash.t1t.in/pub/get_frontend_games/all?game_type_code=slots'
          );
          const data = response.data;
          setSelectedData(data.game_list);
        } else if (selectedProvider) {
          const response = await axios.get(
            `http://player.staging.smash.t1t.in/pub/get_frontend_games/${selectedProvider}`
          );
          const data = response.data;
          setSelectedData(data.game_list);
        } else {
          setSelectedData([]);
        }
        setIsLoading(false); // Set isLoading to false after fetching data
      } catch (error) {
        console.log('Error fetching data:', error);
        setIsLoading(false); // Set isLoading to false if there is an error
      }
    };

    fetchData();
  }, [selectedProvider]);

  useEffect(() => {
    sortData();
  }, [sortOrder, selectedData]);

  useEffect(() => {
    setVisibleData(selectedData.slice(0, loadCount));
  }, [loadCount, selectedData]);

  const handleProviderChange = (event) => {
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

  const handleLoadMore = () => {
    setLoadCount(loadCount + 21);
  };

  return (
    <div>
      <section className='pb-6'>
        <div>
          <div className='flex justify-between items-center'>
            <div className='game__title pt-7 pb-4'>
              <h3 className='text-white text-2xl'>Slots</h3>
              <span className='loading loading-ring loading-md'></span>
            </div>
            <div className='gameprovider__dropdown'>
              <select value={selectedProvider} onChange={handleProviderChange} className='select select-infi max-w-xs mr-4 dark-1 link__color1'>
                <option value='all-games'>All</option>
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
              <select value={sortOrder} onChange={handleSortOrderChange} className='select select-infi max-w-xs dark-1 link__color1'>
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
              </>
            ) : (
              visibleData.length > 0 && (
                <div className='grid grid-cols-7 m-0 p-0 gap-4'>
                  {visibleData.map((game, index) => (
                    <div className='game__box {game.game_name_en}' key={`${game.game_unique_id}_${index}`}>
                      <figure className='relative rounded-xl overflow-hidden'>
                        <div className='img__thumb'>
                          <img className='w-full' src={game.image_path.en} alt={game.game_name_en} />
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
              <button
                onClick={handleLoadMore}
                className='load-more-button btn bg-gradient-shifter w-[182px] h-[45px] m-auto block mt-9'
              >
                Load More
              </button>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default SlotsAllGames;
