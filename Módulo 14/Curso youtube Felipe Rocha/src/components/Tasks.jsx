function Tasks(props) {
    return (
        <ul className="space-y-4">
            {props.tasks.map((task) => {
                <li key={task.id} className="bg-slate-400 text-white p2 rounded-md">
                    {task.description}
                </li>
            })}
        </ul>
    );
}

export default Tasks;
