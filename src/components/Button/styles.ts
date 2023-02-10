import styled from 'styled-components';

export const ButtonStyled = styled.button`
        border: none;
        background: transparent;
        cursor: pointer;

        svg {
            font-size: 1.5rem;
            color: #DEDDED;

            &:hover {
                filter: brightness(1.2);
            }
        }
`;
