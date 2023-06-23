import React from 'react';
import { useEffect, useState } from "react";
import 'swiper/css';
import "swiper/css/navigation";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import PragmaticPlayTop from './SlotsTopGames/PragmaticplayTops'
import CaletaSlotsTops from './SlotsTopGames/CaletaTops';
import KAGamingSlotsTops from './SlotsTopGames/KAGamingTops';
import NetentSlotsTops from './SlotsTopGames/NetentTops';
import JokerSlotsTops from './SlotsTopGames/JokerTops';
import MicrogamingSlotsTops from './SlotsTopGames/MicrogamingTops';
import PGSoftSlotsTops from './SlotsTopGames/PGSoftTops';

const SlotsTabsGame = () => {

    return (
    
        <section className='pb-6'>
            <div>

                <div className='game__wrapper relative w-full'>

                    <Tabs className='tabs__wrapper w-full'>

                    <TabPanel>
                      <PragmaticPlayTop/>
                    </TabPanel>

                    <TabPanel>
                      <CaletaSlotsTops/>
                    </TabPanel>

                    <TabPanel>
                      <KAGamingSlotsTops/>
                    </TabPanel>

                    <TabPanel>
                      <JokerSlotsTops/>
                    </TabPanel>

                    <TabPanel>
                      <PGSoftSlotsTops/>
                    </TabPanel>

                    <div className='flex justify-between items-center'>
                        <TabList>
                            <Tab>Pragmatic Play</Tab>
                            <Tab>Caleta</Tab>
                            <Tab>KA Gaming</Tab>
                            <Tab>Joker</Tab>
                            <Tab>PGSoft</Tab>
                        </TabList>
                    </div>

                    </Tabs>

                </div>

            </div>
        </section>
    
    )
  }
  
  export default SlotsTabsGame;