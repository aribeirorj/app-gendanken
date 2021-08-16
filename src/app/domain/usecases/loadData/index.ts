import { getService } from '../../../services'

async function loadData() {
  return await getService()
}

export default loadData
