import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PasswordListComponent } from './password-list/password-list.component';
import { PasswordDetailComponent } from './password-detail/password-detail.component';

const routes: Routes = [
  { path: 'passwords', component: PasswordListComponent },
  { path: 'password/:id', component: PasswordDetailComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PasswordsRoutingModule { }
