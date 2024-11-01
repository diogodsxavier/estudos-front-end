import { useSearchParams } from "react-router-dom";

function TaskPage() {
    const [searchParams] = useSearchParams();
    const title = searchParams.get('title');
    const description = searchParams.get('description');
    return (
        <div className="w-screen h-screen bg-slate-500 p-6">

        <div className="w-[500px] space-y-4">
          <h1 className="text-3xl text-slate-100 font-bold text-center">
            Detalhes da tarefa
          </h1>

          <div className="bg-slate-400 rounded-md p-4">
                <h2 className="text-xl text-white font-bold">{title}</h2>
                <p className=" text-white">{description}</p>
          </div>
        </div>
      </div>
    )
}

export default TaskPage;