import React, { useState, useEffect } from 'react';
import axios from 'axios';

const SlotsAllGames = () => {
  const [selectedProvider, setSelectedProvider] = useState('');
  const [selectedData, setSelectedData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (selectedProvider) {
          const response = await axios.get(`http://player.staging.smash.t1t.in/pub/get_frontend_games/${selectedProvider}`);
          const data = response.data;
          setSelectedData(data.game_list);
        } else {
          setSelectedData([]);
        }
      } catch (error) {
        console.log('Error fetching data:', error);
      }
    };

    fetchData();
  }, [selectedProvider]);

  const handleProviderChange = (event) => {
    setSelectedProvider(event.target.value);
  };

  return (
    <div>
        
      <select value={selectedProvider} onChange={handleProviderChange}>
        <option value="">Select a Provider</option>
        <option value="5632/slots">Pragmatic Play</option>
        <option value="5936/slots">Caleta</option>
        <option value="5938/slots">KA Gaming</option>
      </select>

      {selectedData.length > 0 && (
        <div>
          <h2>Selected Data</h2>
          <ul>
            {selectedData.map((item) => (
              <li key={item.game_unique_id}>{item.game_name_en}</li>
            ))}
          </ul>
        </div>
      )}

    </div>
  );
};

export default SlotsAllGames;
