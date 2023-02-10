/* eslint-disable react/button-has-type */
import { ReactNode } from 'react';

import { ButtonStyled } from './styles';

interface IProps {
  children: ReactNode;
  // eslint-disable-next-line react/require-default-props
  type: 'button' | 'submit';
  // eslint-disable-next-line react/require-default-props
  onClick?: () => void;
}

export default function Button({ children, type, onClick } : IProps) {
  return (
    <ButtonStyled type={type} onClick={onClick}>{children}</ButtonStyled>
  );
}
