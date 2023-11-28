import {useState} from 'react'
import { CardContent, Title, Description, Responsible, Actions } from './styles'
import { X, Pencil } from 'phosphor-react'
import * as Dialog from '@radix-ui/react-dialog'
import { DeleteTaskModal } from '../DeleteTaskModal'

interface CardProps {
  id: string,
  title: string
  description: string
  responsible: string
}

export function Card({ 
  id,
  title,
  description,
  responsible
}: CardProps) {
  const [open, setOpen] = useState(false)
  return (
    <CardContent>
      <Title>{title}</Title>
      <Description>{description}</Description>
      <Responsible>{responsible}</Responsible>
      <Actions>
        <Pencil cursor={'pointer'} />

        <Dialog.Root open={open} onOpenChange={setOpen}>
          <Dialog.Trigger asChild>
            <X cursor={'pointer'} />
          </Dialog.Trigger>

          <DeleteTaskModal setOpen={setOpen} id={id} title={title}/>
        </Dialog.Root>
      </Actions>
    </CardContent>
  )
}
