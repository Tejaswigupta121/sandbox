import {
  Empty,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@/components/ui/empty"

export default function Page() {
  return (
    <div className="flex min-h-svh">
      <Empty>
        <EmptyHeader>
          <EmptyMedia>
            <img alt="Logo" height={48} src="/logo.svg" width={48} />
          </EmptyMedia>
          <EmptyTitle>What should we build today?</EmptyTitle>
          <EmptyDescription>
            Build your own racers, shooters, puzzles and whole worlds using
            your own words. If you can describe it, you can play it.
          </EmptyDescription>
        </EmptyHeader>
      </Empty>
    </div>
  )
}
