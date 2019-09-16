import { TweenMax, TweenLite } from 'gsap/all';

const completeCall = target => {
  TweenLite.set(target, { clearProps: 'position, width' });
};

export default {
  onEnter(node) {
    if (node) {
      TweenMax.killTweensOf(node);
      const parent = node.parentNode;
      const targetWidth =
        parent.clientWidth -
        parseFloat(getComputedStyle(node.parentNode).paddingLeft) * 2;

      TweenLite.set(node, {
        position: 'fixed',
        left: '100px',
        autoAlpha: 0,
        width: targetWidth,
      });

      TweenLite.to(node, 0.5, {
        autoAlpha: 1,
        left: 0,
        onComplete: completeCall,
        onCompleteParams: [node],
      });
    }
  },

  onExit(node) {
    if (node) {
      TweenMax.killTweensOf(node);
      const parent = node.parentNode;
      const targetWidth =
        parent.clientWidth -
        parseFloat(getComputedStyle(node.parentNode).paddingLeft) * 2;

      TweenLite.set(node, {
        position: 'fixed',
        width: targetWidth,
      });

      TweenLite.to(node, 0.5, {
        position: 'fixed',
        opacity: 0,
        left: '-100px',
        onComplete: completeCall,
      });
    }
  },
};
