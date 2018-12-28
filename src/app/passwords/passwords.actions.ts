export class LoadPasswords {
  static readonly type = '[Password List] Load Passwords';
}

export class LoadPassword {
  static readonly type = '[Password Detail] Load Password';
  constructor(public id: number) { }
}
