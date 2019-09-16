import React from 'react';
import { Link } from 'react-router-dom';

import BasePage from '../../components/basePage';
import Fotos from '../../components/fotos';

import { Container } from './styles';

export default function Home() {
  return (
    <BasePage home>
      <Fotos />
      <Container>
        <Link to="/cursos"> Veja todos os nossos cursos </Link>
      </Container>
    </BasePage>
  );
}
