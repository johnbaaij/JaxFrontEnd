import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import * as $ from 'jquery';




import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import {Sizes} from "./jquery/sizes";

$(window).on('load', function() {
  Sizes.mainAreaSize();
  Sizes.textBarSize();
  Sizes.detectIphone();
});


if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
