import { BoardCardType } from "@/types/board-card";
import { IdWrapper } from "@/types/id-wrapper";
import { getDirectoryPath } from "@/utils/get-directory-path";
import { parseJsonFile } from "@/utils/parse-json-file";
import { uuid4 } from "@/utils/uuid4";
import fs from "fs";
import { NextResponse } from "next/server";

const BOARDS_DIRECTORY = getDirectoryPath("list.json");

const POST = async (request: Request) => {
  const body: BoardCardType = await request.json();
  const list = await parseJsonFile<IdWrapper<BoardCardType>[]>(
    BOARDS_DIRECTORY
  );
  const newBoard = {
    ...body,
    id: uuid4(),
    boardId: body.boardId,
    title: body.title,
    description: body.description,
    listId: body.listId,
    order: body.order,
  };
  const modifiedBoards = [...list, newBoard];
  await fs.writeFileSync(BOARDS_DIRECTORY, JSON.stringify(modifiedBoards));
  return NextResponse.json(newBoard);
};

export { POST };
