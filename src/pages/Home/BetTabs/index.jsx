import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import AllBetTabs from './AllBets';
import BigBetTabs from './BigBets';

const BetTabs = () => {

  return (
    <>
        <section className='py-6'>
            <div className='flex justify-between items-start'>
                <Tabs className='tabs__wrapper w-full'>
                    
                    <div className='flex justify-between items-center relative'>
                        <TabList>
                            <Tab>All Bets</Tab>
                            <Tab>Big Bets</Tab>
                        </TabList>
                    </div>

                    <div className="bettabs__title flex items-center border-b border-[#2D3947] font-[500] py-[9px] mobile:text-[10px]">
                        <div className='text-white text-left w-[300px] pl-[16px] text-base'>Game</div>
                        <div className='text-white text-center w-[300px] text-base'>Player</div>
                        <div className='text-white text-center w-[170px] min-w-[145px] text-base'>Bet</div>
                        <div className='text-white text-center w-[170px] text-base'>Multiplier</div>
                        <div className='text-white text-right flex-1 pr-[16px] text-base'>Payout</div>
                    </div>

                    <TabPanel className='h-[550px] overflow-hidden'>
                        <AllBetTabs />
                    </TabPanel>

                    <TabPanel>
                        <BigBetTabs />
                    </TabPanel>

                </Tabs>
            </div>
        </section>
    </>
  );
};

export default BetTabs;
