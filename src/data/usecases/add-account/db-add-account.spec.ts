import { Encrypter } from '../../protocols/encrypter'
import { DBAddAccount } from './db-add-account'

interface SutTypes {
  sut: DBAddAccount
  encrypterStub: Encrypter
}

const makeSut = (): SutTypes => {
  class EncrypterStub {
    async encrypt (value: string): Promise<string> {
      return await new Promise(resolve => resolve('hashed_value'))
    }
  }
  const encrypterStub = new EncrypterStub()
  const sut = new DBAddAccount(encrypterStub)

  return {
    sut,
    encrypterStub
  }
}

describe('DBAddAccount Usecase', () => {
  test('Should call encrypter with correct password', async () => {
    const { sut, encrypterStub } = makeSut()
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
