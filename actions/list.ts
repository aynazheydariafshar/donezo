import { BoardCardType } from "@/types/board-card-props";
import { z } from "zod";

export const CreateList = z.object({
  title: z
    .string({
      required_error: "title-is-required",
      invalid_type_error: "title-is-invalid-type",
    })
    .min(3, {
      message: "minimum-length-3-letters",
    }),
  boardId: z.string(),
});

// METHOD GET
export async function getListId(id: string) {
  if (id) {
    const response = await fetch(`/api/boards/list/${id}`);
    const posts = await response.json();
    return posts;
  }
  return null;
}

// METHOD POST
export const postList = async (newPost: FormData): Promise<BoardCardType> => {
  const title = newPost.get("title");
  const description = newPost.get("description");
  const listId = newPost.get("listId");
  const order = newPost.get("order");
  const boardId = newPost.get("boardId");

  const response = await fetch(`/api/boards/list`, {
    method: "POST",
    body: JSON.stringify({
      title,
      description,
      listId,
      order,
      boardId,
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  });

  if (!response.ok) {
    throw new Error("Failed to create a new board");
  }

  return response.json();
};

// Method PATCH
export async function updateList(id: string, newPost: Partial<BoardCardType>) {
  const response = await fetch(`/api/boards/list/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newPost),
  });
  if (!response.ok) {
    throw new Error("Failed to update board");
  }

  const data = await response.json();
  return data;
}

// METHOD DELETE
export async function deleteList(id: string) {
  const response = await fetch(`/api/boards/list`, {
    method: "DELETE",
    body: JSON.stringify({ id }),
  });
  return response.json();
}
