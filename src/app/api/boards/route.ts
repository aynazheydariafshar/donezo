import { dataBoardType } from "@/types/data-board";
import { IdWrapper } from "@/types/id-wrapper";
import { getDirectoryPath } from "@/utils/get-directory-path";
import { parseJsonFile } from "@/utils/parse-json-file";
import { uuid4 } from "@/utils/uuid4";
import fs from "fs";
import { NextResponse } from "next/server";

const BOARDS_DIRECTORY = getDirectoryPath("board.json");

const GET = async () => {
  const boards = await parseJsonFile<IdWrapper<dataBoardType>[]>(
    BOARDS_DIRECTORY
  );
  return NextResponse.json(boards);
};

const POST = async (request: Request) => {
  const body: dataBoardType = await request.json();
  if (!body.title)
    return NextResponse.json({ error: "bad request" }, { status: 403 });
  const boards = await parseJsonFile<IdWrapper<dataBoardType>[]>(
    BOARDS_DIRECTORY
  );
  const newBoard = {
    ...body,
    id: uuid4(),
    title: body.title,
  };
  const modifiedBoards = [...boards, newBoard];
  await fs.writeFileSync(BOARDS_DIRECTORY, JSON.stringify(modifiedBoards));
  return NextResponse.json(newBoard);
};

const DELETE = async (request: Request) => {
  const { id } = await request.json();
  if (!id)
    return NextResponse.json({ error: "ID is required" }, { status: 400 });

  const boards = await parseJsonFile<IdWrapper<dataBoardType>[]>(
    BOARDS_DIRECTORY
  );
  const filteredBoards = boards.filter((board) => board.id !== id);

  if (filteredBoards.length === boards.length) {
    return NextResponse.json({ error: "Board not found" }, { status: 404 });
  }

  await fs.writeFileSync(BOARDS_DIRECTORY, JSON.stringify(filteredBoards));
  return NextResponse.json({ message: "Board deleted successfully", id });
};

export { GET, POST, DELETE };
