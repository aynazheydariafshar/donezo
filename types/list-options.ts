import { BoardCardType } from "./board-card-props";

export interface ListOptionsType {
  data: BoardCardType;
  onAddCard: () => void;
}
