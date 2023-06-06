import { OriginalGames } from './ImageData'
import {Link} from 'react-router-dom'
import { IconPlayerPlayFilled } from '@tabler/icons-react';

const OriginalTabsGame = () => {
    return (
    
        <section>
            <div>
                <div className='game__title'>
                    <h3>Bet Originals</h3>
                </div>
                <div className='game__wrapper relative overflow-hidden w-full'>
                    <div className='grid grid-cols-6 m-0 p-0'>

                        { OriginalGames.map((item) => {
                            return (
                                <div className='game__box'>
                                    <figure key={item.id} className='relative'>
                                        <div className='img__thumb'>
                                            <img src={ item.img } alt={item.title} />
                                        </div> 
                                        <figcaption className='flex justify-center items-center opacity-0 invisible absolute top-0 left-0 w-full h-full cursor-pointer transition-all'>
                                            <div>
                                                <Link to={item.link}>
                                                    <p>{ item.gamename }</p>
                                                    <span>
                                                        <IconPlayerPlayFilled color='' /> 
                                                    </span>
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