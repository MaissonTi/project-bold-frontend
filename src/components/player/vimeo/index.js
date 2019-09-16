import React, { useEffect, useState } from 'react';
import Player from '@vimeo/player';

import * as M from 'materialize-css';

import { IoIosPlayCircle } from 'react-icons/io';

import { ModalDiv, Video, Status, Situacao } from '../styles';

export default function Vimeo() {
  const [modal, setModal] = useState({});
  // const [vimeo, setVimeo] = useState();
  const [situacao, setSituacao] = useState();

  const [opts] = useState({
    height: '390',
    width: '640',
    id: 360146431,
    autoplay: true,
    byline: false,
    title: false,
  });

  useEffect(() => {
    const player = new Player('vimeo-div', opts);
    player.on('ended', () => {
      const instance = M.Modal.getInstance(modal);
      instance.close();
      setSituacao('true');
    });

    // Caso necessario fazer outros tipos de eventos
    // setVimeo(player);

    const options = {
      inDuration: 250,
      outDuration: 250,
      opacity: 0.5,
      startingTop: '4%',
      endingTop: '10%',
      onCloseEnd: () => {
        player.pause().then(function() {});
      },
    };

    M.Modal.init(modal, options);
  }, [modal, opts]);

  function openModal() {
    const instance = M.Modal.getInstance(modal);
    instance.open();
  }

  return (
    <div>
      <div>
        <Status>
          <p>Status do video:</p>
          <Situacao has={situacao}>
            {situacao ? 'Concludo' : 'Não concluido'}
          </Situacao>
        </Status>
        <Video>
          <img src="https://i.vimeocdn.com/video/814243739_130x73.jpg" alt="" />
          <div>
            <IoIosPlayCircle onClick={openModal} />
          </div>
        </Video>
      </div>

      <ModalDiv
        className="modal"
        ref={Modal => {
          setModal(Modal);
        }}
      >
        <div className="video-container">
          <div id="vimeo-div" />
        </div>
      </ModalDiv>
    </div>
  );
}
