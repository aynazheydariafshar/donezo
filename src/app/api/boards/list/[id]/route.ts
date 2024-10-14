import { BoardCardType } from "@/types/board-card-props";
import { IdWrapper } from "@/types/id-wrapper";
import { getDirectoryPath } from "@/utils/get-directory-path";
import { parseJsonFile } from "@/utils/parse-json-file";
import { NextResponse } from "next/server";
import fs from "fs";

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

const PATCH = async (request: Request, context: { params: { id: string } }) => {
  const body = await request.json();
  const { id } = context.params;

  if (!id) {
    return NextResponse.json(
      { error: "Board ID not provided" },
      { status: 400 }
    );
  }

  const boards = await parseJsonFile<IdWrapper<BoardCardType>[]>(
    LIST_DIRECTORY
  );
  const boardToUpdate = boards.find((board: any) => board.id === id);

  if (!boardToUpdate) {
    return NextResponse.json({ error: "Board not found" }, { status: 404 });
  }

  const updatedBoard = {
    ...boardToUpdate,
    ...body,
  };

  const updatedBoards = boards.map((board: any) =>
    board.id === id ? updatedBoard : board
  );

  await fs.writeFileSync(LIST_DIRECTORY, JSON.stringify(updatedBoards));
  return NextResponse.json(updatedBoard);
};

export { GET, PATCH };
