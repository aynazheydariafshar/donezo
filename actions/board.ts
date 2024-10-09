import { dataBoardType } from "@/types/data-board";
import { z } from "zod";

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
});

// METHOD POST
export const postBoards = async (newPost: FormData): Promise<dataBoardType> => {
  const title = newPost.get("title");
  const image = newPost.get("image");

  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/boards`,
    {
      method: "POST",
      body: JSON.stringify({ title, image }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    }
  );

  if (!response.ok) {
    throw new Error("Failed to create a new board");
  }

  return response.json();
};

// METHOD GET
export async function getBoards() {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/boards`
  );
  const posts = await response.json();
  return posts;
}

// METHOD DELETE
export async function deleteBoards(id: string) {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/boards`,
    {
      method: "DELETE",
      body: JSON.stringify({ id }),
    }
  );
  return response.json();
}
