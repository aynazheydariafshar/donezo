import { CreateBoardType } from "@/actions/board";
import { IdWrapper } from "@/types/id-wrapper";
import { getDirectoryPath } from "@/utils/get-directory-path";
import { parseJsonFile } from "@/utils/parse-json-file";
import { NextResponse } from "next/server";

const BOARDS_DIRECTORY = getDirectoryPath("board.json");

type Params = {
  orgId: string;
};

const GET = async (request: Request, context: { params: Params }) => {
  const { orgId } = context.params;
  if (!orgId) return NextResponse.json({ error: "Not found" }, { status: 404 });
  const boards = await parseJsonFile<IdWrapper<CreateBoardType>[]>(
    BOARDS_DIRECTORY
  );
  const board = boards.filter((board) => board.orgId === orgId);
  if (board) return NextResponse.json(board);
  return NextResponse.json({ error: "Not found" }, { status: 404 });
};

export { GET };
