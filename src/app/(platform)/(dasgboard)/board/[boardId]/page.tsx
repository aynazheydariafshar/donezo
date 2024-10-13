import { auth } from "@clerk/nextjs/server";
import { ListContainer } from "./_components/list-container";

export default function BoardIdPage({
  params,
}: {
  params: { boardId: string };
}) {
  const { orgId } = auth();
  if (!orgId) return;
  return (
    <div className="p-11 h-full overflow-auto">
      <ListContainer boardId={params.boardId} data={[]} />
    </div>
  );
}
