<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# Database schema changes

This project is in development. Do NOT run `drizzle-kit migrate` (or `db:migrate`) — it generates migration artifacts and tracks applied migrations, which we don't need here.

Use `npm run db:push` (`drizzle-kit push`) to sync the schema with Neon instead. Push the schema after editing `lib/db/schema.ts`. There is no need for backwards compatibility or migration history.
