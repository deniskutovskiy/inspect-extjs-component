const configs = {
  modifierKeyCombination: ['metaKey'],

  logElement: false,
  elementCoverColor: '#d6d06280',
  elementPaddingColor: '#b1eab780',
  elementBorderColor: '#c5cf5180',
  elementMarginColor: '#eabcb180',

  logComponent: true,
  componentCoverColor: '#98fc3580',
  componentPaddingColor: '#b1eab780',
  componentBorderColor: '#87eb2480',
  componentMarginColor: '#eabcb180',

  logCustomParentComponent: false,
  customParentComponentCoverColor: '#62a7d580',
  customParentComponentPaddingColor: '#b1eab780',
  customParentComponentBorderColor: '#5196c480',
  customParentComponentMarginColor: '#eabcb180',
};
const configKeys = Object.keys(configs);

const listeners = configKeys.reduce((listeners, key) => {
  listeners[key] = new Set();
  return listeners;
}, {});

chrome.storage.sync.get(configKeys, values => {
  for (const key of configKeys) {
    if (values[key] !== undefined) {
      configs[key] = values[key];
      listeners[key].forEach(fn => fn(configs[key]));
    } else chrome.storage.sync.set({ [key]: configs[key] });
  }
});

chrome.storage.sync.onChanged.addListener(changes => {
  for (const key of configKeys) {
    if (changes[key]) {
      configs[key] = changes[key].newValue;
      listeners[key].forEach(fn => fn(configs[key]));
    }
  }
});
export function onChange(key, callback) {
  listeners[key].add(callback);
}

export default configs;
