import configs, { onChange } from '../configs';
import {
  getContentTopPosition,
  getContentRightPosition,
  getContentBottomPosition,
  getContentLeftPosition,
  getBorderTopWidth,
  getBorderRightWidth,
  getBorderBottomWidth,
  getBorderLeftWidth,
  getMarginTop,
  getMarginRight,
  getMarginBottom,
  getMarginLeft,
} from '../util';

let elementCoverColor = undefined;
const getElementCoverColor = () => {
  elementCoverColor = configs.elementCoverColor;
};
getElementCoverColor();
onChange('elementCoverColor', getElementCoverColor);

let elementPaddingColor = undefined;
const getElementPaddingColor = () => {
  elementPaddingColor = configs.elementPaddingColor;
};
getElementPaddingColor();
onChange('elementPaddingColor', getElementPaddingColor);

let elementBorderColor = undefined;
const getElementBorderColor = () => {
  elementBorderColor = configs.elementBorderColor;
};
getElementBorderColor();
onChange('elementBorderColor', getElementBorderColor);

let elementMarginColor = undefined;
const getElementMarginColor = () => {
  elementMarginColor = configs.elementMarginColor;
};
getElementMarginColor();
onChange('elementMarginColor', getElementMarginColor);

let componentCoverColor = undefined;
const getComponentCoverColor = () => {
  componentCoverColor = configs.componentCoverColor;
};
getComponentCoverColor();
onChange('componentCoverColor', getComponentCoverColor);

let componentPaddingColor = undefined;
const getComponentPaddingColor = () => {
  componentPaddingColor = configs.componentPaddingColor;
};
getComponentPaddingColor();
onChange('componentPaddingColor', getComponentPaddingColor);

let componentBorderColor = undefined;
const getComponentBorderColor = () => {
  componentBorderColor = configs.componentBorderColor;
};
getComponentBorderColor();
onChange('componentBorderColor', getComponentBorderColor);

let componentMarginColor = undefined;
const getComponentMarginColor = () => {
  componentMarginColor = configs.componentMarginColor;
};
getComponentMarginColor();
onChange('componentMarginColor', getComponentMarginColor);

let customParentComponentCoverColor = undefined;
const getCustomParentComponentCoverColor = () => {
  customParentComponentCoverColor = configs.customParentComponentCoverColor;
};
getCustomParentComponentCoverColor();
onChange('customParentComponentCoverColor', getCustomParentComponentCoverColor);

let customParentComponentPaddingColor = undefined;
const getCustomParentComponentPaddingColor = () => {
  customParentComponentPaddingColor = configs.customParentComponentPaddingColor;
};
getCustomParentComponentPaddingColor();
onChange('customParentComponentPaddingColor', getCustomParentComponentPaddingColor);

let customParentComponentBorderColor = undefined;
const getCustomParentComponentBorderColor = () => {
  customParentComponentBorderColor = configs.customParentComponentBorderColor;
};
getCustomParentComponentBorderColor();
onChange('customParentComponentBorderColor', getCustomParentComponentBorderColor);

let customParentComponentMarginColor = undefined;
const getCustomParentComponentMarginColor = () => {
  customParentComponentMarginColor = configs.customParentComponentMarginColor;
};
getCustomParentComponentMarginColor();
onChange('customParentComponentMarginColor', getCustomParentComponentMarginColor);

// cover
const setCoverSidelineTopStyle = (element, computedStyle, boundingClientRect, color) => {
  element.style.top = getCoverSidelineTop(computedStyle, boundingClientRect) - 1 + 'px';
  element.style.left = '0';
  element.style.borderColor = color;
  element.style.borderTopWidth = '1px';
  element.style.width = '100vw';
};

const setCoverSidelineRightStyle = (element, computedStyle, boundingClientRect, color) => {
  element.style.top = '0';
  element.style.left = getCoverSidelineRight(computedStyle, boundingClientRect) + 'px';
  element.style.borderColor = color;
  element.style.borderRightWidth = '1px';
  element.style.height = '100vh';
};

const setCoverSidelineBottomStyle = (element, computedStyle, boundingClientRect, color) => {
  element.style.top = getCoverSidelineBottom(computedStyle, boundingClientRect) + 'px';
  element.style.left = '0';
  element.style.borderColor = color;
  element.style.borderBottomWidth = '1px';
  element.style.width = '100vw';
};

const setCoverSidelineLeftStyle = (element, computedStyle, boundingClientRect, color) => {
  element.style.top = '0';
  element.style.left = getCoverSidelineLeft(computedStyle, boundingClientRect) - 1 + 'px';
  element.style.borderColor = color;
  element.style.borderLeftWidth = '1px';
  element.style.height = '100vh';
};

// padding
const setPaddingSidelineTopStyle = (element, computedStyle, boundingClientRect, color) => {
  element.style.top = getPaddingSidelineTop(computedStyle, boundingClientRect) - 1 + 'px';
  element.style.left = '0';
  element.style.borderColor = color;
  element.style.borderTopWidth = '1px';
  element.style.width = '100vw';
};

