interface Wheather {
  description: string;
  main: string;
}

export interface IWheather {
  id: number;
  name: string;
  main: {
    humidity: number
    temp: number;
    temp_max: number;
    temp_min: number;
  }
  sys: {
    country: string;
  }
  weather: [
    {
      main: string
      icon: string
      description: string
    },
  ]
  wind: {
    speed: number;
  }
}
