import styled from 'styled-components';

export const Container = styled.header`
  padding: 35px 0;
`;

export const Title = styled.h1`
  font-size: ${({ theme }) => theme.h1};
  color: ${({ theme }) => theme.ink};
  margin-bottom: 5px;
`;

export const Subtitle = styled.h2`
  font-size: ${({ theme }) => theme.h2};
  color: ${({ theme }) => theme.ink};
`;