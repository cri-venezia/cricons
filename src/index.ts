
import type { App } from 'vue';
import * as components from './components';

export * from './components';

export const createCricons = (options: { icons?: Record<string, any> } = {}) => {
  return {
    install(app: App) {
      const icons = options.icons || components;
      for (const key in icons) {
        app.component(key, (icons as any)[key]);
      }
    }
  };
};

export default {
  install(app: App) {
    for (const key in components) {
      app.component(key, (components as any)[key]);
    }
  }
};
