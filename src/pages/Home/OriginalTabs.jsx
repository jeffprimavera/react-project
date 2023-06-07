import { OriginalGames } from './ImageData'
import {Link} from 'react-router-dom'
import { IconPlayerPlayFilled } from '@tabler/icons-react';

const OriginalTabsGame = () => {
    return (
    
        <section>
            <div>
                <div className='game__title pt-7 pb-4'>
                    <h3 className='text-white text-2xl'>Bet Originals</h3>
                </div>
                <div className='game__wrapper relative overflow-hidden w-full'>
                    <div className='grid grid-cols-6 m-0 p-0 gap-4'>

                        { OriginalGames.map((item) => {
                            return (
                                <div className='game__box'>
                                    <figure key={item.id} className='relative rounded-xl overflow-hidden'>
                                        <div className='img__thumb'>
                                            <img className='w-full' src={ item.img } alt={item.title} />
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
                                </div>
                            )
                        }
                        )}
                        
                    </div>
                </div>
            </div>
        </section>
    
    )
  }
  
  export default OriginalTabsGame