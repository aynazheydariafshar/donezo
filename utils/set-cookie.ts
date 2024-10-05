"use server";

import { cookies } from "next/headers";

export async function setCookie(value: string, name: string) {
  cookies().set(name, value);
}
