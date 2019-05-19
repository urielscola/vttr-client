import React, { memo } from 'react';

import { Container, Title } from './styles';

const Tag = ({ name }) => {
  return (
    <Container>
      <Title>#{name}</Title>
    </Container>
  );
};

export default memo(Tag);
