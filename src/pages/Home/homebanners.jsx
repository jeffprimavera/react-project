const HomeBanners = () => {

    return (
    // Homepage Hero
    <section className='pb-2'>
        <div className='w-full grid grid-cols-2 items-center gap-3'>
            <div className="hp__banners__bg casino__bg">
                <div className="hpb__content__wrapper">
                    <span className="title__wrapper text-white text-5xl font-semibold pt-10 pl-8 block">BET Now <span className="block font-semibold text-gradient-breeze">GET BONUS</span></span>
                    <button className="btn ml-8 mt-5 bg-gradient-blueraspberry border-0 block">Play Now</button>
                </div>
            </div>
            <div className="hp__banners__bg sports__bg">
                <div className="hpb__content__wrapper">
                        <span className="title__wrapper text-white text-5xl font-semibold pt-10 pl-8 block">BET Now <span className="block font-semibold text-gradient-loveliberty">GET 100% BONUS</span></span>
                        <button className="btn ml-8 mt-5 bg-gradient-lemontwist border-0 block">Play Now</button>
                    </div>
            </div>
        </div>
    </section>
    
    )

  }
  
  export default HomeBanners