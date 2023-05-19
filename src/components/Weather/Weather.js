import React, { useEffect, useState } from 'react';
// import styles from "../../components/App/App.css";
import styles from "../../components/App/App.module.css";


const Weather = () => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        
        // const response = await fetch('https://api.open-meteo.com/v1/forecast?latitude=51.11&longitude=-114.08&hourly=temperature_2m');
        const response = await fetch('https://api.open-meteo.com/v1/forecast?latitude=51.11&longitude=-114.08&hourly=temperature_2m&current_weather=true');
        const data = await response.json();
        setData(data);
        console.log(data)
        setIsLoading(false);
      } catch (error) {
        console.log('Error fetching data:', error);
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className={styles.Weather} >

      <p className={styles.WeatherText}>Current Temperature at {data.current_weather.time} -  <br/>{data.current_weather.temperature} °C</p>
      
     

    </div>
  );
};

export default Weather;
