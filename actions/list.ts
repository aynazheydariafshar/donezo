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
    const response = await axiosServices.get(`/api/list/board/${id}`);
    return response.data;
  } catch (error) {
    toast({
      description: "Failed to get lists",
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
    const response = await axiosServices.post(`/api/list`, {
      title,
      description,
      order,
      boardId,
    });
    return response.data;
  } catch (error) {
    toast({
      description: "Failed to create a new list",
      variant: "destructive",
    });
    throw new Error("Failed");
  }
};

// Method PATCH
export async function updateList(id: string, newPost: Partial<CreateListType>) {
  try {
    const response = await axiosServices.patch(`/api/list/${id}`, newPost);
    return response.data;
  } catch (error) {
    toast({
      description: "Failed to edit a list",
      variant: "destructive",
    });
  }
}

// Method PUT
export async function updateOrderList(id: string, newPost: CreateListType[]) {
  try {
    const response = await axiosServices.put(`/api/list/${id}`, newPost);
    return response.data;
  } catch (error) {
    toast({
      description: "Failed to edit a list",
      variant: "destructive",
    });
  }
}

// METHOD DELETE
export async function deleteList(id: string) {
  try {
    const response = await axiosServices.delete(`/api/list/${id}`);
    return response.data;
  } catch (error) {
    toast({
      description: "Failed to delete a list",
      variant: "destructive",
    });
  }
}
