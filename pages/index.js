import React from 'react';

import { Container } from '../src/components/Grid';
import Header from '../src/components/Header';
import Card from '../src/components/Card';
import Actions from '../src/components/Actions';

import withTools from '../src/containers/Tools/withTools';

const Home = props => {
  const {
    tools: { list }
  } = props;
  return (
    <Container>
      <Header />
      <Actions />
      {list.map(card => (
        <Card key={card.id} card={card} />
      ))}
    </Container>
  );
};

export default withTools(Home);