const setPaddingSidelineRightStyle = (element, computedStyle, boundingClientRect, color) => {
  element.style.top = '0';
  element.style.left = getPaddingSidelineRight(computedStyle, boundingClientRect) + 'px';
  element.style.borderColor = color;
  element.style.borderRightWidth = '1px';
  element.style.height = '100vh';
};

const setPaddingSidelineBottomStyle = (element, computedStyle, boundingClientRect, color) => {
  element.style.top = getPaddingSidelineBottom(computedStyle, boundingClientRect) + 'px';
  element.style.left = '0';
  element.style.borderColor = color;
  element.style.borderBottomWidth = '1px';
  element.style.width = '100vw';
};

const setPaddingSidelineLeftStyle = (element, computedStyle, boundingClientRect, color) => {
  element.style.top = '0';
  element.style.left = getPaddingSidelineLeft(computedStyle, boundingClientRect) - 1 + 'px';
  element.style.borderColor = color;
  element.style.borderLeftWidth = '1px';
  element.style.height = '100vh';
};

// border
const setBorderSidelineTopStyle = (element, boundingClientRect, color) => {
  element.style.top = boundingClientRect.top - 1 + 'px';
  element.style.left = '0';
  element.style.borderColor = color;
  element.style.borderTopWidth = '1px';
  element.style.width = '100vw';
};

const setBorderSidelineRightStyle = (element, boundingClientRect, color) => {
  element.style.top = '0';
  element.style.left = boundingClientRect.right + 'px';
  element.style.borderColor = color;
  element.style.borderRightWidth = '1px';
  element.style.height = '100vh';
};

const setBorderSidelineBottomStyle = (element, boundingClientRect, color) => {
  element.style.top = boundingClientRect.bottom + 'px';
  element.style.left = '0';
  element.style.borderColor = color;
  element.style.borderBottomWidth = '1px';
  element.style.width = '100vw';
};

const setBorderSidelineLeftStyle = (element, boundingClientRect, color) => {
  element.style.top = '0';
  element.style.left = boundingClientRect.left - 1 + 'px';
  element.style.borderColor = color;
  element.style.borderLeftWidth = '1px';
  element.style.height = '100vh';
};

// margin
const setMarginSidelineTopStyle = (element, computedStyle, boundingClientRect, color) => {
  element.style.top = getMarginSidelineTop(computedStyle, boundingClientRect) - 1 + 'px';
  element.style.left = '0';
  element.style.borderColor = color;
  element.style.borderTopWidth = '1px';
  element.style.width = '100vw';
};

const setMarginSidelineRightStyle = (element, computedStyle, boundingClientRect, color) => {
  element.style.top = '0';
  element.style.left = getMarginSidelineRight(computedStyle, boundingClientRect) + 'px';
  element.style.borderColor = color;
  element.style.borderRightWidth = '1px';
  element.style.height = '100vh';
};

const setMarginSidelineBottomStyle = (element, computedStyle, boundingClientRect, color) => {
  element.style.top = getMarginSidelineBottom(computedStyle, boundingClientRect) + 'px';
  element.style.left = '0';
  element.style.borderColor = color;
  element.style.borderBottomWidth = '1px';
  element.style.width = '100vw';
};

const setMarginSidelineLeftStyle = (element, computedStyle, boundingClientRect, color) => {
  element.style.top = '0';
  element.style.left = getMarginSidelineLeft(computedStyle, boundingClientRect) - 1 + 'px';
  element.style.borderColor = color;
  element.style.borderLeftWidth = '1px';
  element.style.height = '100vh';
};

// computed
const getCoverSidelineTop = (computedStyle, boundingClientRect) => {
  return getContentTopPosition(computedStyle, boundingClientRect);
};

const getCoverSidelineRight = (computedStyle, boundingClientRect) => {
  return getContentRightPosition(computedStyle, boundingClientRect);
};

const getCoverSidelineBottom = (computedStyle, boundingClientRect) => {
  return getContentBottomPosition(computedStyle, boundingClientRect);
};

const getCoverSidelineLeft = (computedStyle, boundingClientRect) => {
  return getContentLeftPosition(computedStyle, boundingClientRect);
};

const getPaddingSidelineTop = (computedStyle, boundingClientRect) => {
  return boundingClientRect.top + getBorderTopWidth(computedStyle);
};

const getPaddingSidelineRight = (computedStyle, boundingClientRect) => {
  return boundingClientRect.right - getBorderRightWidth(computedStyle);
};

const getPaddingSidelineBottom = (computedStyle, boundingClientRect) => {
  return boundingClientRect.bottom - getBorderBottomWidth(computedStyle);
};

const getPaddingSidelineLeft = (computedStyle, boundingClientRect) => {
  return boundingClientRect.left + getBorderLeftWidth(computedStyle);
};

const getMarginSidelineTop = (computedStyle, boundingClientRect) => {
  return boundingClientRect.top - getMarginTop(computedStyle);
};

