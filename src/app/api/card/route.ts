import { CreateCardType } from "@/actions/card";
import { IdWrapper } from "@/types/id-wrapper";
import { getDirectoryPath } from "@/utils/get-directory-path";
import { parseJsonFile } from "@/utils/parse-json-file";
import { uuid4 } from "@/utils/uuid4";
import fs from "fs";
import { NextResponse } from "next/server";

const CARD_DIRECTORY = getDirectoryPath("card.json");

const POST = async (request: Request) => {
  const body: CreateCardType = await request.json();
  const card = await parseJsonFile<IdWrapper<CreateCardType>[]>(CARD_DIRECTORY);
  const newCard = {
    ...body,
    id: uuid4(),
    boardId: body.boardId,
    title: body.title,
    listId: body.listId,
  };
  const modifiedCards = [...card, newCard];
  await fs.writeFileSync(CARD_DIRECTORY, JSON.stringify(modifiedCards));
  return NextResponse.json(newCard);
};

export { POST };
