import { appendCoverElements, removeCoverElements } from './cover-element';
import { appendSidelineElements, removeSidelineElements } from './sideline-element';

export const appendElements = target => {
  const computedStyle = window.getComputedStyle(target);
  const boundingClientRect = target.getBoundingClientRect();

  appendCoverElements(computedStyle, boundingClientRect);
  appendSidelineElements(computedStyle, boundingClientRect);
};

export const removeElements = () => {
  removeCoverElements();
  removeSidelineElements();
};
