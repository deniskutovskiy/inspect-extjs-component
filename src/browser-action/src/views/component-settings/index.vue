<template lang="pug">
  v-list
    v-subheader Component
    v-list-item
      v-checkbox(v-model="logComponent" label="Log component" )

    // TODO: Добавить подкраску компонентов - сейчас красится только элемент
    // v-list-item.my-2
    //   color-picker( v-model="componentCoverColor")
    //   v-label Cover
    // v-list-item.my-2
    //   color-picker( v-model="componentPaddingColor")
    //   v-label Padding
    // v-list-item.my-2
    //   color-picker( v-model="componentBorderColor")
    //   v-label Border
    // v-list-item.my-2
    //   color-picker( v-model="componentMarginColor")
    //   v-label Margin
</template>

<script>
import configs, { onChange } from '../../../../configs';
import ColorPicker from '../../components/color-picker';

export default {
  name: 'component-settings',

  components: {
    ColorPicker,
  },

  data() {
    return {
      logComponent: configs.logComponent,
      componentCoverColor: configs.componentCoverColor,
      componentPaddingColor: configs.componentPaddingColor,
      componentBorderColor: configs.componentBorderColor,
      componentMarginColor: configs.componentMarginColor,
    };
  },

  watch: {
    logComponent() {
      if (this.logComponent !== configs.logComponent) chrome.storage.sync.set({ logComponent: this.logComponent });
    },
    componentCoverColor() {
      if (this.componentCoverColor !== configs.componentCoverColor)
        chrome.storage.sync.set({ componentCoverColor: this.componentCoverColor });
    },
    componentPaddingColor() {
      if (this.componentPaddingColor !== configs.componentPaddingColor)
        chrome.storage.sync.set({ componentPaddingColor: this.componentPaddingColor });
    },
    componentBorderColor() {
      if (this.componentBorderColor !== configs.componentBorderColor)
        chrome.storage.sync.set({ componentBorderColor: this.componentBorderColor });
    },
    componentMarginColor() {
      if (this.componentMarginColor !== configs.componentMarginColor)
        chrome.storage.sync.set({ componentMarginColor: this.componentMarginColor });
    },
  },

  created() {
    onChange('logComponent', newValue => (this.logComponent = newValue));
    onChange('componentCoverColor', newValue => (this.componentCoverColor = newValue));
    onChange('componentPaddingColor', newValue => (this.componentPaddingColor = newValue));
    onChange('componentBorderColor', newValue => (this.componentBorderColor = newValue));
    onChange('componentMarginColor', newValue => (this.componentMarginColor = newValue));
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
