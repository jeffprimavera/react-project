import React from 'react';
import { useEffect, useState } from "react";
import 'swiper/css';
import "swiper/css/navigation";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import LivePPTops from './LiveCasinoTopGames/PragmaticPlay'
import LiveMGPlus from './LiveCasinoTopGames/Microgaming'
import LiveDarwin from './LiveCasinoTopGames/Darwin'


const LiveCasinoTabsGame = () => {

    return (
    
        <section className='pb-6'>
            <div>

                <div className='game__wrapper relative w-full'>

                    <Tabs className='tabs__wrapper w-full'>

                    <TabPanel>
                      <LivePPTops/>
                    </TabPanel>

                    <div className='flex justify-between items-center'>
                        <TabList>
                            <Tab>Pragmatic Play</Tab>
                        </TabList>
                    </div>

                    </Tabs>

                </div>

            </div>
        </section>
    
    )
  }
  
  export default LiveCasinoTabsGame;