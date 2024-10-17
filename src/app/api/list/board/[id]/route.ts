import { CreateListType } from "@/actions/list";
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
  const lists = await parseJsonFile<IdWrapper<CreateListType>[]>(
    LIST_DIRECTORY
  );
  const list = lists.filter((list) => id === list.boardId);
  if (list) return NextResponse.json(list);
  return NextResponse.json({ error: "Not found" }, { status: 404 });
};

export { GET };
