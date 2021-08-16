import { useCallback, useEffect, useState } from 'react'
import { DefaultLayout } from '../../layout/index'
import { Table } from './components'
import { loadData, saveClientData } from '../../../domain/usecases'
import * as Styled from './main-styles'
import { ClientModel } from '../../../domain/models/client-model'
import { Modal } from '../../components'
import { FormClient } from './components'

function HomePage() {
  const [dataSale, setDataSale] = useState<ClientModel>()

  const loadDataInitial = useCallback(async () => {
    const infoData = await loadData()
    infoData && setDataSale(infoData)
  }, [])

  const formSubmit = useCallback(async (params: ClientModel) => {
    await saveClientData(params)
  }, [])

  useEffect(() => {
    loadDataInitial()
  }, [loadDataInitial])

  return (
    <DefaultLayout>
      <Styled.Title>Listagem de dados</Styled.Title>
      <Modal label={'Novo Registro'}>
        <FormClient formClientSubmit={formSubmit} />
      </Modal>
      {dataSale ? <Table listData={dataSale} /> : 'Carregando...'}
    </DefaultLayout>
  )
}

export default HomePage
