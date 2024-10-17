import { IdWrapper } from "@/types/id-wrapper";
import { getDirectoryPath } from "@/utils/get-directory-path";
import { parseJsonFile } from "@/utils/parse-json-file";
import { NextResponse } from "next/server";
import fs from "fs";
import { CreateBoardType } from "@/actions/board";

const BOARDS_DIRECTORY = getDirectoryPath("board.json");

type Params = {
  id: string;
};

const GET = async (request: Request, context: { params: Params }) => {
  const { id } = context.params;
  if (!id) return NextResponse.json({ error: "Not found" }, { status: 404 });
  const boards = await parseJsonFile<IdWrapper<CreateBoardType>[]>(
    BOARDS_DIRECTORY
  );
  const board = boards.find((board) => id === board.id);
  if (board) return NextResponse.json(board);
  return NextResponse.json({ error: "Not found" }, { status: 404 });
};

const PATCH = async (request: Request, context: { params: Params }) => {
  const body = await request.json();
  const { id } = context.params;

  if (!id) {
    return NextResponse.json(
      { error: "Board ID not provided" },
      { status: 400 }
    );
  }

  const boards = await parseJsonFile<IdWrapper<CreateBoardType>[]>(
    BOARDS_DIRECTORY
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

  await fs.writeFileSync(BOARDS_DIRECTORY, JSON.stringify(updatedBoards));
  return NextResponse.json(updatedBoard);
};

const DELETE = async (request: Request, context: { params: Params }) => {
  const { id } = context.params;
  if (!id) return NextResponse.json({ error: "Not found" }, { status: 404 });

  const boards = await parseJsonFile<IdWrapper<CreateBoardType>[]>(
    BOARDS_DIRECTORY
  );
  const filteredBoards = boards.filter((board) => board.id !== id);

  if (filteredBoards.length === boards.length) {
    return NextResponse.json({ error: "Board not found" }, { status: 404 });
  }

  await fs.writeFileSync(BOARDS_DIRECTORY, JSON.stringify(filteredBoards));
  return NextResponse.json({ message: "Board deleted successfully", id });
};

export { GET, PATCH, DELETE };
