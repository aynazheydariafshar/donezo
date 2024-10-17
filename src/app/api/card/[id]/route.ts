import { IdWrapper } from "@/types/id-wrapper";
import { getDirectoryPath } from "@/utils/get-directory-path";
import { parseJsonFile } from "@/utils/parse-json-file";
import { NextResponse } from "next/server";
import fs from "fs";
import { CreateCardType } from "@/actions/card";

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
  const card = cards.filter((card) => id === card.listId);
  return NextResponse.json(card.length > 0 ? card : []);
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

  const cards = await parseJsonFile<IdWrapper<CreateCardType>[]>(
    CARD_DIRECTORY
  );
  const cardToUpdate = cards.find((board: any) => board.id === id);

  if (!cardToUpdate) {
    return NextResponse.json({ error: "Board not found" }, { status: 404 });
  }

  const updatedCard = {
    ...cardToUpdate,
    ...body,
  };

  const updatedCards = cards.map((board: any) =>
    board.id === id ? updatedCard : board
  );

  await fs.writeFileSync(CARD_DIRECTORY, JSON.stringify(updatedCards));
  return NextResponse.json(updatedCard);
};

const DELETE = async (request: Request, context: { params: Params }) => {
  const { id } = context.params;
  if (!id) return NextResponse.json({ error: "Not found" }, { status: 404 });

  const cards = await parseJsonFile<IdWrapper<CreateCardType>[]>(
    CARD_DIRECTORY
  );
  const filteredCard = cards.filter((card) => card.id !== id);

  if (filteredCard.length === cards.length) {
    return NextResponse.json({ error: "Card not found" }, { status: 404 });
  }

  await fs.writeFileSync(CARD_DIRECTORY, JSON.stringify(filteredCard));
  return NextResponse.json({ message: "Card deleted successfully", id });
};

export { GET, PATCH, DELETE };
