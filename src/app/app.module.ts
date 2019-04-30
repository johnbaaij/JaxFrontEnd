import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { MainScreenComponent } from './main-screen/main-screen.component';
import {HttpClientModule} from "@angular/common/http";
import {DataFetchService} from "../data/data-fetch.service";
import { BarComponent } from './bar/bar.component';
import { TextInputComponent } from './text-input/text-input.component';
import { BubbleComponent } from './bubble/bubble.component';
import { BubbleRightComponent } from './bubble-right/bubble-right.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { BubbleLeftComponent } from './bubble-left/bubble-left.component';
import { BubbleWrapperComponent } from './bubble-wrapper/bubble-wrapper.component';


const appRoutes: Routes = [
  { path: '', component: MainScreenComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    MainScreenComponent,
    BarComponent,
    TextInputComponent,
    BubbleComponent,
    BubbleRightComponent,
    BubbleLeftComponent,
    BubbleWrapperComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(
      appRoutes,
      {enableTracing: true} // <-- debugging purposes only
    ),
    ServiceWorkerModule.register('ngsw-worker.js', {enabled: environment.production}),
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [DataFetchService],
  bootstrap: [AppComponent]
})
export class AppModule { }
