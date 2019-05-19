import React, { memo } from 'react';
import Tag from '../Tag';
import {
  Container,
  CardTitle,
  CardDescription,
  CardTags,
  Remove
} from './styles';

const remove = id => {
  console.log(id);
};

const Card = ({ card: { title, description, tags } }) => {
  return (
    <Container>
      <CardTitle>{title}</CardTitle>
      <CardDescription>{description}</CardDescription>
      <CardTags>
        {tags.map(tag => (
          <Tag key={tag} name={tag} />
        ))}
      </CardTags>
      <Remove>
        <img src="/static/images/icons/close.svg" alt="Remove" />
        remove
      </Remove>
    </Container>
  );
};

export default memo(Card);
