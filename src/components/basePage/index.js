import React from 'react';
import Contato from '../contato';
import { Container, Position } from './styles';

export default function BasePage({ children, home }) {
  return (
    <Position>
      <Container home={home} className="section no-pad-bot" id="index-banner">
        <div className="container">{children}</div>
      </Container>
      <div className="section no-pad-bot" id="index-banner">
        <div className="container">
          <Contato />
        </div>
      </div>
    </Position>
  );
}
