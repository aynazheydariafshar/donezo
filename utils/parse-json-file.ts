import fs from "fs";

export async function parseJsonFile<T>(dir: string): Promise<T> {
  if (!dir) throw new Error("No directory provided");
  const data = await fs.promises.readFile(dir, "utf8");
  return JSON.parse(data);
}
