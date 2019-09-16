import React, { useEffect } from 'react';
import { TweenMax, Sine } from 'gsap/all';

import { Conteiner } from './styles';

export default function Fotos() {
  useEffect(() => {
    function init() {
      const trigger = [...document.getElementsByClassName('greenshock')];

      trigger.forEach.call(trigger, el => {
        el.addEventListener('mouseover', () => {
          const image = el.getElementsByClassName('img')[0];
          const span = el.getElementsByClassName('shape')[0];

          TweenMax.set(image, { 'z-index': 1 });
          TweenMax.set(span, { 'z-index': 1 });

          TweenMax.to(image, 0.25, {
            ease: Sine.easeInOut,
            scale: 1.1,
          });

          TweenMax.to(span, 0.25, {
            ease: Sine.easeInOut,
            autoAlpha: 0,
          });
        });
      });

      trigger.forEach.call(trigger, el => {
        el.addEventListener('mouseout', () => {
          const image = el.getElementsByClassName('img')[0];
          const span = el.getElementsByClassName('shape')[0];

          TweenMax.set(image, { 'z-index': 0 });
          TweenMax.set(span, { 'z-index': 0 });

          TweenMax.to(image, 0.25, {
            ease: Sine.easeInOut,
            scale: 1.0,
          });

          TweenMax.to(span, 0.25, {
            ease: Sine.easeInOut,
            autoAlpha: 0.5,
          });
        });
      });
    }

    init();
  }, []);

  return (
    <Conteiner>
      <div className="panel">
        <div className="greenshock">
          <img
            className="img"
            src="https://cdn.pixabay.com/photo/2015/07/17/22/43/student-849825_960_720.jpg"
            alt="https://pixabay.com/photos/student-typing-keyboard-text-849825/"
          />
          <span className="shape" />
        </div>
        <div className="greenshock">
          <img
            className="img"
            src="https://cdn.pixabay.com/photo/2015/01/08/18/27/startup-593341_960_720.jpg"
            alt="https://pixabay.com/photos/startup-start-up-people-593341/"
          />
          <span className="shape" />
        </div>
        <div className="greenshock">
          <img
            className="img"
            src="https://cdn.pixabay.com/photo/2018/05/04/10/30/team-3373638_960_720.jpg"
            alt="https://pixabay.com/photos/team-team-building-success-computer-3373638/"
          />
          <span className="shape" />
        </div>
        <div className="greenshock">
          <img
            className="img"
            src="https://cdn.pixabay.com/photo/2015/05/31/10/55/man-791049_960_720.jpg"
            alt="https://pixabay.com/photos/man-reading-touchscreen-blog-791049/"
          />
          <span className="shape" />
        </div>
        <div className="greenshock">
          <img
            className="img"
            src="https://cdn.pixabay.com/photo/2016/03/09/10/37/light-bulb-1246043_960_720.jpg"
            alt="https://pixabay.com/photos/light-bulb-lightbulb-light-bulb-1246043/"
          />
          <span className="shape" />
        </div>
        <div className="greenshock">
          <img
            className="img"
            src="https://cdn.pixabay.com/photo/2016/11/29/08/41/apple-1868496_960_720.jpg"
            alt="https://pixabay.com/photos/apple-apple-devices-simply-mockup-1868496/"
          />
          <span className="shape" />
        </div>
      </div>

      <div className="shapRow" />
    </Conteiner>
  );
}
