import styled from 'styled-components';
import { Button } from '../styles';

export const ButtonPrimary = styled(Button)`
  background-color: ${({ theme }) => theme.blue};
  color: ${({ theme }) => theme.white};

  &:hover {
    background-color: #2f55cc;
  }
`;
