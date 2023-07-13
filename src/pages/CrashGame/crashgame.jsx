import CrashImg from '/images/crash.jpg'
import BetTabs from '../Home/BetTabs'

const CrashGame = () => {

    return (
    <>
        <section className='pb-5'>

        <div className="w-full text-white text-xl font-semibold pb-2">Crash</div>

        <div className="iframe__wrapper rounded-xl relative">
            <div className="w-full h-full">
                <iframe className="absolute left-0 top-0 bottom-0 w-full h-full rounded-xl max-w-full" src=""></iframe>
            </div>
        </div>

        <div className="game__info w-full rounded-xl bg-[#1B2330] p-7 mt-11">
            <div className="flex justify-between">
                <div className='flex'>
                    <div className='w-40 rounded-xl overflow-hidden mr-4'>
                        <img src={CrashImg} alt="" />
                    </div>
                    <div className='flex flex-col justify-between'>
                        <div className='text-white text-3xl'>CRASH</div>
                        <div className=''>
                            <div className='text-base mb-3 flex'>
                                <span className='text-[#909FAC] block pr-1'>By</span>
                                <span className='text-white'>BET777</span>
                            </div>
                            <div>
                               <span className='text-[#909FAC]'>Release:2023/7/11</span> 
                            </div>
                        </div>
                    </div>
                </div>
                <div className='w-[689px] h-[216px]'>
                    <div className='text-3xl text-white mb-12'>Game Info</div>
                    <div className='text-base'>
                        <div className='flex gap-1 mb-1'>
                            <div className='w-full h-16 rounded-lg bg-[#11171D] flex justify-between items-center px-3'>
                                <div className='text-[#98A7B5]'>RTP (Return to Player)</div>
                                <div className='text-[#48A5E9]'>99%</div>
                            </div>
                            <div className='w-full h-16 rounded-lg bg-[#11171D] flex justify-between items-center px-3'>
                                <div className='text-[#98A7B5]'>Provider</div>
                                <div className='text-white'>BET777</div>
                            </div>
                        </div>
                        <div className='flex gap-1'>
                            <div className='w-full h-16 rounded-lg bg-[#11171D] flex justify-between items-center px-3'>
                                <div className='text-[#98A7B5]'>Mobile</div>
                                <div className='text-white'>Yes</div>
                            </div>
                            <div className='w-full h-16 rounded-lg bg-[#11171D] flex justify-between items-center px-3'>
                                <div className='text-[#98A7B5]'>Type</div>
                                <div className='text-white'>B7 Originals</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='mt-10'>
                <div className='text-2xl text-white mt-8 mb-4'>About this game</div>
                <div className='text-base text-[#909FAC]'>The Crash is a multiplayer game. In the game, you are allowed to cash the money after betting.</div>
            </div>
        </div>
        
        </section>

    </>
    )
  }
  
  export default CrashGame