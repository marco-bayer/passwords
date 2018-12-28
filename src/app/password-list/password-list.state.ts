import { LoadPasswords } from './password-list.action';
import { State, Action, StateContext, Selector } from '@ngxs/store';
import { PasswordEntity } from './../model/password-entity.model';

export class PasswordListStateModel {
  list: PasswordEntity[];
}

@State<PasswordListStateModel>({
  name: 'passwords',
  defaults: {
    list: [
      {
        id: 1,
        website: 'www.ebay.com',
        username: 'spock_e',
        password: 'sup3rs3cr3t!'
      },
      {
        id: 2,
        website: 'www.amazon.de',
        username: 'marco-bayer@gmx.de',
        password: 'n0ts0s3cr3t?'
      }
    ]
  }
})
export class PasswordListState {
  @Selector()
  static passwords(state: PasswordListStateModel) {
    return state.list;
  }

  @Action(LoadPasswords)
  public loadPasswords(ctx: StateContext<PasswordListStateModel>) {
    // TODO: Load data here
  }
}
