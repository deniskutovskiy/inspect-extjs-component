<template lang="pug">
  v-list
    v-subheader Element
    v-list-item
      v-checkbox(v-model="logElement" label="Log element" )
    v-list-item.my-2
      color-picker( v-model="elementCoverColor")
      v-label Cover
    v-list-item.my-2
      color-picker( v-model="elementPaddingColor")
      v-label Padding
    v-list-item.my-2
      color-picker( v-model="elementBorderColor")
      v-label Border
    v-list-item.my-2
      color-picker( v-model="elementMarginColor")
      v-label Margin
</template>

<script>
import configs, { onChange } from '../../../../configs';
import ColorPicker from '../../components/color-picker';

export default {
  name: 'element-settings',

  components: {
    ColorPicker,
  },

  data() {
    return {
      logElement: configs.logElement,
      elementCoverColor: configs.elementCoverColor,
      elementPaddingColor: configs.elementPaddingColor,
      elementBorderColor: configs.elementBorderColor,
      elementMarginColor: configs.elementMarginColor,
    };
  },

  watch: {
    logElement() {
      if (this.logElement !== configs.logElement) chrome.storage.sync.set({ logElement: this.logElement });
    },
    elementCoverColor() {
      if (this.elementCoverColor !== configs.elementCoverColor)
        chrome.storage.sync.set({ elementCoverColor: this.elementCoverColor });
    },
    elementPaddingColor() {
      if (this.elementPaddingColor !== configs.elementPaddingColor)
        chrome.storage.sync.set({ elementPaddingColor: this.elementPaddingColor });
    },
    elementBorderColor() {
      if (this.elementBorderColor !== configs.elementBorderColor)
        chrome.storage.sync.set({ elementBorderColor: this.elementBorderColor });
    },
    elementMarginColor() {
      if (this.elementMarginColor !== configs.elementMarginColor)
        chrome.storage.sync.set({ elementMarginColor: this.elementMarginColor });
    },
  },

  created() {
    onChange('logElement', newValue => (this.logElement = newValue));
    onChange('elementCoverColor', newValue => (this.elementCoverColor = newValue));
    onChange('elementPaddingColor', newValue => (this.elementPaddingColor = newValue));
    onChange('elementBorderColor', newValue => (this.elementBorderColor = newValue));
    onChange('elementMarginColor', newValue => (this.elementMarginColor = newValue));
  },
};
</script>

<style scoped>
/deep/.v-input__control {
  height: 28px;
}

.v-label {
  margin-left: 8px !important;
  top: -0.5px;
}
</style>
