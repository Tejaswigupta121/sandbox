import { neon } from "@neondatabase/serverless"
import { drizzle } from "drizzle-orm/neon-http"

import * as schema from "@/lib/db/schema"

let cached: ReturnType<typeof createDb> | undefined

function createDb() {
  const url = process.env.DATABASE_URL
  if (!url) {
    throw new Error("DATABASE_URL is not set")
  }
  return drizzle({ client: neon(url), schema })
}

export function getDb() {
  cached ??= createDb()
  return cached
}