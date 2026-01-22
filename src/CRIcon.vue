<template>
  <component :is="resolvedIcon" v-bind="$attrs" class="cri-icon" />
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { library } from './library';
import type { Component } from 'vue';

const props = defineProps<{
  /**
   * The icon to display. Can be an imported component object or a string name registered in the library.
   */
  icon?: object | string | Component;
  /**
   * Alternative way to specify the icon name if passing a string.
   */
  name?: string;
}>();

const resolvedIcon = computed(() => {
  // 1. Direct Object reference (Highest priority, best for tree-shaking)
  if (typeof props.icon === 'object') {
    return props.icon;
  }

  // 2. String lookup
  const iconName = props.name || (typeof props.icon === 'string' ? props.icon : '');
  
  if (iconName) {
    const icon = library.get(iconName);
    if (!icon) {
      console.warn(`[Cricons] Icon "${iconName}" not found in library. Make sure to add it with library.add()`);
    }
    return icon;
  }

  return null;
});
</script>

<style>
.cri-icon {
  display: inline-block;
  width: 1em;
  height: 1em;
  fill: currentColor;
  vertical-align: middle;
}
</style>
