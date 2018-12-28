import { Component, OnInit } from '@angular/core';
import { Store, Select } from '@ngxs/store';
import { LoadPasswords } from './password-list.action';
import { PasswordListState } from './password-list.state';
import { Observable } from 'rxjs';
import { PasswordEntity } from '../model/password-entity.model';

@Component({
  selector: 'app-password-list',
  templateUrl: './password-list.component.html',
  styleUrls: ['./password-list.component.css']
})
export class PasswordListComponent implements OnInit {

  @Select(PasswordListState.passwords) passwords$: Observable<PasswordEntity[]>;

  constructor(private store: Store) { }

  ngOnInit() {
    this.store.dispatch(new LoadPasswords());
  }

}
