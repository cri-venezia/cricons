
import type { App } from 'vue';
import * as components from './components';

export * from './components';

export interface CriconsOptions {
  icons?: Record<string, any>;
}

export const createCricons = (options: CriconsOptions = {}): { install: (app: App) => void } => {
  return {
    install(app: App) {
      const iconsToRegister = options.icons || {};
      for (const [key, component] of Object.entries(iconsToRegister)) {
        app.component(key, component);
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
