import React from 'react';
import { Container } from './styles';

const Background = ({ children, center, color }) => {
  return <Container center={center} color={color}>{children}</Container>;
};

export default Background;
