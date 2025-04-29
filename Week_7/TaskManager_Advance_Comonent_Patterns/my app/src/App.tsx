import React from 'react'
import { useState } from 'react'
import AddTask from './components/AddTask' //Dumb Component
import TaskList from './components/TaskList' //Normal Component/ smart component
import FilterTask from './components/FilterTask' //Dumb Component
import WithLoader from './components/WithLoader' //Higher Order Component

export interface Task {
  id: number;
  title: string;
  completed: boolean;
}

const TaskListWithLoader = WithLoader<{
  task: Task[];
  onToggleComplete: (id: number) => void;
}>(TaskList);
//TaskListWithLoader a new enhanced component 

const App: React.FC = () => {

  const [task, setTask] = useState<Task[]>([]);
  const [filter, setFilter] = useState<"all" | "completed" | "active">("all");
  const [loading, setLoading] = useState<boolean>(false);

  const HandleAddTask = (title: string) => {
    setLoading(true);

    setTimeout(() => {

      const newTask: Task = {
        id: Date.now(),
        title,
        completed: false
      } //new Obj

      // setTask((prev) => [...prev, newTask]);
      setTask((prev) => {
        // console.log(prev);
        return ([...prev, newTask])
      })
      setLoading(false);
    }, 1000);

  }

  const HandleToggleComplete = (id: number) => {
    setTask((prev) =>
      prev.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  }

  const HandleFilterChange = (newfilter: "all" | "active" | "completed") => {
    setFilter(newfilter)
  }

  const filteredTasks = task.filter((task) => {
    if (filter === "active") return !task.completed;
    if (filter === "completed") return task.completed;
    return true;
  });

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-bold text-center mb-6">Task Manager</h1>
      <div className="max-w-md mx-auto bg-white rounded-lg shadow-md p-6">
        <AddTask onAdd={HandleAddTask} />
        <FilterTask currentFilter={filter} onFilterChange={HandleFilterChange} />
        <TaskListWithLoader
          task={filteredTasks}
          onToggleComplete={HandleToggleComplete}
          loading={loading}
        />
      </div>
    </div>
  )
}

export default App