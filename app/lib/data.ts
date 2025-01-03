// salvar dado -> saveNewTask
// buscar todos os dados -> fetchAllTasks
// marcar/descarmar como concluido -> updateTaskCompletionStatus
// excluir um/mutiplos dados atraves dos ids salvos em um array -> deleteTaskByIds

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
