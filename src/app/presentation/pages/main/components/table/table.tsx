import * as React from 'react'
import * as Styled from './table-styles'
import { TableData } from '../../../../components'
import { SaleModel } from '../../../../../domain/models/sale-model'

type Props = {
  listData: SaleModel[]
}

const columns = [
  { field: 'id', headerName: 'ID', width: 90 },
  {
    field: 'cliente',
    headerName: 'Cliente',
    width: 150
  },
  {
    field: 'estabelecimento',
    headerName: 'Estabelecimento',
    width: 150,
    editable: true
  },
  {
    field: 'valor',
    headerName: 'Valor',
    type: 'number',
    width: 110,
    editable: true
  }
]

export default function Table({ listData }: Props) {
  return (
    <Styled.Wrapper>
      <TableData rows={listData} columns={columns} />
    </Styled.Wrapper>
  )
}
