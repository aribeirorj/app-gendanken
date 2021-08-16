import { postService } from '../../../services'
import { ClientModel } from '../../models/client-model'

async function saveClientData(data: ClientModel) {
  return await postService(data)
}

export default saveClientData
