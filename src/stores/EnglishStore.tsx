import { observable } from 'mobx'

export class EnglishStore {
  @observable todos = ['buy milk', 'buy cheese']
  @observable filter = ['buy milk', 'buy cheese']
}

export default new EnglishStore
