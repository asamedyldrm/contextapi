'use client'

import { useEffect, useContext } from "react";
import TasksContext from "./context/task";
import {montserrat} from "./ui/fonts.ts"
import TaskCreate from "./TaskCreate"
import TaskList from "./TaskList"


export default function Home() {

  const {fetchTasks} = useContext(TasksContext)
  
  useEffect(() => {
    fetchTasks();
  }, [])
  
 
  return (
    <div className={`${montserrat.className} text-white`}>
      <TaskCreate/>
      <hr className="my-4 border-t-1 border-gray-600" />
      <h1 className="text-center font-bold">Görevler</h1>
      <TaskList/>
    </div>
  );
}
