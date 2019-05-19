import React, { memo } from 'react';

import { Container, Title, Subtitle } from './styles';

const Header = () => {
  return (
    <Container>
      <Title>
        VUTTR
      </Title>
      <Subtitle>
        Very useful tools to remember
      </Subtitle>
    </Container>
  );
};

export default memo(Header);