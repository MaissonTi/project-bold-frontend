import React from 'react';
import PropTypes from 'prop-types';

import Vimeo from './vimeo';
import Youtube from './youtube';

export default function Player({ type }) {
  return <>{type === 'youtube' ? <Youtube /> : <Vimeo />}</>;
}

Player.propTypes = {
  type: PropTypes.string.isRequired,
};
