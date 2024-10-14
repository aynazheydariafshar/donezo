import { BoardCardType } from "./board-card";

export interface ListOptionsType {
  data: BoardCardType;
  onAddCard: () => void;
}
