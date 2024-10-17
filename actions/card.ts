import { toast } from "@/components/hooks/use-toast";
import axiosServices from "@/utils/axios";
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
  try {
    const response = await axiosServices.get(`/api/card/${id}`);
    return response.data;
  } catch (error) {
    toast({
      description: "Failed to get cards",
      variant: "destructive",
    });
  }
}

// METHOD GET ALL CARD IN BOARD
export async function getCardBoardId(boardId: string) {
  try {
    const response = await axiosServices.get(`/api/card/board/${boardId}`);
    return response.data;
  } catch (error) {
    toast({
      description: "Failed to get cards",
      variant: "destructive",
    });
  }
}

// METHOD POST
export const postCard = async (newPost: FormData): Promise<CreateCardType> => {
  const title = newPost.get("title");
  const listId = newPost.get("listId");
  const boardId = newPost.get("boardId");
  try {
    const response = await axiosServices.post(`/api/card`, {
      title,
      listId,
      boardId,
    });
    return response.data;
  } catch (error) {
    toast({
      description: "Failed to create a new card",
      variant: "destructive",
    });
    throw new Error("Failed");
  }
};

// Method PATCH
export async function updateCard(id: string, newPost: Partial<CreateCardType>) {
  try {
    const response = await axiosServices.patch(`/api/card/${id}`, newPost);
    return response.data;
  } catch (error) {
    toast({
      description: "Failed to edit a card",
      variant: "destructive",
    });
  }
}

// METHOD DELETE
export async function deleteCard(id: string) {
  try {
    const response = await axiosServices.delete(`/api/card/${id}`);
    return response.data;
  } catch (error) {
    toast({
      description: "Failed to delete a card",
      variant: "destructive",
    });
  }
}
