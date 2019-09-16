import React from 'react';
import PropTypes from 'prop-types';
import { IoIosPerson } from 'react-icons/io';
import BasePage from '../../components/basePage';
import Player from '../../components/player';
import { Container, Person } from './styles';

export default function Aula({ match }) {
  return (
    <BasePage>
      <Container className="row">
        <div className="col s6">
          <Player type={match.params.type} />
        </div>

        <div className="col s6">
          <h5>
            Aprenda a fazer WebDesign e Desenvolvimento Web em HTML e CSS e
            termine o curso com o seu Portfolio Online publicado
          </h5>
        </div>
      </Container>
      <Container className="row">
        <div className="col s6">
          <h4> O que você aprenderá </h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
          </p>
        </div>

        <div className="col s6">
          <Person>
            <div>
              <IoIosPerson size={50} />
              <h5> Jonathan Walker </h5>
            </div>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </Person>
          <Person>
            <div>
              <IoIosPerson size={50} />
              <h5> Brenda Marcer </h5>
            </div>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </Person>
        </div>
      </Container>
    </BasePage>
  );
}

Aula.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      type: PropTypes.string,
    }),
  }).isRequired,
};
