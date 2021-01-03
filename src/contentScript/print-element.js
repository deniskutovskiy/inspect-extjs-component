import configs, { onChange } from '../configs';

let actionKeyList = undefined;
let shouldLogElement = undefined;
let shouldLogComponent = undefined;
let shouldLogCustomParentComponent = undefined;

const getActionKeyList = () => {
  actionKeyList = configs.modifierKeyCombination;
};
const getShouldLogElement = () => {
  shouldLogElement = configs.logElement;
};
const getShouldLogComponent = () => {
  shouldLogComponent = configs.logComponent;
};
const getShouldLogCustomParentComponent = () => {
  shouldLogCustomParentComponent = configs.logCustomParentComponent;
};

getActionKeyList();
getShouldLogElement();
getShouldLogComponent();
getShouldLogCustomParentComponent();

onChange('modifierKeyCombination', getActionKeyList);
onChange('logElement', getShouldLogElement);
onChange('logComponent', getShouldLogComponent);
onChange('logCustomParentComponent', getShouldLogCustomParentComponent);

const fixStringEndings = str => str.replace(/[.]$/, '').replace(/[.][.]/, '.');

const getNodePath = function (node) {
  if (node.length != 1) throw 'Requires one element.';

  let path;
  while (node.length) {
    const realNode = node[0];
    let name =
      // IE9 and non-IE
      realNode.localName ||
      // IE <= 8
      realNode.tagName ||
      realNode.nodeName;

    // on IE8, nodeName is '#document' at the top level, but we don't need that
    if (!name || name == '#document') break;

    name = name.toLowerCase();
    if (realNode.id) {
      // As soon as an id is found, there's no need to specify more.
      return fixStringEndings(name + '#' + realNode.id + (path ? '>' + path : ''));
    } else if (realNode.className) {
      name += '.' + realNode.className.split(/\s+/).join('.');
    }

    const parent = node.parent(),
      siblings = parent.children(fixStringEndings(name));
    if (siblings.length > 1) name += ':eq(' + siblings.index(node) + ')';
    path = name + (path ? '>' + path : '');

    node = parent;
  }

  return fixStringEndings(path);
};

const performCustomScript = (fn, ...args) => {
  let script = document.createElement('script');
  script.textContent = `(${fn})(${args});`;
  (document.head || document.documentElement).appendChild(script);
  script.remove();
};

const selectElementByPathFnStr = el => `document.querySelector("${getNodePath(jQuery(el))}")`;

const performPrintElementScript = function (element) {
  performCustomScript(function (target) {
    window.$el = target;
    console.log(target);
  }, selectElementByPathFnStr(element));
};

const performPrintComponentScript = function (element) {
  performCustomScript(function (target) {
    const body = Ext.getBody().el.dom;
    let cmp;
    do {
      cmp = Ext.getCmp(target.id);
      if (!cmp) {
        cmp = Ext.getCmp(target.getAttribute('data-componentid'));
      }
      if (!cmp) {
        cmp = Ext.getCmp(target.getAttribute('data-columnid'));
      }
      window.$cmp = cmp;
      target = target.parentNode;
    } while (!cmp && target && target !== body);
    console.log(target === body ? undefined : cmp);
  }, selectElementByPathFnStr(element));
};

const performPrintCustomParentComponentScript = function (element) {
  performCustomScript(function (target) {
    const body = Ext.getBody().el.dom;
    let cmp;
    do {
      cmp = Ext.getCmp(target.id);
      if (!cmp) {
        cmp = Ext.getCmp(target.getAttribute('data-componentid'));
      }
      if (!cmp) {
        cmp = Ext.getCmp(target.getAttribute('data-columnid'));
      }
      window.$parent = cmp;
      target = target.parentNode;
    } while ((!cmp || cmp.$className.startsWith('Ext')) && target && target !== body);
    console.log(target === body ? undefined : cmp);
  }, selectElementByPathFnStr(element));
};

export const printTargetElement = (event, target) => {
  if (!shouldLogElement && !shouldLogComponent && !shouldLogCustomParentComponent) return;
  for (let key of actionKeyList) {
    if (event[key] === false) return;
  }

  event.preventDefault();

  if (shouldLogElement) {
    performPrintElementScript(target);
  }

  if (shouldLogComponent) {
    performPrintComponentScript(target);
  }

  if (shouldLogCustomParentComponent) {
    performPrintCustomParentComponentScript(target);
  }
};
