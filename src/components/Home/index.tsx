import { BsSearch } from 'react-icons/bs';
import { AiOutlineClose } from 'react-icons/ai';

import Button from '../Button';
import InfosCard from '../InfosCard';

import {
  Container, Infos, SpinnerContainer, Title,
} from './styles';
import Spinner from '../Spinner';
import useWheather from '../../hooks/useWheather';

export default function Home() {
  const {
    wheathers, searchInput, isLoading, inputError, setSearchInput,
    searchLocation,
  } = useWheather();

  return (
    <Container>
      <form onSubmit={searchLocation}>
        <Infos>
          <input
            type="text"
            placeholder="Digite sua cidade"
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
            className={inputError ? 'error' : ''}
          />
          <Button type="button" onClick={() => setSearchInput('')}><AiOutlineClose /></Button>
          <Button type="submit"><BsSearch /></Button>
        </Infos>
      </form>

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
