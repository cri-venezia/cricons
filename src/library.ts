import type { Component } from 'vue';

const registry = new Map<string, Component>();

export const library = {
  add(icons: Component | Component[]) {
    const list = Array.isArray(icons) ? icons : [icons];
    list.forEach((icon) => {
      if (icon.name) {
        registry.set(icon.name, icon);
      }
    });
  },
  get(name: string) {
    return registry.get(name);
  },
  has(name: string) {
    return registry.has(name);
  }
};
