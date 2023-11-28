
import { TasksContainer, TasksContent } from './styles'
import * as z from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { api } from '../../lib/axios'
import { Link } from 'react-router-dom'

const registerFormSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  password: z.string(),
})

type RegisterFormInputs = z.infer<typeof registerFormSchema>

export function Register() {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
    reset,
  } = useForm<RegisterFormInputs>({
    resolver: zodResolver(registerFormSchema),
  })

  async function handleRegister(data: RegisterFormInputs) {
    const { name, email, password } = data

    try {
      await api.post('/users', {
        name,
        email,
        password,
      })

      window.location.href = '/login'
    } catch (error) {
      console.error(error)
    }

    reset()
  }

  return (
    <div>
      <TasksContainer>
        <TasksContent>
          Cadastar Usuário
          <form onSubmit={handleSubmit(handleRegister)}>
            <input
              type='text'
              placeholder='Nome'
              required
              {...register('name')}
            />
            <input
              type='email'
              placeholder='E-mail'
              required
              {...register('email')}
            />
            <input
              type='password'
              placeholder='Senha'
              required
              {...register('password')}
            />
            <div className='login'>
              <Link to='/login'>Já tenho cadastro! Entrar</Link>
            </div>

            <button type='submit' disabled={isSubmitting}>
              Cadastrar
            </button>
          </form>
        </TasksContent>
      </TasksContainer>
    </div>
  )
}