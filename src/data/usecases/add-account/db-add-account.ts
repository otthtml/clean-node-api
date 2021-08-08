import { AccountModel } from '../../../domain/models/account'
import { AddAccount, AddAccountModel } from '../../../domain/usecases/add-account'
import { Encrypter } from '../../protocols/encrypter'

export class DBAddAccount implements AddAccount {
  private readonly encrypter: Encrypter
  constructor (encrypter: Encrypter) {
    this.encrypter = encrypter
  }

  async add (account: AddAccountModel): Promise<AccountModel> {
    const accountModel: AccountModel = {
      id: '1',
      name: 'aaa',
      email: 'aaa',
      password: 'aaa'
    }
    await this.encrypter.encrypt(account.password)
    return await new Promise(resolve => resolve(accountModel))
  }
}
