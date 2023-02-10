import styled from 'styled-components';

export const CityTemp = styled.div`
        display: flex;
        margin-bottom: 2rem;
        align-items: center;
        justify-content: space-between;

        h1 {
            display: flex;
            align-items: center;
            gap: 1rem;
            color: #fff;
        }
`;

export const InfoTemp = styled.div`
        margin-bottom: 2rem;
`;

export const Description = styled.div`
        display: flex;
        justify-content: end;
        align-items: center;
`;

export const Bottom = styled.div`
        display: flex;
        justify-content: space-evenly;
        text-align: center;
        width: 100%;
        margin: 1rem auto;
        padding: 1rem;
        border-radius: 14px;
        background-color: rgba(255, 255, 255, 0.2);
`;
