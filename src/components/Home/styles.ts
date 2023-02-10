import styled from 'styled-components';

export const Container = styled.div`
        max-width: 800px;
        width: 95%;
        padding: 2rem;
        margin: 0 auto;
        color: #fff;

        background: transparent;
        box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
        backdrop-filter: blur( 3.5px );
        -webkit-backdrop-filter: blur( 13.5px );
        border-radius: 15px;

        @media screen and (max-width: 700px) {
                backdrop-filter: none;
        }
`;

export const Infos = styled.div`
        display: flex;
        align-items: center;
        justify-content: center;
        gap: .7rem;
        margin-bottom: 2rem;
        height: 50px;

        input {
            width: 50%;
            height: 50px;
            border-radius: 7px;
            padding: 0 1rem;
            font-size: 1rem;
            border: 2px solid #DEDDED;
            background-color: transparent;
            color: #fff;
            outline: none;
            box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.04);
            transition: border-color 0.2s ease-in;

            @media screen and (max-width: 700px) {
                width: 100%;
            }

            &:focus {
                border-color: #5061fc;
            }

            &::placeholder {
                color: #fff;
                font-size: 1.2rem;
            }

            &.error {
                border-color: #CC0800;
            }
        }
`;

export const SpinnerContainer = styled.div`
        display: flex;
        align-items: center;
        justify-content: center;
`;

export const Title = styled.h1`
        text-align: center;
        font-size: 2.5rem;
        color: #f6f5fc;
`;
