import React from 'react';

function StatisticsCard({ title, data_obj }) {
  return (
    /*
    {"yearstart":"2013","yearend":"2013","locationabbr":"US","locationdesc":"National","datasource":"BRFSS","topic":"Visual Function","category":"Blind or Difficulty Seeing","question":"Percentage of people who are blind or have serious difficulty seeing even when wearing glasses","response":"Yes","age":"All ages","gender":"Male","raceethnicity":"All races","riskfactor":"Diabetes","riskfactorresponse":"Yes","data_value_unit":"%","data_value_type":"Crude Prevalence","data_value":"10.1","low_confidence_limit":"9.38","high_confidence_limit":"10.9","sample_size":"1245000","locationid":"59","topicid":"TVFUNC","categoryid":"CBLIND","questionid":"BRVPGL","responseid":"RYES","ageid":"AGEALL","genderid":"GM","raceethnicityid":"ALLRACE","riskfactorid":"RFDM","riskfactorresponseid":"RFYES"}
    */
      <div className="card">
        <h3>Risk Factor: {data_obj["riskfactor"]}</h3>
        <h5>Percentage: {data_obj["data_value"]}%</h5>
        <h5>Gender: {data_obj["gender"]}</h5>
        <p>Location: {data_obj["locationabbr"]}</p>
      </div>

  );
}

export default StatisticsCard;