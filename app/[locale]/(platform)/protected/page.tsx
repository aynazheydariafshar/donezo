"use client";

import { UserButton } from "@clerk/nextjs";

export default function ProtectedPage() {
  return (
    <div>
      <UserButton />
    </div>
  );
}
