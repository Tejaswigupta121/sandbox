import {
  Empty,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@/components/ui/empty"
import { UserButton } from "@clerk/nextjs"
import { auth } from "@clerk/nextjs/server"

export default async function Page() {
  await auth.protect({ unauthenticatedUrl: "/sign-in"})

  return (
    <div className="relative flex min-h-svh">
      <Empty>
        <EmptyHeader>
          <EmptyMedia>
            <img alt="Logo" height={48} src="/logo.svg" width={48} />
          </EmptyMedia>
          <EmptyTitle className="text-2xl">What should we build today?</EmptyTitle>
          <EmptyDescription>
            Build your own racers, shooters, puzzles and whole worlds using
            your own words. If you can describe it, you can play it.
          </EmptyDescription>
        </EmptyHeader>
      </Empty>
      <div className="absolute top-4 right-4">
        <UserButton />
      </div>
    </div>
  )
}
