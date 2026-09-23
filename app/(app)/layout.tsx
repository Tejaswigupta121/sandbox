import { AppSidebar } from "@/components/app-sidebar"
import { listGames } from "@/lib/games/queries"
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar"

export const dynamic = "force-dynamic"

export default async function AppLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const games = await listGames()

  return (
    <SidebarProvider>
      <AppSidebar games={games} />
      <SidebarInset>{children}</SidebarInset>
    </SidebarProvider>
  )
}