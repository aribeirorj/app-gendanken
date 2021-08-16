import * as React from 'react'
import TextField from '@material-ui/core/TextField'
import DialogContent from '@material-ui/core/DialogContent'
import { useForm } from 'react-hook-form'
import DialogActions from '@material-ui/core/DialogActions'
import Button from '@material-ui/core/Button'
import { ClientModel } from '../../../../../domain/models/client-model'

type Props = {
  formClientSubmit(data: ClientModel): void
}

export default function FormClient({ formClientSubmit }: Props) {
  const {
    register,
    formState: { errors },
    handleSubmit
  } = useForm()

  const onSubmit = (data: ClientModel) => {
    formClientSubmit(data)
  }

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="cliente"
            label="Cliente"
            fullWidth
            {...register('cliente', { required: true, maxLength: 20 })}
          />
          {errors.cliente?.type === 'required' && 'O Campo é obrigatório'}
        </DialogContent>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="estabelecimento"
            label="Estabelecimento"
            fullWidth
            {...register('estabelecimento', { required: true, maxLength: 20 })}
          />
          {errors.estabelecimento?.type === 'required' &&
            'O Campo é obrigatório'}
        </DialogContent>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="descricao"
            label="Descrição"
            fullWidth
            {...register('descricao', { required: true, maxLength: 20 })}
          />
          {errors.descricao?.type === 'required' && 'O Campo é obrigatório'}
        </DialogContent>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="valor"
            label="valor"
            type="number"
            fullWidth
            {...register('valor')}
          />
        </DialogContent>
        <DialogActions>
          <Button type="submit" color="primary">
            Enviar
          </Button>
        </DialogActions>
      </form>
    </div>
  )
}
