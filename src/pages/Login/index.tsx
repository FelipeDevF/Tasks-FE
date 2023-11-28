
import { TasksContainer, TasksContent } from './styles'
import * as z from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { api } from '../../lib/axios'
// import { useEffect } from 'react'
// import { useToken } from '../../Hooks/useToken'
import { Link } from 'react-router-dom'

const loginFormSchema = z.object({
  email: z.string(),
  password: z.string(),
})

type LoginFormInputs = z.infer<typeof loginFormSchema>

export function Login() {
  // const userIsLogged = useToken()

  // useEffect(() => {
  //   if (userIsLogged) window.location.href = '/'
  // }, [userIsLogged])

  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
    reset,
  } = useForm<LoginFormInputs>({
    resolver: zodResolver(loginFormSchema),
  })

  async function handleLogin(data: LoginFormInputs) {
    const { email, password } = data

    try {
      const response = await api.post('/sessions', {
        email,
        password,
      })

      const token = response.data.token

      if(!token)
        return false

      localStorage.setItem('TOKEN_TASKS', JSON.stringify(token))

      window.location.href = '/'

    } catch (error) {
      console.error(error)
    }

    reset()
  }

  return (
    <div>
      <TasksContainer>
        <TasksContent>
          LOGIN
          <form onSubmit={handleSubmit(handleLogin)}>
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
            <div className='register'>
              <Link to='/register'>Não tem cadastro? Clique aqui</Link>
            </div>
            <button type='submit' disabled={isSubmitting}>
              Entrar
            </button>
          </form>
        </TasksContent>
      </TasksContainer>
    </div>
  )
}