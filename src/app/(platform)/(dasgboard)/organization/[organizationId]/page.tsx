"use client";
import { createBoard, getBoards } from "@/actions/create-board";
import { Button } from "@/components/ui/button";
import { useEffect } from "react";

export default function OrganizationId() {
  return (
    <div>
      <form action={createBoard}>
        <input
          className="border-black"
          id="title"
          name="title"
          required
          placeholder="cnter"
        />
      </form>

      <Button type="submit">test</Button>
    </div>
  );
}
