import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { IconSearch } from '@tabler/icons-react';
import AllTabsGame from './AllTabs' 
import OriginalTabsGame from './OriginalTabs'
import SlotsTabsGame from './SlotsTabs'
import LiveCasinoTabsGame from './LiveTabs'
import SearchSlots from '../../components/searchSlots';

const TabsGame = () => {
    
    return (
    
        <section className='py-6'>
            <div className='flex justify-between items-start'>
                <Tabs className='tabs__wrapper w-full'>

                    <div className='flex justify-between items-center relative'>
                        <TabList>
                            <Tab>All Games</Tab>
                            <Tab>Bet Originals</Tab>
                            <Tab>Slots</Tab>
                            <Tab>Live Casino</Tab>
                        </TabList>
                        
                        <SearchSlots />

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