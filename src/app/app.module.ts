import { NgxsModule } from '@ngxs/store';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PasswordListComponent } from './password-list/password-list.component';

@NgModule({
  declarations: [
    AppComponent,
    PasswordListComponent
  ],
  imports: [
    BrowserModule,
    FlexLayoutModule,
    BrowserAnimationsModule,
    NgxsModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
