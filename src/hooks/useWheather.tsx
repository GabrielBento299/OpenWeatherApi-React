import { useEffect, useState } from 'react';
import axios from 'axios';
import { IWheather } from '../types/wheatherInterface';

const url = 'https://api.openweathermap.org/data/2.5/weather?q=aracaju&units=metric&appid=4f711b1741e0f383d4e07d628b996706&lang=pt_br';

export default function useWheather() {
  const [wheathers, setWheathers] = useState<IWheather[]>([]);

  async function getWheathers() {
    const response = await axios.get(url);
    setWheathers(response.data);
    console.log(response);
  }

  return {
    getWheathers,
    wheathers,
    setWheathers,
  };
}
