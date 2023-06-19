import { useState } from 'react';
import { IconSearch } from '@tabler/icons-react';
import { Link } from 'react-router-dom';
import { IconPlayerPlayFilled } from '@tabler/icons-react';
import { LineWave } from 'react-loader-spinner';
import LazyLoad from 'react-lazy-load';

const SearchSlots = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isNoResults, setIsNoResults] = useState(false);
  const [isInputFocused, setIsInputFocused] = useState(false);

  const handleSearch = async () => {
    try {
      setIsLoading(true);
      setIsNoResults(false);
      if (searchTerm.trim() === '') {
        setSearchResults([]);
        setIsLoading(false);
        return;
      }
      const response = await fetch(`http://player.staging.smash.t1t.in/pub/get_frontend_games/all?game_type_code=slots&search=${encodeURIComponent(searchTerm)}`);
      const data = await response.json();

      // Check if data.game_list is an array
      if (Array.isArray(data.game_list)) {
        const filteredResults = data.game_list.filter((game) => {
          const gameNameEn = game.game_name_en || '';
          const gameName = game.game_name || '';
          return (
            gameNameEn.toLowerCase().includes(searchTerm.toLowerCase()) ||
            gameName.toLowerCase().includes(searchTerm.toLowerCase())
          );
        });
        setSearchResults(filteredResults);
        if (filteredResults.length === 0) {
          setIsNoResults(true);
        } else {
          setIsNoResults(false);
        }
      } else {
        console.error('Invalid data format:', data);
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
    handleSearch(); // Call handleSearch whenever the search term changes
  };

  const handleInputFocus = () => {
    setIsInputFocused(true);
  };

  const handleInputBlur = (e) => {
    const target = e.relatedTarget;
    if (target && target.closest('.game__box')) {
      e.preventDefault();
      e.stopPropagation();
      return;
    }
    setIsInputFocused(false);
  };

  return (
    <div className='search__wrapper cursor-pointer w-96'>
      <div className='flex justify-start items-center bg-blue1 py-1 px-5 rounded-lg'>
        <IconSearch width='16' height='16' color='#909999' />
        <input
          type='text'
          placeholder='Game name | Provider'
          className='input input-bordered w-full max-w-xs bg-blue1 link__color1'
          value={searchTerm}
          onChange={handleChange}
          onFocus={handleInputFocus}
          onBlur={handleInputBlur}
        />
      </div>
      {isInputFocused && (
        <div className='floating__div' onMouseDown={(e) => e.stopPropagation()}>
          {isLoading && (
            <div className='loading-animation absolute top-20 left-0 w-full dark-1 z-50 m-0 p-5 rounded-xl'>
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
            </div>
          )}
          {!isLoading && !isNoResults && searchResults.length > 0 && (
            <div className='absolute top-20 left-0 w-full dark-1 z-50 m-0 p-5 rounded-xl overflow-x-hidden h-[528px] overflow-y-scroll cursor-default'>
              <p className='text-white pb-3'>Search Results:</p>
              <div className='game__wrapper grid grid-cols-7 gap-4'>
                {searchResults.map((game, index) => (
                  <div className='game__box cursor-pointer' key={`${game.game_unique_id}_${index}`}>
                    <figure className='relative rounded-xl overflow-hidden'>
                      <div className='img__thumb'>
                        <LazyLoad offset={300}>
                          <img className='w-full' src={game.image_path.en} alt={game.game_name_en} />
                        </LazyLoad>
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
            </div>
          )}
          {!isLoading && isNoResults && (
            <div className='absolute top-20 left-0 w-full text-center dark-1 z-50 m-0 p-5 rounded-xl text-white h-[250px] flex justify-center items-center'>
              No results found.
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default SearchSlots;
