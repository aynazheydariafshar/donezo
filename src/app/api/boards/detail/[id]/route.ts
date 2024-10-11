import { dataBoardType } from "@/types/data-board";
import { IdWrapper } from "@/types/id-wrapper";
import { getDirectoryPath } from "@/utils/get-directory-path";
import { parseJsonFile } from "@/utils/parse-json-file";
import { NextResponse } from "next/server";
import fs from "fs";

const BOARDS_DIRECTORY = getDirectoryPath("board.json");

type Params = {
  id: string;
};

const GET = async (request: Request, context: { params: Params }) => {
  const { id } = context.params;
  if (!id) return NextResponse.json({ error: "Not found" }, { status: 404 });
  const boards = await parseJsonFile<IdWrapper<dataBoardType>[]>(
    BOARDS_DIRECTORY
  );
  const board = boards.find((board) => id === board.id);
  if (board) return NextResponse.json(board);
  return NextResponse.json({ error: "Not found" }, { status: 404 });
};

// const PUT = async (request: Request, context: { params: Params }) => {
//   const body = await request.json();
//   const { id } = context.params;
//   const { title } = body;

//   if (!id) return NextResponse.json({ error: "Not found" }, { status: 404 });

//   const boards = await parseJsonFile<IdWrapper<dataBoardType>[]>(
//     BOARDS_DIRECTORY
//   );

//   const index = boards.findIndex((board) => board.id === id);
//   boards[index].title = title;

//   // const boardToUpdate = boards.find((board) => board.id === id);

//   if (!boards[index]) {
//     return NextResponse.json({ error: "Board not found" }, { status: 404 });
//   }

//   // const updatedBoard = {
//   //   ...boardToUpdate, // Keep the existing properties
//   //   ...body, // Override only the fields that are present in the request body
//   //   id, // Ensure the id remains unchanged
//   // };

//   // // const modifiedBoard = { ...body, id };
//   // const modifiedBoards = boards
//   //   .filter((board) => board.id !== id)
//   //   .concat(updatedBoard);
//   await fs.writeFileSync(BOARDS_DIRECTORY, JSON.stringify(boards));
//   return NextResponse.json(boards[index]);
// };

const PATCH = async (request: Request, context: { params: { id: string } }) => {
  const body = await request.json();
  const { id } = context.params;

  if (!id) {
    return NextResponse.json(
      { error: "Board ID not provided" },
      { status: 400 }
    );
  }

  const boards = await parseJsonFile<IdWrapper<dataBoardType>[]>(
    BOARDS_DIRECTORY
  );
  const boardToUpdate = boards.find((board: any) => board.id === id);

  if (!boardToUpdate) {
    return NextResponse.json({ error: "Board not found" }, { status: 404 });
  }

  const updatedBoard = {
    ...boardToUpdate,
    ...body,
  };

  const updatedBoards = boards.map((board: any) =>
    board.id === id ? updatedBoard : board
  );

  await fs.writeFileSync(BOARDS_DIRECTORY, JSON.stringify(updatedBoards));
  return NextResponse.json(updatedBoard);
};

export { GET, PATCH };
