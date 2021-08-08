import { DBAddAccount } from './db-add-account'

class EncrypterStub {
  async encrypt (value: string): Promise<string> {
    return await new Promise(resolve => resolve('hashed_value'))
  }
}

describe('DBAddAccount Usecase', () => {
  test('Should call encrypter with correct password', async () => {
    const encrypterStub = new EncrypterStub()
    const sut = new DBAddAccount(encrypterStub)
    const encryptSpy = jest.spyOn(encrypterStub, 'encrypt')
    const accountData = {
      name: 'valid_name',
      email: 'valid_email',
      password: 'valid_password'
    }
    await sut.add(accountData)
    expect(encryptSpy).toHaveBeenCalledWith('valid_password')
  })
})
