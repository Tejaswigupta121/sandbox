"use server"

import { auth } from "@clerk/nextjs/server"
import { revalidatePath } from "next/cache"

import { getDb } from "@/lib/db"
import { games } from "@/lib/db/schema"

export async function createGame(formData: FormData) {
  const { orgId } = await auth()
  if (!orgId) {
    throw new Error("Create an organization to start building.")
  }

  const title = String(formData.get("title") ?? "").trim()
  if (!title) {
    return
  }

  await getDb().insert(games).values({ orgId, title })

  revalidatePath("/")
}