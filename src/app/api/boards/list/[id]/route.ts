import { BoardCardType } from "@/types/board-card";
import { IdWrapper } from "@/types/id-wrapper";
import { getDirectoryPath } from "@/utils/get-directory-path";
import { parseJsonFile } from "@/utils/parse-json-file";
import { NextResponse } from "next/server";

const LIST_DIRECTORY = getDirectoryPath("list.json");

type Params = {
  id: string;
};

const GET = async (request: Request, context: { params: Params }) => {
  const { id } = context.params;
  if (!id) return NextResponse.json({ error: "Not found" }, { status: 404 });
  const list = await parseJsonFile<IdWrapper<BoardCardType>[]>(LIST_DIRECTORY);
  const board = list.filter((board) => id === board.boardId);
  if (board) return NextResponse.json(board);
  return NextResponse.json({ error: "Not found" }, { status: 404 });
};

export { GET };
