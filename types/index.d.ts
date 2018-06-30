import { PluginFunction } from "vue";

export interface ProgressOptions {
  zIndex?: string|number;
  top?: string|number;
  speed?: number;
  color?: string;
  size?: number;
}

export default interface Progress {
  version: string;
  config(options: ProgressOptions): ProgressOptions;
  install: PluginFunction<ProgressOptions>;
  start(): void;
  done(): void;
}

declare module 'vue/types/vue' {
  interface Vue {
    $progress: Progress
  }
}

