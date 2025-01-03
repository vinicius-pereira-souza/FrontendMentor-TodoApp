"use server";

import { saveNewTask } from "@/app/lib/data";
import { revalidatePath } from "next/cache";

export async function handleSaveTaskForm(formData: FormData) {
  const task = {
    description: formData.get("description"),
    status: false,
  };

  try {
    await saveNewTask(task);
    revalidatePath("/");
  } catch (error) {
    console.log(error);
  }
}
