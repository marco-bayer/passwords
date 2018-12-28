import { PasswordEntity } from 'src/app/model/password-entity.model';
import { Component, OnInit } from '@angular/core';
import { Store, Select } from '@ngxs/store';
import { LoadPasswords } from '../passwords.actions';
import { PasswordsState } from '../passwords.state';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-password-list',
  templateUrl: './password-list.component.html',
  styleUrls: ['./password-list.component.css']
})
export class PasswordListComponent implements OnInit {

  @Select(PasswordsState.passwords) passwords$: Observable<PasswordEntity[]>;

  constructor(private store: Store) {}

  ngOnInit() {
    this.store.dispatch(new LoadPasswords());
  }
}
