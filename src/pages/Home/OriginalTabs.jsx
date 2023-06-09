import { OriginalGames } from './ImageData'
import {Link} from 'react-router-dom'
import { IconPlayerPlayFilled } from '@tabler/icons-react';

const OriginalTabsGame = () => {
    return ( 
    
        <section className='pb-6'>
            <div>
                <div className='flex justify-start items-center game__title pt-7 pb-4'>
                    <h3 className='text-white text-2xl pr-4'>Bet Originals</h3>
                    <div className='flex justify-start items-center dark-1 p-1 px-3 rounded-full'>
                        <p className='text-white'>⚡ RTP up to</p>
                        <span className='block pl-1 yellow-orange font-semibold'>99.02%</span>
                    </div>
                </div>
                <div className='game__wrapper relative overflow-hidden w-full'>
                    <div className='grid grid-cols-7 m-0 p-0 gap-4'>

                        { OriginalGames.map((item, i) => {
                            return (
                                <div className='game__box' key={i}>
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