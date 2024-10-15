import { toast } from "@/components/hooks/use-toast";
import axiosServices from "@/utils/axios";
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
  id: z.string(),
  description: z.string().optional(),
  order: z.number(),
});

export type CreateListType = z.infer<typeof CreateList>;

// METHOD GET
export async function getListId(id: string) {
  try {
    const response = await axiosServices.get(`/api/boards/list/${id}`);
    return response.data;
  } catch (error) {
    toast({
      description: "Failed to get boards",
      variant: "destructive",
    });
  }
}

// METHOD POST
export const postList = async (newPost: FormData): Promise<CreateListType> => {
  const title = newPost.get("title");
  const description = newPost.get("description");
  const order = newPost.get("order");
  const boardId = newPost.get("boardId");
  try {
    const response = await axiosServices.post(`/api/boards/list`, {
      title,
      description,
      order,
      boardId,
    });
    return response.data;
  } catch (error) {
    toast({
      description: "Failed to create a new board",
      variant: "destructive",
    });
    throw new Error("Failed");
  }
};

// Method PATCH
export async function updateList(id: string, newPost: Partial<CreateListType>) {
  try {
    const response = await axiosServices.patch(
      `/api/boards/list/${id}`,
      newPost
    );
    return response.data;
  } catch (error) {
    toast({
      description: "Failed to edit a board",
      variant: "destructive",
    });
  }
}

// METHOD DELETE
export async function deleteList(id: string) {
  try {
    const response = await axiosServices.delete(`/api/boards/list/${id}`);
    return response.data;
  } catch (error) {
    toast({
      description: "Failed to delete a board",
      variant: "destructive",
    });
  }
}
