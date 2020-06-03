import React from 'react';
import { Container } from './styles';

const Background = ({ children, center }) => {
  return <Container center={center}>{children}</Container>;
};

export default Background;
