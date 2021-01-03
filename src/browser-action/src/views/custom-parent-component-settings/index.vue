<template lang="pug">
  v-list
    v-subheader Custom parent component
    v-list-item
      v-checkbox(v-model="logCustomParentComponent" label="Log custom parent component" )

    // TODO: Добавить подкраску компонентов - сейчас красится только элемент
    // v-list-item.my-2
    //   color-picker( v-model="customParentComponentCoverColor")
    //   v-label Cover
    // v-list-item.my-2
    //   color-picker( v-model="customParentComponentPaddingColor")
    //   v-label Padding
    // v-list-item.my-2
    //   color-picker( v-model="customParentComponentBorderColor")
    //   v-label Border
    // v-list-item.my-2
    //   color-picker( v-model="customParentComponentMarginColor")
    //   v-label Margin
</template>

<script>
import configs, { onChange } from '../../../../configs';
import ColorPicker from '../../components/color-picker';

export default {
  name: 'custom-parent-component-settings',

  components: {
    ColorPicker,
  },

  data() {
    return {
      logCustomParentComponent: configs.logCustomParentComponent,
      customParentComponentCoverColor: configs.customParentComponentCoverColor,
      customParentComponentPaddingColor: configs.customParentComponentPaddingColor,
      customParentComponentBorderColor: configs.customParentComponentBorderColor,
      customParentComponentMarginColor: configs.customParentComponentMarginColor,
    };
  },

  watch: {
    logCustomParentComponent() {
      if (this.logCustomParentComponent !== configs.logCustomParentComponent)
        chrome.storage.sync.set({ logCustomParentComponent: this.logCustomParentComponent });
    },
    customParentComponentCoverColor() {
      if (this.customParentComponentCoverColor !== configs.customParentComponentCoverColor)
        chrome.storage.sync.set({ customParentComponentCoverColor: this.customParentComponentCoverColor });
    },
    customParentComponentPaddingColor() {
      if (this.customParentComponentPaddingColor !== configs.customParentComponentPaddingColor)
        chrome.storage.sync.set({ customParentComponentPaddingColor: this.customParentComponentPaddingColor });
    },
    customParentComponentBorderColor() {
      if (this.customParentComponentBorderColor !== configs.customParentComponentBorderColor)
        chrome.storage.sync.set({ customParentComponentBorderColor: this.customParentComponentBorderColor });
    },
    customParentComponentMarginColor() {
      if (this.customParentComponentMarginColor !== configs.customParentComponentMarginColor)
        chrome.storage.sync.set({ customParentComponentMarginColor: this.customParentComponentMarginColor });
    },
  },

  created() {
    onChange('logCustomParentComponent', newValue => (this.logCustomParentComponent = newValue));
    onChange('customParentComponentCoverColor', newValue => (this.customParentComponentCoverColor = newValue));
    onChange('customParentComponentPaddingColor', newValue => (this.customParentComponentPaddingColor = newValue));
    onChange('customParentComponentBorderColor', newValue => (this.customParentComponentBorderColor = newValue));
    onChange('customParentComponentMarginColor', newValue => (this.customParentComponentMarginColor = newValue));
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
