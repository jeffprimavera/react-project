import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import AllTabsGame from './AllTabs'
import OriginalTabsGame from './OriginalTabs'

const TabsGame = () => {
    return (
    
        <section>
            <Tabs>

                <TabList>
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