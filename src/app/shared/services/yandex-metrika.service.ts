import { Injectable } from '@angular/core';

export type YMParams = Record<string, unknown>;

export interface YMInitOptions extends YMParams {
  clickmap?: boolean;
  trackLinks?: boolean;
  accurateTrackBounce?: boolean;
  webvisor?: boolean;
}

export interface YM {
  (id: number, method: 'init', options: YMInitOptions): void;
  (id: number, method: 'hit', url: string, params?: YMParams): void;
  (id: number, method: 'reachGoal', goal: string, params?: YMParams): void;
  a?: unknown[];
  l?: number;
}

declare global {
  interface Window {
    ym?: YM;
  }
}

@Injectable({ providedIn: 'root' })
export class YandexMetrikaService {
  private counterId?: number;
  private readonly scriptUrl = 'https://mc.yandex.ru/metrika/tag.js';

  init(counterId: number, options: YMInitOptions = {}): void {
    this.counterId = counterId;
    this.bootstrapYmIfNeeded();
    this.loadScriptIfNeeded();

    window.ym?.(counterId, 'init', {
      clickmap: true,
      trackLinks: true,
      accurateTrackBounce: true,
      webvisor: true,
      ...options,
    });
  }

  hit(url: string, params?: YMParams): void {
    if (this.counterId && typeof window.ym === 'function') {
      window.ym(this.counterId, 'hit', url, params);
    }
  }

  reachGoal(goal: string, params?: YMParams): void {
    if (this.counterId && typeof window.ym === 'function') {
      window.ym(this.counterId, 'reachGoal', goal, params);
    }
  }

  private bootstrapYmIfNeeded(): void {
    if (typeof window.ym === 'function') return;

    const queue: unknown[] = [];

    const ymProxy = ((..._args: unknown[]) => {
      queue.push(_args);
    }) as unknown as YM;

    ymProxy.a = queue;
    ymProxy.l = Date.now();

    window.ym = ymProxy;
  }

  private loadScriptIfNeeded(): void {
    const alreadyLoaded = Array.from(document.scripts).some((s) => s.src === this.scriptUrl);
    if (alreadyLoaded) return;

    const script = document.createElement('script');
    script.async = true;
    script.src = this.scriptUrl;
    const firstScript = document.getElementsByTagName('script')[0];
    firstScript?.parentNode?.insertBefore(script, firstScript);
  }
}
