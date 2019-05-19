import React, { memo } from 'react';
import { Container, Input } from './styles';

const Search = () => {
  return (
    <Container>
      <img src="/static/images/icons/search.svg" alt="search" />
      <Input type="text" placeholder="search" />
    </Container>
  );
};

export default memo(Search);
