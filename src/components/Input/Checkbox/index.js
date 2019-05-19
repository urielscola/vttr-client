import React, { memo } from 'react';
import { Container, Input } from './styles';

const Checkbox = () => {
  return (
    <Container>
      <Input type="checkbox" id="search" />
      <label htmlFor="search">search in tags only</label>
    </Container>
  );
};

export default memo(Checkbox);
