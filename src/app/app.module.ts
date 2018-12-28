import { PasswordListState } from './password-list/password-list.state';
import { environment } from './../environments/environment';
import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin';
import { NgxsLoggerPluginModule } from '@ngxs/logger-plugin';
import { NgxsModule } from '@ngxs/store';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PasswordListComponent } from './password-list/password-list.component';
import {MatListModule} from '@angular/material/list';

@NgModule({
  declarations: [AppComponent, PasswordListComponent],
  imports: [
    BrowserModule,
    FlexLayoutModule,
    BrowserAnimationsModule,
    NgxsModule.forRoot([
      PasswordListState
    ], {
      developmentMode: !environment.production
    }),
    NgxsLoggerPluginModule.forRoot({
      disabled: environment.production
    }),
    NgxsReduxDevtoolsPluginModule.forRoot({
      disabled: environment.production
    }),
    MatListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
