import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import BasePage from '../../components/basePage';

import { Container } from './styles';

export default function Cursos() {
  const [cursos] = useState([
    {
      id: 1,
      titulo: 'Web Design',
      texto:
        'I am a very simple card. I am good at containing small bits of information.',
      duracao: '16 horas',
      mentor: 'Ressie Rott',
      image:
        'https://cdn.pixabay.com/photo/2015/01/08/18/27/startup-593341_960_720.jpg',
      button: 'Assistir Vimeo',
      type: 'vimeo',
    },
    {
      id: 2,
      titulo: 'Photography',
      texto:
        'I am a very simple card. I am good at containing small bits of information.',
      duracao: '12 horas',
      mentor: 'Floyd Fukuda',
      image:
        'https://cdn.pixabay.com/photo/2015/07/17/22/43/student-849825_960_720.jpg',
      button: 'Assistir Youtube',
      type: 'youtube',
    },
  ]);

  return (
    <BasePage>
      <Container>
        {cursos.map(value => (
          <div key={value.id} className="card">
            <div className="card-image">
              <img src={value.image} alt="" />
            </div>
            <div className="card-content">
              <p className="card-title">{value.titulo}</p>
              <span>{value.texto}</span>
              <p> Duração: {value.duracao}</p>
              <p> Mentor: {value.mentor} </p>
            </div>
            <div className="card-action">
              <Link
                className="waves-effect waves-light btn"
                to={`/aula/${value.type}`}
              >
                {value.button}
              </Link>
            </div>
          </div>
        ))}
      </Container>
    </BasePage>
  );
}
