import { revalidatePath } from "next/cache";
import { z } from "zod";

const CreateBoard = z.object({
  title: z.string(),
});

export async function postBoards(formData: FormData) {
  const { title } = CreateBoard.parse({
    title: formData.get("title"),
  });
  const response = await fetch("http://localhost:3000/api/boards", {
    method: "POST",
    body: JSON.stringify({ title }),
  });
  // revalidatePath()
  return response.json();
}

export async function getBoards() {
  const response = await fetch("http://localhost:3000/api/boards");
  const posts = await response.json();
  return posts;
}

export async function deleteBoards(id: string) {
  const response = await fetch("http://localhost:3000/api/boards", {
    method: "DELETE",
    body: JSON.stringify({ id }),
  });
  // revalidatePath()
  return response.json();
}
