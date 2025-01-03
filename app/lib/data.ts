
type Task = {
  description: FormDataEntryValue | null;
  status: boolean;
};

export async function saveNewTask(task: Task) {
  await fetch("http://localhost:3001/tasks", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(task),
  });
}

export async function fetchAllTasks() {
  try {
    const data = await fetch("http://localhost:3001/tasks");
    return data.json();
  } catch (error) {
    console.log(error);
    return;
  }
}

export async function updateTaskCompletionStatus(task: {
  id: string;
  status: boolean;
}) {
  try {
    await fetch(`http://localhost:3001/tasks/${task.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ status: !task.status }),
    });
    return;
  } catch (error) {
    console.log(error);
    return;
  }
}

export function deleteTaskByIds(ids: string[]) {
  try {
    ids.forEach(async (id: string) => {
      await fetch(`http://localhost:3001/tasks/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });
    });
    return;
  } catch (error) {
    console.log(error);
    return;
  }
}

