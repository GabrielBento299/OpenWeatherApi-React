/* eslint-disable react/jsx-no-bind */
import { useEffect, useState } from 'react';
import axios from 'axios';
import { BsSearch } from 'react-icons/bs';
import { toast } from 'react-toastify';
import { IWheather } from '../../types/wheatherInterface';
import Button from '../Button';
import InfosCard from '../InfosCard';

import {
  Container, Infos, SpinnerContainer, Title,
} from './styles';
import Spinner from '../Spinner';

export default function Home() {
  const [wheathers, setWheathers] = useState<IWheather>();
  const [searchInput, setSearchInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [inputError, setInputError] = useState(false);

  // eslint-disable-next-line consistent-return
  async function searchLocation() {
    try {
      if (!searchInput) {
        toast.error('Campo obrigatório');
        setInputError(true);
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
      setInputError(false);
    }
  }

  return (
    <Container>
      <Infos>
        <input
          type="text"
          placeholder="Digite sua cidade"
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
          className={inputError ? 'error' : ''}
        />
        <Button type="button" onClick={searchLocation}><BsSearch /></Button>
      </Infos>
      <SpinnerContainer>
        {isLoading && <Spinner />}
      </SpinnerContainer>

      {!isLoading && wheathers ? (
        <InfosCard
          wheathers={wheathers}
        />
      ) : (<Title>Faça sua busca</Title>)}
    </Container>
  );
}
