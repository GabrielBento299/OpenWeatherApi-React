import axios from 'axios';

// eslint-disable-next-line import/prefer-default-export
const key = '4f711b1741e0f383d4e07d628b996706';
const url = 'https://api.openweathermap.org/data/2.5/weather?q=saopaulo&units=metric&appid=4f711b1741e0f383d4e07d628b996706&lang=pt_br';

export const api = axios.create({
  baseURL: url,
});
