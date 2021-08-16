import React from 'react'
import { DataGrid, GridColDef, GridRowData } from '@material-ui/data-grid'
import * as Styled from './tableData-styles'
import { ClientModel } from '../../../domain/models/client-model'
import Dialog from '@material-ui/core/Dialog'

type Props = {
  rows: ClientModel[]
  columns: GridColDef[]
}

const TableData = ({ rows, columns }: Props) => {
  const [open, setOpen] = React.useState(false)
  const [details, setDetails] = React.useState<GridRowData>()

  const handleClickOpen = (data: GridRowData) => {
    setOpen(true)
    setDetails(data)
  }

  const handleClose = () => {
    setOpen(false)
  }

  return (
    <Styled.Wrapper>
      <Dialog open={open} onClose={handleClose} fullWidth>
        <Styled.DialogResume>
          <Styled.Title>Detalhes</Styled.Title>
          <Styled.Detail>Id : {details?.id}</Styled.Detail>
          <Styled.Detail>Cliente: {details?.cliente}</Styled.Detail>
          <Styled.Detail>Descrição: {details?.descricao}</Styled.Detail>
          <Styled.Detail>Valor: {details?.valor}</Styled.Detail>
          <Styled.Detail>
            Estabelecimento: {details?.estabelecimento}
          </Styled.Detail>
        </Styled.DialogResume>
      </Dialog>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        disableSelectionOnClick
        onRowClick={(e) => handleClickOpen(e.row)}
      />
    </Styled.Wrapper>
  )
}

export default TableData
