import { postService } from '../../../services'
import { SaleModel } from '../../models/sale-model'

async function saveClientData(data: SaleModel) {
  return await postService(data)
}

export default saveClientData
