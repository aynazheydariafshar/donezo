import { IdWrapper } from "@/types/id-wrapper";
import { getDirectoryPath } from "@/utils/get-directory-path";
import { parseJsonFile } from "@/utils/parse-json-file";
import { NextResponse } from "next/server";
import fs from "fs";
import { CreateListType } from "@/actions/list";

const LIST_DIRECTORY = getDirectoryPath("list.json");

type Params = {
  id: string;
};

const GET = async (request: Request, context: { params: Params }) => {
  const { id } = context.params;
  alert(id);
  if (!id) return NextResponse.json({ error: "Not found" }, { status: 404 });
  const lists = await parseJsonFile<IdWrapper<CreateListType>[]>(
    LIST_DIRECTORY
  );
  const list = lists.filter((list) => id === list.id);
  if (list) return NextResponse.json(list);
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

  const lists = await parseJsonFile<IdWrapper<CreateListType>[]>(
    LIST_DIRECTORY
  );
  const listToUpdate = lists.find((list: any) => list.id === id);

  if (!listToUpdate) {
    return NextResponse.json({ error: "List not found" }, { status: 404 });
  }

  const updatedBoard = {
    ...listToUpdate,
    ...body,
  };

  const updatedLists = lists.map((list: any) =>
    list.id === id ? updatedBoard : list
  );

  await fs.writeFileSync(LIST_DIRECTORY, JSON.stringify(updatedLists));
  return NextResponse.json(updatedBoard);
};

const PUT = async (request: Request, context: { params: { id: string } }) => {
  const body = await request.json();
  const { id } = context.params;

  if (!id) {
    return NextResponse.json(
      { error: "Board ID not provided" },
      { status: 400 }
    );
  }

  const lists = await parseJsonFile<IdWrapper<CreateListType>[]>(
    LIST_DIRECTORY
  );
  const listToUpdate = lists.filter((list: any) => list.boardId !== id);

  const updatedLists = [...listToUpdate, ...body];

  await fs.writeFileSync(LIST_DIRECTORY, JSON.stringify(updatedLists));
  return NextResponse.json(body);
};

const DELETE = async (request: Request, context: { params: Params }) => {
  const { id } = context.params;
  if (!id) return NextResponse.json({ error: "Not found" }, { status: 404 });

  const lists = await parseJsonFile<IdWrapper<CreateListType>[]>(
    LIST_DIRECTORY
  );
  const filteredLists = lists.filter((list) => list.id !== id);

  if (filteredLists.length === lists.length) {
    return NextResponse.json({ error: "List not found" }, { status: 404 });
  }

  await fs.writeFileSync(LIST_DIRECTORY, JSON.stringify(filteredLists));
  return NextResponse.json({ message: "List deleted successfully", id });
};

export { GET, PATCH, DELETE, PUT };
