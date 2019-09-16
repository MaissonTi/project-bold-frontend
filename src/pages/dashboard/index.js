import React from 'react';
import { Link } from 'react-router-dom';

import { Panel } from './styles';
import Player from '../../components/player';

export default function Dashboard() {
  return (
    <div className="section no-pad-bot" id="index-banner">
      <Panel>
        <div>
          <Link to="/dashboard">Inicio</Link>
        </div>
      </Panel>
      <div className="container">
        <div className="row">
          <div className="col s6">
            <h4>Continue sua útilma aula</h4>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the standard dummy text ever since
              the 1500s, when an unknown printer took a galley of type and
              scrambled it to make a type specimen book. It has survived not
              only five centuries, but also the leap into electronic
              typesetting, remaining essentially unchanged. It was popularised
              in the 1960s with the release of Letraset sheets containing Lorem
              Ipsum passages, and more recently with desktop publishing software
              like Aldus PageMaker including versions of Lorem Ipsum.
            </p>
          </div>
          <div className="col s6">
            <Player type="youtube" />
          </div>
        </div>
      </div>
    </div>
  );
}
