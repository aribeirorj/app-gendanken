import React from 'react'
import Button from '@material-ui/core/Button'
import Dialog from '@material-ui/core/Dialog'

import DialogTitle from '@material-ui/core/DialogTitle'

type Props = {
  label: string
  children: React.ReactNode
}

export default function FormDialog({ label, children }: Props) {
  const [open, setOpen] = React.useState(false)

  const handleClickOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  return (
    <div>
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        {label}
      </Button>
      <Dialog open={open} onClose={handleClose} fullWidth>
        <DialogTitle id="form-dialog-title">{label}</DialogTitle>
        {children}
      </Dialog>
    </div>
  )
}
