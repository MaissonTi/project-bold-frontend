import React, { useEffect, useState } from 'react';
import YouTube from 'react-youtube';

import * as M from 'materialize-css';

import { IoIosPlayCircle } from 'react-icons/io';

import { ModalDiv, Video, Status, Situacao } from '../styles';

export default function Youtube() {
  const [modal, setModal] = useState({});
  const [player, setPlayer] = useState({});
  const [situacao, setSituacao] = useState();

  const [opts] = useState({
    height: '390',
    width: '640',
    playerVars: {
      rel: 0,
      showinfo: 0,
      autoplay: 1,
      origin: 'http://localhost:3000',
    },
  });

  useEffect(() => {
    const options = {
      inDuration: 250,
      outDuration: 250,
      opacity: 0.5,
      startingTop: '4%',
      endingTop: '10%',
      onCloseEnd: () => {
        player.pauseVideo();
      },
    };

    M.Modal.init(modal, options);
  }, [modal, opts, player]);

  function openModal() {
    const instance = M.Modal.getInstance(modal);
    instance.open();
  }

  function onEnd() {
    const instance = M.Modal.getInstance(modal);
    instance.close();
    setSituacao('true');
  }
  function onReady(event) {
    setPlayer(event.target);
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
          <img src="https://img.youtube.com/vi/qJToE6ZoGmI/0.jpg" alt="" />
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
          <YouTube
            videoId="qJToE6ZoGmI"
            opts={opts}
            onEnd={onEnd}
            onReady={onReady}
          />
        </div>
      </ModalDiv>
    </div>
  );
}
