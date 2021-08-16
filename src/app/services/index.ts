import { api } from '../infra/http'
import { data, answer } from '../infra/db/db.json'
import { ClientModel } from '../domain/models/client-model'

export async function getService() {
  try {
    // return await api.get("")
    return data
  } catch (e) {
    throw new Error(e.message)
  }
}

export async function postService(param: ClientModel) {
  try {
    // return await api.post(param)
    alert(JSON.stringify(answer))
  } catch (e) {
    throw new Error(e.message)
  }
}
