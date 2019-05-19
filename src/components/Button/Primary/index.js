import React, { memo } from 'react';
import { ButtonPrimary } from './styles';

const ButtonPrimaryComponent = ({ label }) => {
  return <ButtonPrimary>{label}</ButtonPrimary>;
};

export default memo(ButtonPrimaryComponent);
