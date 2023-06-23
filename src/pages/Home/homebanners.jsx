import React from 'react'
import DepoImg from '/images/depo-img.png'

const HomeBanners = () => {

    return (
    // Homepage Hero
    <section className='pb-2'>

        <div className='w-full grid grid-cols-2 items-center gap-3'>

            <div className="hp__banners__bg casino__bg rounded-xl overflow-hidden">
                <div className="hpb__content__wrapper">
                    <span className="title__wrapper text-white text-5xl font-semibold block">BET Now <span className="block font-semibold text-gradient-breeze">GET BONUS</span></span>
                    <p className="text-white">Play the best Crypto Games 2022 – Crash, 1000+ Slot, Roulette, Baccarat, Live Dealers at BET999.io. Cashback up to 40% and swift 24/7 support.</p>
                    <button className="btn mt-5 bg-gradient-blueraspberry border-0 block w-full text-white">Play Now</button>
                </div>
            </div>

            <div className="hp__banners__bg sports__bg rounded-xl overflow-hidden">
                <div className="hpb__content__wrapper">
                        <span className="title__wrapper text-white text-5xl font-semibold block">BET Now <span className="block font-semibold text-gradient-loveliberty">GET 100% BONUS</span></span>
                        <p className="text-white">Sports Betting on BET999: 10,000+ live events, 50+ sports with highest odds & more bonuses .</p>
                        <button className="btn mt-5 bg-gradient-lemontwist border-0 block w-full text-white">Play Now</button>
                    </div>
            </div>
        </div>
        
        <div className="w-full relative overflow-hidden mt-10">
            <div className="w-full h-full overflow-hidden rounded-xl">
                <img src={DepoImg} alt="" />
            </div>
            <div className='absolute right-[145px] top-16 text-white font-semibold text-2xl'>
                <div>
                    <span><span className='text-yellow-400'>Deposit Bonus</span> without digital wallet</span>
                </div>
                <div>Click here,Fast&Easy</div>
                <button className='btn bg-gradient-blueraspberry mt-3 w-[182px] h-[52px] text-white'>Deposit</button>
            </div>
        </div>

    </section>
    
    )

  }
  
  export default HomeBanners