<template lang="pug">
  v-app
    modifier-key-combination
    element-settings
    component-settings
    custom-parent-component-settings
</template>

<script>
import CustomParentComponentSettings from './views/custom-parent-component-settings';
import ModifierKeyCombination from './views/modifier-key-combination';
import ElementSettings from './views/element-settings';
import ComponentSettings from './views/component-settings';

export default {
  name: 'App',

  components: {
    ComponentSettings,
    ElementSettings,
    ModifierKeyCombination,
    CustomParentComponentSettings,
  },
};
</script>

<style>
.v-application {
  min-width: 300px;
  overflow: auto;
  background: transparent;
  z-index: 0;
}

.v-subheader {
  height: fit-content;
}

.v-list-item {
  min-height: 0;
}

.v-application.theme--light,
.v-application--wrap .theme--light {
  background: transparent !important;
}
</style>
