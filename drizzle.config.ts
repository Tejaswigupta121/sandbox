import { config } from "dotenv"
import { defineConfig } from "drizzle-kit"

config({ path: ".env.local" })

import { parseEnv } from "@neon/env"
import neonConfig from "./neon"

const { postgres } = parseEnv(neonConfig, ["DATABASE_URL_UNPOOLED"])

export default defineConfig({
  schema: "./lib/db/schema.ts",
  out: "./drizzle",
  dialect: "postgresql",
  dbCredentials: {
    url: postgres.databaseUrlUnpooled!,
  },
})