import AddTask from "./components/AddTask"
import Task from "./components/Tasks"
import { useState } from "react";

function App() {
  const [tasks] = useState([
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
  return (
    <div className="w-screen h-screen bg-slate-500 flex justify-center p-6">

      <div className="w-[500px]">
        <h1 className="text-3xl text-slate-100 font-bold text-center">
          Hello world!
        </h1>

        <AddTask />
        <Task tasks={tasks} />
      </div>
    </div>
  )
}

export default App
