import { CreateBoardType } from "@/actions/board";
import { IdWrapper } from "@/types/id-wrapper";
import { getDirectoryPath } from "@/utils/get-directory-path";
import { parseJsonFile } from "@/utils/parse-json-file";
import { uuid4 } from "@/utils/uuid4";
import fs from "fs";
import { NextResponse } from "next/server";

const BOARDS_DIRECTORY = getDirectoryPath("board.json");

const GET = async () => {
  const boards = await parseJsonFile<IdWrapper<CreateBoardType>[]>(
    BOARDS_DIRECTORY
  );
  return NextResponse.json(boards);
};

const POST = async (request: Request) => {
  const body: CreateBoardType = await request.json();

  if (
    !body.title ||
    !body.imageUserName ||
    !body.imageId ||
    !body.imageThumbUrl ||
    !body.imageFullUrl ||
    !body.imageLinkHtml ||
    !body.orgId
  )
    return NextResponse.json({ error: "bad request" }, { status: 403 });
  const boards = await parseJsonFile<IdWrapper<CreateBoardType>[]>(
    BOARDS_DIRECTORY
  );
  const newBoard = {
    ...body,
    id: uuid4(),
    title: body.title,
    imageUserName: body.imageUserName,
    imageId: body.imageId,
    imageThumbUrl: body.imageThumbUrl,
    imageFullUrl: body.imageFullUrl,
    imageLinkHtml: body.imageLinkHtml,
    orgId: body.orgId,
  };
  const modifiedBoards = [...boards, newBoard];
  await fs.writeFileSync(BOARDS_DIRECTORY, JSON.stringify(modifiedBoards));
  return NextResponse.json(newBoard);
};

export { GET, POST };
