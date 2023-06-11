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

    const [gamesData, setGamesData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await fetch(
              'http://player.staging.smash.t1t.in/pub/get_frontend_games/5632'
            );
                
            if (response.ok) {
              const data = await response.json();
              setGamesData(data.game_list);
            } else {
              console.log('Error:', response.status);
            }
          } catch (error) {
            console.log('Error:', error);
          }
        };
    
        fetchData();
      }, []);

    const allowedTopGameOrders = ["1", "2", "3", "4", "5", "6","7","8","9","10","11","12","13","14","15","16","17","18","19","20"];
    const filteredGames = gamesData?.filter(game => allowedTopGameOrders.includes(game.top_game_order));

    return (
    
        <section className='pb-6'>
            <div>

                <div className='game__wrapper relative w-full'>

                    <Tabs className='tabs__wrapper w-full'>

                    <TabPanel>
                        <section>
                            <PragmaticPlayTop/>
                        </section>
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