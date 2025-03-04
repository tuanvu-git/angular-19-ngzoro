import {
  ApplicationConfig,
  importProvidersFrom,
  provideZoneChangeDetection,
} from '@angular/core';
import {
  PreloadAllModules,
  provideRouter,
  withEnabledBlockingInitialNavigation,
  withInMemoryScrolling,
  withPreloading,
  withRouterConfig,
} from '@angular/router';

import { registerLocaleData } from '@angular/common';
import {
  HTTP_INTERCEPTORS,
  provideHttpClient,
  withInterceptorsFromDi,
} from '@angular/common/http';
import en from '@angular/common/locales/en';
import { FormsModule } from '@angular/forms';
import {
  provideClientHydration,
  withEventReplay,
} from '@angular/platform-browser';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { NzConfig, provideNzConfig } from 'ng-zorro-antd/core/config';
import { en_US, provideNzI18n } from 'ng-zorro-antd/i18n';
import { provideNzIcons } from 'ng-zorro-antd/icon';
import {
  ApiPrefixInterceptor,
  ErrorHandlerInterceptor,
} from './@core/interceptors';
import { SocketIoModule } from './@core/socket-io';
import { routes } from './app.routes';
import { AuthModule } from './auth';
import { icons } from './icons-provider';

const ngZorroConfig: NzConfig = {
  message: { nzTop: 120 },
  notification: { nzTop: 240 },
  theme: {
    primaryColor: '#1890ff',
  },
};

registerLocaleData(en);

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    // provideRouter(routes),
    importProvidersFrom(
      AuthModule,
      SocketIoModule.forRoot({
        rootUrl: null, // TODO: provide your own socket.io server URL
        options: {
          transports: ['websocket'],
        },
      })
    ),
    provideRouter(
      routes,
      withRouterConfig({
        onSameUrlNavigation: 'reload',
        paramsInheritanceStrategy: 'always',
      }),
      withEnabledBlockingInitialNavigation(),
      withInMemoryScrolling({
        scrollPositionRestoration: 'enabled',
        anchorScrolling: 'enabled',
      }),
      withPreloading(PreloadAllModules)
    ),
    provideClientHydration(withEventReplay()),

    // ng-zoro
    provideNzIcons(icons),
    provideNzI18n(en_US),
    provideNzConfig(ngZorroConfig),

    importProvidersFrom(FormsModule),
    provideAnimationsAsync(),
    provideHttpClient(),

    provideHttpClient(withInterceptorsFromDi()),
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ApiPrefixInterceptor,
      multi: true,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ErrorHandlerInterceptor,
      multi: true,
    },
    // {
    //   provide: RouteReuseStrategy,
    //   useClass: RouteReusableStrategy,
    // },
    // { provide: NZ_CONFIG, useValue: ngZorroConfig },
  ],
};
