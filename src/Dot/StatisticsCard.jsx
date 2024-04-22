import React from 'react';
// This is a card component displaying statistics data.
// Each card contains information about a specific statistic.
// The 'data_obj' parameter contains the data for the statistic.

    

function StatisticsCard({ title, data_obj }) {
  return (
    
      <div className="card">
        <h3>Risk Factor: {data_obj["riskfactor"]}</h3>
        <h5>Percentage: {data_obj["data_value"]}%</h5>
        <h5>Gender: {data_obj["gender"]}</h5>
        <p>Location: {data_obj["locationabbr"]}</p>
      </div>

  );
}

export default StatisticsCard;