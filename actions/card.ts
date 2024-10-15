import { z } from "zod";

export const CreateCard = z.object({
  title: z
    .string({
      required_error: "title-is-required",
      invalid_type_error: "title-is-invalid-type",
    })
    .min(3, {
      message: "minimum-length-3-letters",
    }),
  listId: z.string(),
  boardId: z.string(),
  id: z.string(),
});

export type CreateCardType = z.infer<typeof CreateCard>;

// METHOD GET
export async function getCardId(id: string) {
  if (id) {
    const response = await fetch(`/api/boards/card/${id}`);
    const posts = await response.json();
    return posts;
  }
  return null;
}

// METHOD POST
export const postCard = async (newPost: FormData): Promise<CreateCardType> => {
  const title = newPost.get("title");
  const listId = newPost.get("listId");
  const boardId = newPost.get("boardId");

  const response = await fetch(`/api/boards/card`, {
    method: "POST",
    body: JSON.stringify({
      title,
      listId,
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
export async function updateCard(id: string, newPost: Partial<CreateCardType>) {
  const response = await fetch(`/api/boards/card/${id}`, {
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
export async function deleteCard(id: string) {
  const response = await fetch(`/api/boards/card`, {
    method: "DELETE",
    body: JSON.stringify({ id }),
  });
  return response.json();
}
