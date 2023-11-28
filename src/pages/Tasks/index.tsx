import { useContext } from "react";
import { Card } from "../../components/Card";
import { Header } from "../../components/Header";
import { TasksContainer, TasksContent } from './styles'
import { TasksContext } from "../../contexts/TasksContexts";

export function Tasks() {
  const { tasks } = useContext(TasksContext)

  return (
    <div>
      <Header />
      <TasksContainer>
        <TasksContent>
          {tasks.length === 0 ? (
            <div className='empty'>Nenhuma tarefa cadastrada.</div>
          ) : (
            <div>
              {tasks.map((task) => {
                return (
                  <Card
                    key={task.id}
                    id={task.id}
                    title={task.title}
                    description={task.description}
                    responsible={task.responsible}
                  />
                )
              })}
            </div>
          )}
        </TasksContent>
      </TasksContainer>
    </div>
  )
}