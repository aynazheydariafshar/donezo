import { BoardCardType } from "@/types/board-card";
import { IdWrapper } from "@/types/id-wrapper";
import { getDirectoryPath } from "@/utils/get-directory-path";
import { parseJsonFile } from "@/utils/parse-json-file";
import { uuid4 } from "@/utils/uuid4";
import fs from "fs";
import { NextResponse } from "next/server";

const LIST_DIRECTORY = getDirectoryPath("list.json");

const POST = async (request: Request) => {
  const body: BoardCardType = await request.json();
  const list = await parseJsonFile<IdWrapper<BoardCardType>[]>(LIST_DIRECTORY);
  const newList = {
    ...body,
    id: uuid4(),
    boardId: body.boardId,
    title: body.title,
    description: body.description,
    listId: body.listId,
    order: body.order,
  };
  const modifiedLists = [...list, newList];
  await fs.writeFileSync(LIST_DIRECTORY, JSON.stringify(modifiedLists));
  return NextResponse.json(newList);
};

const DELETE = async (request: Request) => {
  const { id } = await request.json();
  if (!id)
    return NextResponse.json({ error: "ID is required" }, { status: 400 });

  const lists = await parseJsonFile<IdWrapper<BoardCardType>[]>(LIST_DIRECTORY);
  const filteredLists = lists.filter((list) => list.id !== id);

  if (filteredLists.length === lists.length) {
    return NextResponse.json({ error: "Board not found" }, { status: 404 });
  }

  await fs.writeFileSync(LIST_DIRECTORY, JSON.stringify(filteredLists));
  return NextResponse.json({ message: "Board deleted successfully", id });
};

export { POST, DELETE };
