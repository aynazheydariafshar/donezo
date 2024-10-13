import { BoardCardType } from "@/types/board-card";
import { dataBoardType } from "@/types/data-board";
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
  const boards = await parseJsonFile<IdWrapper<BoardCardType>[]>(
    LIST_DIRECTORY
  );
  const board = boards.find((board) => id === board.boardId);
  if (board) return NextResponse.json(board);
  return NextResponse.json({ error: "Not found" }, { status: 404 });
};

// const POST = async (request: Request, context: { params: Params }) => {
//   // const { id } = context.params;
//   // if (!id) return NextResponse.json({ error: "Not found" }, { status: 404 });
//   const body: BoardCardType = await request.json();
//   const boards = await parseJsonFile<IdWrapper<dataBoardType>[]>(
//     BOARDS_DIRECTORY
//   );
//   const newBoard = {
//     ...body,
//     id: uuid4(),
//     boardId: body.boardId,
//     title: body.title,
//     description: body.description,
//     listId: body.listId,
//     order: body.order,
//   };
//   // const board = boards.find((board) => id === board.id);
//   if (!board) {
//     return NextResponse.json({ error: "Board not found" }, { status: 404 });
//   }
//   let updateBoard;
//   if (board.list?.length > 0)
//     updateBoard = { ...board, list: [...board?.list, newBoard] };
//   else updateBoard = { ...board, list: [newBoard] };
//   const modifiedBoards = boards.map((board: any) =>
//     board.id === id ? updateBoard : board
//   );
//   await fs.writeFileSync(BOARDS_DIRECTORY, JSON.stringify(modifiedBoards));
//   return NextResponse.json(updateBoard);
// };

// const POST = async (request: Request, context: { params: { id: string } }) => {
//   const body = await request.json();
//   const { id } = context.params;

//   if (!id) {
//     return NextResponse.json(
//       { error: "Board ID not provided" },
//       { status: 400 }
//     );
//   }

//   const boards = await parseJsonFile<IdWrapper<dataBoardType>[]>(
//     BOARDS_DIRECTORY
//   );
//   const boardToUpdate = boards.find((board: any) => board.id === id);

//   if (!boardToUpdate) {
//     return NextResponse.json({ error: "Board not found" }, { status: 404 });
//   }

//   const updatedBoard = {
//     ...boardToUpdate,
//     ...body,
//   };

//   const updatedBoards = boards.map((board: any) =>
//     board.id === id ? updatedBoard : board
//   );

//   await fs.writeFileSync(BOARDS_DIRECTORY, JSON.stringify(updatedBoards));
//   return NextResponse.json(updatedBoard);
// };

export { GET };
