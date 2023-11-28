import {useContext} from 'react'
import { X } from 'phosphor-react'
import { Overlay, Content, CloseButton } from './styles'
import * as Dialog from '@radix-ui/react-dialog'
import * as z from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { TasksContext } from '../../contexts/TasksContexts'

const newTaskFormSchema = z.object({
  title: z.string(),
  description: z.string(),
  tags: z.string(),
  responsible: z.string(),
})

type NewTaskFormInputs = z.infer<typeof newTaskFormSchema>

interface NewTaskModalProps {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>
}

export function NewTaskModal({ setOpen }: NewTaskModalProps) {
  const { createTask } = useContext(TasksContext)

  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
    reset,
  } = useForm<NewTaskFormInputs>({
    resolver: zodResolver(newTaskFormSchema),
  })

  async function handleCreateNewTask(data: NewTaskFormInputs) {
    const { title, description, tags, responsible } = data

    await createTask({
      title,
      description,
      tags,
      responsible,
    })

    reset()
    setOpen(false)
  }

  return (
    <Dialog.Portal>
      <Overlay />
      <Content>
        <Dialog.Title>Nova Tarefa</Dialog.Title>

        <CloseButton>
          <X fontSize={24} />
        </CloseButton>

        <form onSubmit={handleSubmit(handleCreateNewTask)}>
          <input
            type='text'
            placeholder='Título'
            required
            {...register('title')}
          />
          <input
            type='text'
            placeholder='Descrição'
            required
            {...register('description')}
          />
          <input type='text' placeholder='Tag' required {...register('tags')} />
          <input
            type='text'
            placeholder='Responsável'
            required
            {...register('responsible')}
          />

          <button type='submit' disabled={isSubmitting}>
            Cadastrar
          </button>
        </form>
      </Content>
    </Dialog.Portal>
  )
}
