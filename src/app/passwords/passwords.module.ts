import { MatListModule } from '@angular/material/list';
import { PasswordDetailComponent } from './password-detail/password-detail.component';
import { PasswordListComponent } from './password-list/password-list.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PasswordsRoutingModule } from './passwords-routing.module';

@NgModule({
  declarations: [
    PasswordListComponent,
    PasswordDetailComponent
  ],
  imports: [
    CommonModule,
    PasswordsRoutingModule,
    MatListModule
  ]
})
export class PasswordsModule { }
