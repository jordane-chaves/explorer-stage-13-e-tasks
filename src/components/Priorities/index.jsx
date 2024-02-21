import { Fire } from "@phosphor-icons/react";

import { Container, Header, Tasks } from './styles';
import { ShortTask } from "../ShortTask";
import { tasks } from "../../utils/tasks";

export function Priorities() {
  const priorityTasks = tasks.filter((task) => task.priority)

  return (
    <Container>
      <Header>
        <h1>
          <Fire />
          Prioridades
        </h1>

        <small>{priorityTasks.length}</small>
      </Header>

      <Tasks>
        {
          priorityTasks
            .map((task) => (
              <ShortTask key={task.id} title={task.title} />
            ))
        }
      </Tasks>
    </Container>
  )
}