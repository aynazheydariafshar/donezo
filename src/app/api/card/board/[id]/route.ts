import { CreateCardType } from "@/actions/card";
import { IdWrapper } from "@/types/id-wrapper";
import { getDirectoryPath } from "@/utils/get-directory-path";
import { parseJsonFile } from "@/utils/parse-json-file";
import { NextResponse } from "next/server";

const CARD_DIRECTORY = getDirectoryPath("card.json");

type Params = {
  id: string;
};

const GET = async (request: Request, context: { params: Params }) => {
  const { id } = context.params;
  if (!id) return NextResponse.json({ error: "Not found" }, { status: 404 });
  const cards = await parseJsonFile<IdWrapper<CreateCardType>[]>(
    CARD_DIRECTORY
  );
  const card = cards.filter((card: CreateCardType) => id === card.boardId);
  if (card) return NextResponse.json(card);
  return NextResponse.json({ error: "Not found" }, { status: 404 });
};

export { GET };
