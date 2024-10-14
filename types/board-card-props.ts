export type BoardCardType = {
  id: string;
  title: string;
  description?: string | null;
  listId: string;
  boardId: string;
  order: number;
};
