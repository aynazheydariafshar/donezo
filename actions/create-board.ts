import { z } from "zod";

const CreateBoard = z.object({
  title: z.string(),
});

export async function createBoard(formData: FormData) {
  const { title } = CreateBoard.parse({
    title: formData.get("title"),
  });
  const response = await fetch("http://localhost:3000/api/boards", {
    method: "POST",
    body: JSON.stringify({ title }),
  });
  return response.json();
}

export async function getBoards() {
  const response = await fetch("http://localhost:3000/api/boards");
  const posts = await response.json();
  return posts;
}