const getMarginSidelineRight = (computedStyle, boundingClientRect) => {
  return boundingClientRect.right + getMarginRight(computedStyle);
};

const getMarginSidelineBottom = (computedStyle, boundingClientRect) => {
  return boundingClientRect.bottom + getMarginBottom(computedStyle);
};

const getMarginSidelineLeft = (computedStyle, boundingClientRect) => {
  return boundingClientRect.left - getMarginLeft(computedStyle);
};

const createElement = id => {
  const element = document.createElement('DIV');
  setSidelineStyle(element, id);
  return element;
};

const setSidelineStyle = (element, id) => {
  element.dataset['inspectElement'] = 'inspectElement';
  element.id = `inspect-element-${id}`;
  element.style.position = 'fixed';
  element.style.borderWidth = '0';
  element.style.borderStyle = 'dashed';
  element.style.zIndex = '9998';
  element.style.pointerEvents = 'none';
};

const sidelineElements = {
  coverSidelineTop: createElement('cover-top-sideline'),
  coverSidelineRight: createElement('cover-right-sideline'),
  coverSidelineBottom: createElement('cover-bottom-sideline'),
  coverSidelineLeft: createElement('cover-left-sideline'),

  paddingSidelineTop: createElement('padding-top-sideline'),
  paddingSidelineRight: createElement('padding-right-sideline'),
  paddingSidelineBottom: createElement('padding-bottom-sideline'),
  paddingSidelineLeft: createElement('padding-left-sideline'),

  borderSidelineTop: createElement('border-top-sideline'),
  borderSidelineRight: createElement('border-right-sideline'),
  borderSidelineBottom: createElement('border-bottom-sideline'),
  borderSidelineLeft: createElement('border-left-sideline'),

  marginSidelineTop: createElement('margin-top-sideline'),
  marginSidelineRight: createElement('margin-right-sideline'),
  marginSidelineBottom: createElement('margin-bottom-sideline'),
  marginSidelineLeft: createElement('margin-left-sideline'),
};

export const appendSidelineElements = (computedStyle, boundingClientRect) => {
  for (const element of Object.values(sidelineElements))
    if (document.body.contains(element) === false) document.body.appendChild(element);

  // TODO: Добавить подкраску компонентов - сейчас красится только элемент
  setCoverSidelineTopStyle(
    sidelineElements.coverSidelineTop,
    computedStyle,
    boundingClientRect,
    getElementCoverColor(),
  );
  setCoverSidelineRightStyle(
    sidelineElements.coverSidelineRight,
    computedStyle,
    boundingClientRect,
    getElementCoverColor(),
  );
  setCoverSidelineBottomStyle(
    sidelineElements.coverSidelineBottom,
    computedStyle,
    boundingClientRect,
    getElementCoverColor(),
  );
  setCoverSidelineLeftStyle(
    sidelineElements.coverSidelineLeft,
    computedStyle,
    boundingClientRect,
    getElementCoverColor(),
  );

  setPaddingSidelineTopStyle(
    sidelineElements.paddingSidelineTop,
    computedStyle,
    boundingClientRect,
    getElementPaddingColor(),
  );
  setPaddingSidelineRightStyle(
    sidelineElements.paddingSidelineRight,
    computedStyle,
    boundingClientRect,
    getElementPaddingColor(),
  );
  setPaddingSidelineBottomStyle(
    sidelineElements.paddingSidelineBottom,
    computedStyle,
    boundingClientRect,
    getElementPaddingColor(),
  );
  setPaddingSidelineLeftStyle(
    sidelineElements.paddingSidelineLeft,
    computedStyle,
    boundingClientRect,
    getElementPaddingColor(),
  );

  setBorderSidelineTopStyle(sidelineElements.borderSidelineTop, boundingClientRect, getElementBorderColor());
  setBorderSidelineRightStyle(sidelineElements.borderSidelineRight, boundingClientRect, getElementBorderColor());
  setBorderSidelineBottomStyle(sidelineElements.borderSidelineBottom, boundingClientRect, getElementBorderColor());
  setBorderSidelineLeftStyle(sidelineElements.borderSidelineLeft, boundingClientRect, getElementBorderColor());

  setMarginSidelineTopStyle(
    sidelineElements.marginSidelineTop,
    computedStyle,
    boundingClientRect,
    getElementMarginColor(),
  );
  setMarginSidelineRightStyle(
    sidelineElements.marginSidelineRight,
    computedStyle,
    boundingClientRect,
    getElementMarginColor(),
  );
  setMarginSidelineBottomStyle(
    sidelineElements.marginSidelineBottom,
    computedStyle,
    boundingClientRect,
    getElementMarginColor(),
  );
  setMarginSidelineLeftStyle(
    sidelineElements.marginSidelineLeft,
    computedStyle,
    boundingClientRect,
    getElementMarginColor(),
  );
};

export const removeSidelineElements = () => {
  for (const element of Object.values(sidelineElements)) {
    try {
      document.body.removeChild(element);
    } catch (error) {
      // ignore
    }
  }
};
