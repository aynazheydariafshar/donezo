import { CreateListType } from "@/actions/list";
import { IdWrapper } from "@/types/id-wrapper";
import { getDirectoryPath } from "@/utils/get-directory-path";
import { parseJsonFile } from "@/utils/parse-json-file";
import { uuid4 } from "@/utils/uuid4";
import fs from "fs";
import { NextResponse } from "next/server";

const LIST_DIRECTORY = getDirectoryPath("list.json");

const POST = async (request: Request) => {
  const body: CreateListType = await request.json();
  const list = await parseJsonFile<IdWrapper<CreateListType>[]>(LIST_DIRECTORY);
  const newList = {
    ...body,
    id: uuid4(),
    boardId: body.boardId,
    title: body.title,
    description: body.description,
  };
  const modifiedLists = [...list, newList];
  await fs.writeFileSync(LIST_DIRECTORY, JSON.stringify(modifiedLists));
  return NextResponse.json(newList);
};

export { POST };
