import { z } from "zod";
import { CreateList } from "./list";

export const CreateBoard = z.object({
  title: z
    .string({
      required_error: "title-is-required",
      invalid_type_error: "title-is-invalid-type",
    })
    .min(3, {
      message: "minimum-length-3-letters",
    }),
  image: z.string({
    required_error: "image-is-required",
    invalid_type_error: "image-is-required",
  }),
  orgId: z.string(),
  imageUserName: z.string(),
  imageId: z.string(),
  imageThumbUrl: z.string({
    required_error: "image-is-required",
    invalid_type_error: "image-is-required",
  }),
  imageFullUrl: z.string(),
  imageLinkHtml: z.string(),
  id: z.string(),
});

export type CreateBoardType = z.infer<typeof CreateBoard>;

// METHOD POST
export const postBoards = async (
  newPost: FormData
): Promise<CreateBoardType> => {
  const title = newPost.get("title");
  const imageUserName = newPost.get("imageUserName");
  const imageId = newPost.get("imageId");
  const imageThumbUrl = newPost.get("imageThumbUrl");
  const imageFullUrl = newPost.get("imageFullUrl");
  const imageLinkHtml = newPost.get("imageLinkHtml");
  const orgId = newPost.get("orgId");
  const id = newPost.get("id");

  const response = await fetch(`/api/boards/`, {
    method: "POST",
    body: JSON.stringify({
      id,
      title,
      orgId,
      imageUserName,
      imageId,
      imageThumbUrl,
      imageFullUrl,
      imageLinkHtml,
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

// METHOD GET
export async function getBoards(orgId: string) {
  if (orgId) {
    const response = await fetch(`/api/boards/${orgId}`);
    const posts = await response.json();
    return posts;
  }
  return null;
}

// Method Detail Get
export async function getBoardId(id: string) {
  if (id) {
    const response = await fetch(`/api/boards/detail/${id}`);
    const posts = await response.json();
    return posts;
  }
  return null;
}

// Method PATCH
export async function updateBoard(
  boardId: string,
  newPost: Partial<CreateBoardType>
) {
  const response = await fetch(`/api/boards/detail/${boardId}`, {
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
export async function deleteBoards(id: string) {
  const response = await fetch(`/api/boards/`, {
    method: "DELETE",
    body: JSON.stringify({ id }),
  });
  return response.json();
}
