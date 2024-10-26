import AddTask from "./components/AddTask"
import Task from "./components/Tasks"
import { useState } from "react";

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 0,
      title: "Estudar programação",
      description: "Estudar programação para ser Fullstack",
      isCompleted: false,
    },
    {
      id: 1,
      title: "Estudar Inglês",
      description: "Estudar inglês para ser Bilingue",
      isCompleted: false,
    },
    {
      id: 2,
      title: "Ler O poder do hábito",
      description: "Finalizar esse livro em 1 mês",
      isCompleted: false,
    }
  ]);

  function onTaskClick(taskId) {
    const newTask = tasks.map((task) => {
      if (task.id === taskId) return { ...task, isCompleted: !task.isCompleted }
      return task;
    });

    setTasks(newTask);
  }

  function onDeleteTaskClick(taskId) {
    const newTask = tasks.filter((task) => task.id !== taskId);
    setTasks(newTask);
  }

  return (
    <div className="w-screen h-screen bg-slate-500 flex justify-center p-6">

      <div className="w-[500px] space-y-4">
        <h1 className="text-3xl text-slate-100 font-bold text-center">
          Hello world!
        </h1>

        <AddTask />
        <Task tasks={tasks} onTaskClick={onTaskClick} onDeleteTaskClick={onDeleteTaskClick}/>
      </div>
    </div>
  )
}

export default App
