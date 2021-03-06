import { MongoHelper as sut } from './mongo-helper'

describe('Mongo Helper', () => {
  beforeAll(async () => {
    await sut.connect(process.env.MONGO_URL)
  })

  afterAll(async () => {
    await sut.disconnect()
  })

  test('Should reconnect if mongodb is down', async () => {
    let accountColllection = await sut.getCollection('accounts')
    expect(accountColllection).toBeTruthy()
    await sut.disconnect()
    accountColllection = await sut.getCollection('accounts')
    expect(accountColllection).toBeTruthy()
  })
})
