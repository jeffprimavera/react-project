import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { IconSearch } from '@tabler/icons-react';
import AllTabsGame from './AllTabs' 
import OriginalTabsGame from './OriginalTabs'
import SlotsTabsGame from './SlotsTabs'
import LiveCasinoTabsGame from './LiveTabs'

const TabsGame = () => {
    
    return (
    
        <section className='py-6'>
            <div className='flex justify-between items-start'>
                <Tabs className='tabs__wrapper w-full'>

                    <div className='flex justify-between items-center'>
                        <TabList>
                            <Tab>All Games</Tab>
                            <Tab>Bet Originals</Tab>
                            <Tab>Slots</Tab>
                            <Tab>Live Casino</Tab>
                        </TabList>
                        
                        <div className='search__wrapper cursor-pointer w-96'>
                            <div className='flex justify-start items-center bg-blue1 py-1 px-5 rounded-lg'>
                                <IconSearch width='16' height='16' color='#909999' />
                                <input 
                                type="text" 
                                placeholder="Game name | Provider" 
                                className="input input-bordered w-full max-w-xs bg-blue1 link__color1"
                                />
                            </div>
                         </div>

                    </div>

                    <TabPanel>
                        <AllTabsGame />
                    </TabPanel>

                    <TabPanel>
                        <OriginalTabsGame />
                    </TabPanel>

                    <TabPanel>
                        <SlotsTabsGame />
                    </TabPanel>

                    <TabPanel>
                        <LiveCasinoTabsGame />
                    </TabPanel>

                </Tabs>
            </div>
        </section>
    
    )
  }
  
  export default TabsGame