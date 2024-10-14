import { BoardCardType } from "./board-card-props";

export type dataBoardType = {
  id: string;
  title: string;
  orgId: string;
  imageId: string;
  imageThumbUrl: string;
  imageFullUrl: string;
  imageUserName: string;
  imageLinkHtml: string;
  list: BoardCardType[];
};
