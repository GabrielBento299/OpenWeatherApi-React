import styled from 'styled-components';

export const CityTemp = styled.div`
        display: flex;
        margin-bottom: 2rem;
        align-items: end;
        justify-content: space-between;

        @media screen and (max-width: 500px) {
            flex-direction: column;
            gap: 1rem;
            align-items: normal;
         }

         span {
            font-size: 2rem;
        }

        h1, h2 {
            display: flex;
            align-items: center;
            gap: 1rem;
            color: #fff;

            @media screen and (max-width: 700px) {
                font-size: 1.2rem;
             }
        }

`;

export const InfoTemp = styled.div`
        margin-bottom: 2rem;

        span {
            font-size: 1.5rem;
        }

        h2 {
            font-size: 2rem;
        }

        svg {
            font-size: 2rem;
        }
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

        @media screen and (max-width: 800px) {
            flex-direction: column;
            gap: 1.2rem;
        }
`;
