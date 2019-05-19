import React, { memo } from 'react';
import SearchInput from '../Input/Search';
import Checkbox from '../Input/Checkbox';
import ButtonPrimary from '../Button/Primary';

import { Container, Left, Right } from './styles';

const Actions = () => {
  return (
    <Container>
      <Left>
        <SearchInput />
        <Checkbox />
      </Left>
      <Right>
        <ButtonPrimary label="Add" />
      </Right>
    </Container>
  );
};

export default memo(Actions);
