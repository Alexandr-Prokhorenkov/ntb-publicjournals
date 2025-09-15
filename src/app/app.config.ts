import {
  ApplicationConfig,
  inject,
  provideBrowserGlobalErrorListeners,
  provideEnvironmentInitializer,
  provideZoneChangeDetection,
  NgZone,
} from '@angular/core';
import { provideRouter, withInMemoryScrolling, Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

import { routes } from './app.routes';
import { YandexMetrikaService } from './shared/services/yandex-metrika.service';
import { environment } from '../environments/environment';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(
      routes,
      withInMemoryScrolling({
        scrollPositionRestoration: 'disabled',
        anchorScrolling: 'disabled',
      }),
    ),

    provideEnvironmentInitializer(() => {
      const ym = inject(YandexMetrikaService);
      const router = inject(Router);
      const zone = inject(NgZone);

      ym.init(environment.metrikaCounterId, {
        clickmap: true,
        trackLinks: true,
        accurateTrackBounce: true,
        webvisor: environment.production,
      });

      zone.runOutsideAngular(() => {
        router.events
          .pipe(filter((e): e is NavigationEnd => e instanceof NavigationEnd))
          .subscribe((e) => ym.hit(e.urlAfterRedirects));
      });
    }),
  ],
};
