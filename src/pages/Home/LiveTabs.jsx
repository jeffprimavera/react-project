import React, { useEffect, useState } from 'react';

const LiveCasinoTabsGame = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://player.staging.smash.t1t.in/pub/get_frontend_games/');
        const json = await response.json();

        console.log(json); // Log the response to the console

        if (json && typeof json === 'object' && json.available_game_providers) {
          const filteredData = Object.entries(json.available_game_providers)
            .filter(([key, value]) => key === '5632')
            .map(([key, value]) => value.game_list);

          if (filteredData.length > 0) {
            setData(filteredData[0]);
          } else {
            console.error('Provider with ID 5632 not found');
          }
        } else {
          console.error('Invalid response format: Expected an object with available_game_providers property');
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      {data ? (
        <ul>
          {data.map(item => (
            <li key={item.game_unique_id}>
              {item.game_name_en}
            </li>
          ))}
        </ul>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default LiveCasinoTabsGame;
