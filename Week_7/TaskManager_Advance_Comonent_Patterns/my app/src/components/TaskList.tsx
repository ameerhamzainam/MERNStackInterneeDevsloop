import React from "react";
import TaskItem from "./TaskItem"
import { Task } from "../App";

interface TaskListProps {
  task: Task[];
  onToggleComplete: (id: number) => void;
}

const TaskList: React.FC<TaskListProps> = ({ task, onToggleComplete }) => {
  if (task.length === 0) {
    return <p className="text-center text-gray-500 mt-4">No tasks found!</p>;
  }

  return (
    <div className="mt-4">
      {task.map((task) => (
        <TaskItem key={task.id} task={task} onToggleComplete={onToggleComplete} />
      ))}
    </div>
  );
};

export default TaskList;
