import { CreateListType } from "@/actions/list";

export interface ListOptionsType {
  data: CreateListType;
  onAddCard: () => void;
}
