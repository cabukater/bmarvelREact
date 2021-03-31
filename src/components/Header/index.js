  
import React from 'react';

import {
  Container, Top, Logo, Title,
} from './styles';
import logo from '~/assets/logo.png';
export default function Header() {
  return (
    <Container>
      <Top>
        <Logo source={logo} />
        <Title>Camila</Title>
      </Top>
    </Container>
  );
};
