"use server";

import { cookies } from "next/headers";

export default async function setCookie(value: string, name: string) {
  cookies().set(name, value);
}
