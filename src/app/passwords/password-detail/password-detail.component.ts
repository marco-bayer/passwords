import { LoadPassword } from './../passwords.actions';
import { Store, Select } from '@ngxs/store';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { PasswordEntity } from 'src/app/model/password-entity.model';
import { PasswordsState } from '../passwords.state';

@Component({
  selector: 'app-password-detail',
  templateUrl: './password-detail.component.html',
  styleUrls: ['./password-detail.component.css']
})
export class PasswordDetailComponent implements OnInit {

  @Select(PasswordsState.selectedPassword)
  passwordEntity$: Observable<PasswordEntity>;

  constructor(private route: ActivatedRoute,
    private router: Router, private store: Store) { }

  ngOnInit() {
    const id = parseInt(this.route.snapshot.paramMap.get('id'), 10);
    this.store.dispatch(new LoadPassword(id));
  }

}
