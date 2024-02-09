import TaskShow from "./TaskShow";
import { useContext } from "react";
import TasksContext from "./context/task";

export default function TaskList() {
  const { tasks } = useContext(TasksContext);

  return (
    <div className="max-w-full flex flex-row flex-wrap gap-3 m-5 ml-40 mr-40 justify-center content-center ">
      {tasks.map((task) => {
        return <TaskShow task={task} />;
      })}
    </div>
  );
}
