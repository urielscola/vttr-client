import styled from 'styled-components';

export const Container = styled.div`
  max-width: 200px;
  position: relative;
  margin-right: 25px;

  img {
    pointer-events: none;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: 15px;
    width: 15px;
  }
`;

export const Input = styled.input`
  border: 1px solid #ebeaed;
  padding: 5px 20px 5px 40px;
  background-color: #f5f4f6;
  width: 100%;
  height: 35px;
`;
