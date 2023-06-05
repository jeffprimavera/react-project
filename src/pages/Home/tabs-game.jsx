import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import AllTabsGame from './AllTabs'
import OriginalTabsGame from './OriginalTabs'

const TabsGame = () => {
    return (
    
        <section className='py-6'>
            <Tabs className='tabs__wrapper'>

                <TabList className='gap-3'>
                    <Tab>Title 1</Tab>
                    <Tab>Title 2</Tab>
                </TabList>

                <TabPanel>
                    <AllTabsGame />
                </TabPanel>

                <TabPanel>
                    <OriginalTabsGame />
                </TabPanel>

            </Tabs>
        </section>
    
    )
  }
  
  export default TabsGame