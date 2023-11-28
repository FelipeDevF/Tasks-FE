import { ReactNode, createContext, useEffect, useState } from 'react'
import { api } from '../lib/axios'

interface Task {
  created_at: string
  description: string
  id: string
  responsible: string
  tags: string
  title: string
  userId: string
}

interface CreateTaskInput {
  title: string
  description: string
  tags: string
  responsible: string
}

interface TaskContextType {
  tasks: Task[]
  createTask: (data: CreateTaskInput) => Promise<void>
  deleteTask: (id: string) => Promise<void>
}

interface TasksProviderProps {
  children: ReactNode
}

let token = localStorage.getItem('TOKEN_TASKS') || ''
if(token) {
   token = JSON.parse(token)
}

export const TasksContext = createContext({} as TaskContextType)

export function TasksProvider({ children }: TasksProviderProps) {
  const [tasks, setTasks] = useState<Task[]>([])

  async function loadTasks() {
    const response = await api.get('/tasks', {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    })

    setTasks(response.data.task)
  }

  async function createTask(data: CreateTaskInput) {
    const { title, description, tags, responsible } = data
    const response = await api.post(
      '/tasks',
      {
        title,
        description,
        tags,
        responsible,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      }
    )

    setTasks(state => [...state,response.data.task])
  }

  async function deleteTask(id: string) {
    await api.delete('/task', {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
      data: {
        id: id,
      },
    })

    const newListTasks = tasks.filter(task => task.id !== id)

    setTasks(newListTasks)    
  }

  useEffect(() => {
    loadTasks()
  }, [])
  return (
    <TasksContext.Provider value={{ tasks, createTask, deleteTask }}>
      {children}
    </TasksContext.Provider>
  )
}