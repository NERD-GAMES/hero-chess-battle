import { IconButton } from '@mui/material'
import { ReactNode } from 'react'

type IProps = {
  title: string
  actionsRight: ReactNode
}

export const Title = ({ title, actionsRight }: IProps) => {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}
    >
      <h3>{title}</h3>
      <div>{actionsRight}</div>
    </div>
  )
}
