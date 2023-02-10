import { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import { IWheather } from '../types/wheatherInterface';

export default function useWheather() {
  const [wheathers, setWheathers] = useState<IWheather>();
  const [searchInput, setSearchInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [inputError, setInputError] = useState(false);

  async function searchLocation(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    try {
      if (!searchInput) {
        setInputError(true);
        toast.error('Campo obrigatório');
        return;
      }

      setIsLoading(true);
      const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${searchInput}&units=metric&appid=4f711b1741e0f383d4e07d628b996706&lang=pt_br`);
      setWheathers(response.data);
      toast.success(response.data);
      setSearchInput('');
    } catch (error) {
      toast.error('Cidade não encontrada!');
    } finally {
      setIsLoading(false);
    }
    setInputError(false);
  }

  return {
    searchLocation,
    wheathers,
    setWheathers,
    isLoading,
    inputError,
    setSearchInput,
    searchInput,
  };
}
