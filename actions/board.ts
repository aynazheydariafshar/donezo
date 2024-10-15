import { toast } from "@/components/hooks/use-toast";
import axiosServices from "@/utils/axios";
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
  try {
    const response = await axiosServices.post(`/api/boards/`, {
      id,
      title,
      orgId,
      imageUserName,
      imageId,
      imageThumbUrl,
      imageFullUrl,
      imageLinkHtml,
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

// METHOD GET
export async function getBoards(orgId: string) {
  try {
    const response = await axiosServices.get(`/api/boards/${orgId}`);
    return response.data;
  } catch (error) {
    toast({
      description: "Failed to get boards",
      variant: "destructive",
    });
  }
}

// Method Detail Get
export async function getBoardId(id: string) {
  try {
    const response = await axiosServices.get(`/api/boards/detail/${id}`);
    return response.data;
  } catch (error) {
    toast({
      description: "Failed to get boards",
      variant: "destructive",
    });
  }
}

// Method PATCH
export async function updateBoard(
  boardId: string,
  newPost: Partial<CreateBoardType>
) {
  try {
    const response = await axiosServices.patch(
      `/api/boards/detail/${boardId}`,
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
export async function deleteBoards(id: string) {
  try {
    const response = await axiosServices.delete(`/api/boards/detail/${id}`);
    return response.data;
  } catch (error) {
    toast({
      description: "Failed to delete a board",
      variant: "destructive",
    });
  }
}
