import React, { useState, useEffect } from 'react';
import StatisticsCard from './StatisticsCard.jsx';

// This component fetches and displays eye health data from the CDC
// It displays the first four statistics in the dataset


function CdcStatistics() {
  const [cdcData, setCdcData] = useState([]);

  useEffect(() => {
    fetchCdcData();
  }, []);

  const fetchCdcData = async () => {
    try {
      const response = await fetch('https://data.cdc.gov/resource/vkwg-yswv.json');
      const data = await response.json();
      setCdcData(data);
    } catch (error) {
      console.error('Error fetching CDC data:', error);
    }
  };

  return (
    <div className="riskFactors">
      <h1>Eye Health Data</h1>
      {cdcData && (
        <div className="card-container">
          {cdcData.slice(0, 4).map((statistic, index) => (
            <StatisticsCard
              key={index}
              title={`Statistic ${index + 1}`}
              data_obj={statistic}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default CdcStatistics;
