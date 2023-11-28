import {useState} from 'react'
import { NewTaskModal } from '../NewTaskModal'
import {
  HeaderContainer,
  HeaderContent,
  NewTaskButton,
  OutButton,
} from './styles'
import * as Dialog from '@radix-ui/react-dialog'
import { SignOut } from 'phosphor-react'

export function Header() {
  const [open, setOpen] = useState(false)

  const handleLogOut = () => {
    localStorage.removeItem('TOKEN_TASKS')
    window.location.href = `/login`
  }

  return (
    <HeaderContainer>
      <HeaderContent>
        Tarefas
        <div className='actions'>
          <Dialog.Root open={open} onOpenChange={setOpen}>
            <Dialog.Trigger asChild>
              <NewTaskButton>Nova Tarefa</NewTaskButton>
            </Dialog.Trigger>

            <NewTaskModal setOpen={setOpen} />
          </Dialog.Root>
          <OutButton onClick={handleLogOut}>
            <SignOut />
          </OutButton>
        </div>
      </HeaderContent>
    </HeaderContainer>
  )
}
