import configs from '../configs';
import {
  getContentTopPosition,
  getContentLeftPosition,
  getContentWidth,
  getContentHeight,
  getPaddingTop,
  getPaddingRight,
  getPaddingBottom,
  getPaddingLeft,
  getBorderTopWidth,
  getBorderRightWidth,
  getBorderBottomWidth,
  getBorderLeftWidth,
  getMarginTop,
  getMarginRight,
  getMarginBottom,
  getMarginLeft,
} from '../util';

// all use the content box to compute top, width, etc.

const setCoverStyle = (element, computedStyle, boundingClientRect, color) => {
  element.style.backgroundColor = color;
  element.style.top = getContentTopPosition(computedStyle, boundingClientRect) + 'px';
  element.style.left = getContentLeftPosition(computedStyle, boundingClientRect) + 'px';
  element.style.height = getContentHeight(computedStyle, boundingClientRect) + 'px';
  element.style.width = getContentWidth(computedStyle, boundingClientRect) + 'px';
};

const setPaddingStyle = (element, computedStyle, boundingClientRect, color) => {
  element.style.top = getContentTopPosition(computedStyle, boundingClientRect) - getPaddingTop(computedStyle) + 'px';
  element.style.left = getContentLeftPosition(computedStyle, boundingClientRect) - getPaddingLeft(computedStyle) + 'px';
  element.style.height = getContentHeight(computedStyle, boundingClientRect) + 'px';
  element.style.width = getContentWidth(computedStyle, boundingClientRect) + 'px';
  element.style.borderColor = color;
  element.style.borderTopWidth = getPaddingTop(computedStyle) + 'px';
  element.style.borderRightWidth = getPaddingRight(computedStyle) + 'px';
  element.style.borderBottomWidth = getPaddingBottom(computedStyle) + 'px';
  element.style.borderLeftWidth = getPaddingLeft(computedStyle) + 'px';
};

const setBorderStyle = (element, computedStyle, boundingClientRect, color) => {
  element.style.top =
    getContentTopPosition(computedStyle, boundingClientRect) -
    getPaddingTop(computedStyle) -
    getBorderTopWidth(computedStyle) +
    'px';
  element.style.left =
    getContentLeftPosition(computedStyle, boundingClientRect) -
    getPaddingLeft(computedStyle) -
    getBorderLeftWidth(computedStyle) +
    'px';
  element.style.height =
    getContentHeight(computedStyle, boundingClientRect) +
    getPaddingTop(computedStyle) +
    getPaddingBottom(computedStyle) +
    'px';
  element.style.width =
    getContentWidth(computedStyle, boundingClientRect) +
    getPaddingRight(computedStyle) +
    getPaddingLeft(computedStyle) +
    'px';
  element.style.borderColor = color;
  element.style.borderTopWidth = getBorderTopWidth(computedStyle) + 'px';
  element.style.borderRightWidth = getBorderRightWidth(computedStyle) + 'px';
  element.style.borderBottomWidth = getBorderBottomWidth(computedStyle) + 'px';
  element.style.borderLeftWidth = getBorderLeftWidth(computedStyle) + 'px';
};

const setMarginStyle = (element, computedStyle, boundingClientRect, color) => {
  element.style.top =
    getContentTopPosition(computedStyle, boundingClientRect) -
    getPaddingTop(computedStyle) -
    getBorderTopWidth(computedStyle) -
    getMarginTop(computedStyle) +
    'px';
  element.style.left =
    getContentLeftPosition(computedStyle, boundingClientRect) -
    getPaddingLeft(computedStyle) -
    getBorderLeftWidth(computedStyle) -
    getMarginLeft(computedStyle) +
    'px';
  element.style.height =
    getContentHeight(computedStyle, boundingClientRect) +
    getPaddingTop(computedStyle) +
    getPaddingBottom(computedStyle) +
    getBorderTopWidth(computedStyle) +
    getBorderBottomWidth(computedStyle) +
    'px';
  element.style.width =
    getContentWidth(computedStyle, boundingClientRect) +
    getPaddingRight(computedStyle) +
    getPaddingLeft(computedStyle) +
    getBorderRightWidth(computedStyle) +
    getBorderLeftWidth(computedStyle) +
    'px';
  element.style.borderColor = color;
  element.style.borderTopWidth = getMarginTop(computedStyle) + 'px';
  element.style.borderRightWidth = getMarginRight(computedStyle) + 'px';
  element.style.borderBottomWidth = getMarginBottom(computedStyle) + 'px';
  element.style.borderLeftWidth = getMarginLeft(computedStyle) + 'px';
};

const createElement = id => {
  const element = document.createElement('DIV');
  setCommonStyle(element, id);
  return element;
};

const setCommonStyle = (element, id) => {
  element.dataset['inspectElement'] = 'inspectElement';
  element.id = `inspect-element-${id}`;
  element.style.position = 'fixed';
  element.style.zIndex = '9999';
  element.style.pointerEvents = 'none';
  element.style.backgroundColor = 'transparent';
  element.style.borderStyle = 'solid';
  element.style.borderWidth = '0px';
  element.style.borderColor = 'transparent';
  element.style.boxSizing = 'content-box';
};

const coverElements = {
  cover: createElement('cover'),
  padding: createElement('padding'),
  border: createElement('border'),
  margin: createElement('margin'),
};

export const appendCoverElements = (computedStyle, boundingClientRect) => {
  for (const element of Object.values(coverElements))
    if (document.body.contains(element) === false) document.body.appendChild(element);

  // TODO: Добавить подкраску компонентов - сейчас красится только элемент
  setCoverStyle(coverElements.cover, computedStyle, boundingClientRect, configs.elementCoverColor);
  setPaddingStyle(coverElements.padding, computedStyle, boundingClientRect, configs.elementPaddingColor);
  setBorderStyle(coverElements.border, computedStyle, boundingClientRect, configs.elementBorderColor);
  setMarginStyle(coverElements.margin, computedStyle, boundingClientRect, configs.elementMarginColor);
};

export const removeCoverElements = () => {
  for (const element of Object.values(coverElements)) {
    try {
      document.body.removeChild(element);
    } catch (error) {
      // ignore
    }
  }
};
