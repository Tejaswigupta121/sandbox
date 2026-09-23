"use client"

import { OrganizationSwitcher, UserButton } from "@clerk/nextjs"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { CircleDollarSign, MessageSquareIcon, SquarePen } from "lucide-react"

import { Empty, EmptyDescription } from "@/components/ui/empty"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuBadge,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarTrigger,
} from "@/components/ui/sidebar"

export function AppSidebar() {
  const pathname = usePathname()

  return (
    <Sidebar collapsible="icon">
      <SidebarHeader>
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-2 group-data-[collapsible=icon]:hidden">
            <Image
              src="/logo.svg"
              alt="Sandbox"
              width={20}
              height={20}
              className="size-5"
            />
            <span className="font-logo text-base">Sandbox</span>
          </div>
          <SidebarTrigger className="ml-auto" />
        </div>
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton
                  render={<Link href="/" />}
                  isActive={pathname === "/"}
                >
                  <SquarePen />
                  <span>New game</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarGroup>
          <SidebarGroupLabel>Recents</SidebarGroupLabel>
          <SidebarGroupContent>
            <Empty className="border p-2 group-data-[collapsible=icon]:hidden">
              <EmptyDescription className="text-xs">
                Your games will live here.
              </EmptyDescription>
            </Empty>
            <SidebarMenu className="hidden group-data-[collapsible=icon]:block">
              <SidebarMenuItem>
                <SidebarMenuButton>
                  <MessageSquareIcon />
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton>
              <CircleDollarSign />
              <span>Credits</span>
            </SidebarMenuButton>
            <SidebarMenuBadge>$1.00</SidebarMenuBadge>
          </SidebarMenuItem>
        </SidebarMenu>
        <div className="flex items-center justify-between gap-2 px-2">
          <div className="w-full min-w-0 group-data-[collapsible=icon]:hidden">
            <OrganizationSwitcher
              appearance={{
                elements:{
                  rootBox: "w-full! max-w-full",
                  organizationPreview: "min-w-0",
                  organizationPreviewTextContainer: "min-w-0",
                  organizationPreviewMainIdentifier: "truncate",
                },
              }}
               />
          </div>
          <UserButton />
        </div>
      </SidebarFooter>
    </Sidebar>
  )
}