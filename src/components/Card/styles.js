import styled from 'styled-components';

export const Container = styled.article`
  padding: 15px;
  background-color: ${({ theme }) => theme.white};
  margin-bottom: 20px;
  border: 1px solid #ebeaed;
  transition: 350ms ease-in-out;
  position: relative;

  &:hover {
    box-shadow: 0px 20px 25px #ebeaed;
  }
`;

export const CardTitle = styled.h3`
  font-size: ${({ theme }) => theme.h3};
  color: ${({ theme }) => theme.ink};
  margin-bottom: 5px;
  text-decoration: underline;
`;

export const CardDescription = styled.p`
  font-size: ${({ theme }) => theme.body};
`;

export const CardTags = styled.div`
  display: flex;
  align-items: center;
`;

export const Remove = styled.button`
  font-size: 18px;
  color: ${({ theme }) => theme.red};
  background-color: transparent;
  border: 0;
  cursor: pointer;
  padding: 0;
  position: absolute;
  right: 15px;
  top: 15px;
  outline: none;
  display: flex;
  align-items: center;

  img {
    width: 10px;
    padding-right: 7px;
  }
`;
