import { LoadPasswords, LoadPassword } from './passwords.actions';
import { State, Action, StateContext, Selector } from '@ngxs/store';
import { PasswordEntity } from '../model/password-entity.model';

export class PasswordStateModel {
  list: PasswordEntity[];
  selected: PasswordEntity;
}

@State<PasswordStateModel>({
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
    ],
    selected: null
  }
})
export class PasswordsState {
  @Selector()
  static passwords(state: PasswordStateModel) {
    return state.list;
  }

  @Selector()
  static selectedPassword(state: PasswordStateModel) {
    return state.selected;
  }

  @Action(LoadPasswords)
  public loadPasswords(ctx: StateContext<PasswordStateModel>) {
    // TODO: Load data here
  }

  @Action(LoadPassword)
  public loadPassword(ctx: StateContext<PasswordStateModel>, action: LoadPassword) {
    const selectedPassword = ctx.getState().list.find(p => p.id === action.id);
    ctx.patchState({
      selected: selectedPassword
    });
  }
}
