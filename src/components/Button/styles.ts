import styled from 'styled-components';

export const ButtonStyled = styled.button`
        border: none;
        background: transparent;
        cursor: pointer;

        svg {
            font-size: 1.5rem;
            color: #DEDDED;

            @media screen and (max-width: 700px) {
                font-size: 1.2rem;
            }


            &:hover {
                filter: brightness(1.2);
            }
        }
`;
