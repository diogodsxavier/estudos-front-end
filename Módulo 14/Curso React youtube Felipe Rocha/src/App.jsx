import AddTask from "./components/AddTask"
import Task from "./components/Tasks"
import { useState } from "react";

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: "Estudar programação",
      description: "Estudar programação para ser Fullstack",
      isCompleted: false,
    },
    {
      id: 2,
      title: "Estudar Inglês",
      description: "Estudar inglês para ser Bilingue",
      isCompleted: false,
    },
    {
      id: 3,
      title: "Ler O poder do hábito",
      description: "Finalizar esse livro em 1 mês",
      isCompleted: false,
    },
  ]);

  // Task
  function onTaskClick(taskId) {
    const newTask = tasks.map((task) => {
      if (task.id === taskId) return { ...task, isCompleted: !task.isCompleted }
      return task;
    });

    setTasks(newTask);
  }

  // Task
  function onDeleteTaskClick(taskId) {
    const newTask = tasks.filter((task) => task.id !== taskId);
    setTasks(newTask);
  }

  // AddTask
  function onAddTaskSubmit(title, description) {
    const newTask = {
      id: tasks.length + 1,
      title,
      description,
      isCompleted: false,
    };
    setTasks([...tasks, newTask]);
  }

  return (
    <div className="w-screen h-screen bg-slate-500 flex justify-center p-6">

      <div className="w-[500px] space-y-4">
        <h1 className="text-3xl text-slate-100 font-bold text-center">
          Gerenciador de tarefas
        </h1>

        <AddTask onAddTaskSubmit={onAddTaskSubmit} />
        <Task tasks={tasks} onTaskClick={onTaskClick} onDeleteTaskClick={onDeleteTaskClick} />
      </div>
    </div>
  )
}

export default App
