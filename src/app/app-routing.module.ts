import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { environment } from './../environments/environment';

const appRoutes: Routes = [
  { path: '', redirectTo: '/passwords', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(appRoutes, { enableTracing: !environment.production })
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
