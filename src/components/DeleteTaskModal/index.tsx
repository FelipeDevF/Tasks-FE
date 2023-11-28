import { useContext } from 'react'
import { X } from 'phosphor-react'
import { Overlay, Content, CloseButton, Actions, DialogTitle } from './styles'
import * as Dialog from '@radix-ui/react-dialog'
import { TasksContext } from '../../contexts/TasksContexts'

interface DeleteTaskModalProps {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>
  id: string
  title: string
}

export function DeleteTaskModal({ setOpen, id, title }: DeleteTaskModalProps) {
  const { deleteTask } = useContext(TasksContext)

  async function handleDeleteTask() {
    await deleteTask(id)
    setOpen(false)
  }

  return (
    <Dialog.Portal>
      <Overlay />
      <Content>
        <DialogTitle>Excluir Tarefa</DialogTitle>
        <CloseButton>
          <X fontSize={24} />
        </CloseButton>
        Tem certeza que deseja excluir a tarefa <strong>{title}</strong>?
        <Actions>
          <button
            className='cancel'
            type='button'
            onClick={() => setOpen(false)}
          >
            Cancelar
          </button>
          <button type='submit' onClick={handleDeleteTask}>
            Excluir
          </button>
        </Actions>
      </Content>
    </Dialog.Portal>
  )
}
