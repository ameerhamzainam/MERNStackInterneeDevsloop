import React from "react";
import { Task } from "../App";

interface TaskItemProps {
  task: Task;
  onToggleComplete: (id: number) => void;
}

const TaskItem: React.FC<TaskItemProps> = React.memo(({ task, onToggleComplete }) => {
  return (
    <div className="flex items-center justify-between p-2 border-b gap-2">
       <input
       className="size-6"
        type="checkbox"
        checked={task.completed}
        onChange={() => onToggleComplete(task.id)}
      />
      <div
        className={`flex-1 cursor-pointer text-2xl ${
          task.completed ? "line-through text-gray-400" : ""
        }`}
        onClick={() => onToggleComplete(task.id)}
      >
        {task.title}
      </div>
     
    </div>
  );
});

export default TaskItem;
