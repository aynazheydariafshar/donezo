import LayoutBgBoard from "./_components/layout-bg-board";

export default function BoardIdLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { boardId: string };
}) {
  return (
    <LayoutBgBoard boardIdParams={params.boardId}>{children}</LayoutBgBoard>
  );
}
