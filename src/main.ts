/*
*  Protractor support is deprecated in Angular.
*  Protractor is used in this example for compatibility with Angular documentation tools.
*/
import { bootstrapApplication,provideProtractorTestingSupport } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';

//http:setup for server communication
import { HttpClientModule } from '@angular/common/http';
import { importProvidersFrom } from '@angular/core';

import { provideRouter } from '@angular/router';
import routeConfig from './app/routes';

bootstrapApplication(AppComponent,
    {providers: [provideProtractorTestingSupport(),provideRouter(routeConfig), importProvidersFrom(HttpClientModule)]})
  .catch(err => console.error(err));

  //when using standalone components http must be configured here in main.ts since there is no app.modules.ts
