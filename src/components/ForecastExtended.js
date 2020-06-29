import React from 'react';
import PropTypes from 'prop-types';
import ForecastItem from './Forecastitem';
import './styles.css';

const renderForecastItemDay = (forecastData) => {
    return forecastData.map(forecast => (
     <ForecastItem 
         weekDay={forecast.weekDay} 
         hour={forecast.hour} 
         data={forecast.data} 
         key={`${forecast.weekDay}${forecast.hour}`}>
     </ForecastItem>))
 }

const renderProgress = () => {
     return "Cargando pronostico extendido";
 }

const ForecastExtended = ({ city, forecastData }) => (
    <div>
        <h2 className='forecast-title'>Pronóstico extendido para {city}:</h2>
        {forecastData ?
            renderForecastItemDay(forecastData) :
            renderProgress()
        }
    </div>            
);

ForecastExtended.propTypes = {
    city: PropTypes.string.isRequired,
    forecastData: PropTypes.array,
}

export default ForecastExtended;