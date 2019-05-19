import styled from 'styled-components';

export const Container = styled.div`
  margin-right: 5px;
`;

export const Title = styled.p`
  font-size: ${({ theme }) => theme.body};
  color: ${({ theme }) => theme.body};
  font-weight: 700;
`;
