/* eslint-disable radix */
import { TbTemperatureCelsius } from 'react-icons/tb';
import { GoLocation } from 'react-icons/go';
import { BsSun, BsCloudy } from 'react-icons/bs';
import { IWheather } from '../../types/wheatherInterface';

import {
  CityTemp, InfoTemp, Description, Bottom,
} from './styles';

interface IProps {
  wheathers: IWheather;
}

export default function InfosCard({ wheathers } :IProps) {
  return (
    <div key={wheathers?.id}>
      <CityTemp>
        <div className="infos">
          <span>Cidade:</span>
          <h1>{wheathers?.name} <GoLocation /></h1>
        </div>
        <Description>
          <h2>{wheathers.weather[0].description}</h2>
          <img src={`http://openweathermap.org/img/wn/${wheathers.weather[0].icon}.png`} alt={wheathers.name} />
        </Description>
      </CityTemp>
      <InfoTemp>
        <span>Temperatura atual: </span>
        <h2>{Math.round(wheathers?.main.temp)} <TbTemperatureCelsius /></h2>
        {wheathers?.main.temp >= 25 && <BsSun color="yellow" /> }
        {wheathers?.main.temp <= 25 && <BsCloudy color="#ccc" />}
      </InfoTemp>
      <Bottom>
        <div className="feels">
          <span>{Math.round(wheathers?.main.temp_max)}°</span>
          <p>Temperatura maxima</p>
        </div>
        <div className="humidity">
          <span> {Math.round(wheathers?.main.temp_min)}°</span>
          <p>Temperatura minima</p>
        </div>
        <div className="wind">
          <span>{wheathers?.wind.speed} KM/h</span>
          <p>Velocidade do vento</p>
        </div>
      </Bottom>
    </div>
  );
}
