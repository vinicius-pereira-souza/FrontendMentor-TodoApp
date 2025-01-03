"use client";

import { use, Suspense } from "react";
import TaskItem from "@/app/ui/task-item";

type Task = { id: string; description: string; status: boolean };
type Tasks = Array<Task>;

export default function TasksList({
  taskPromise,
}: {
  taskPromise: Promise<Tasks>;
}) {
  const tasks: Tasks = use(taskPromise);

  return (
    <ul className="rounded-md lg:rounded-none">
      <Suspense fallback={<p>Loading...</p>}>
        {tasks.map((task: Task) => (
          <TaskItem
            key={task.id}
            text={task.description}
            status={task.status}
          />
        ))}
      </Suspense>
    </ul>
  );
}
