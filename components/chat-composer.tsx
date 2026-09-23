"use client"

import {
  ArrowUpIcon,
  CarIcon,
  ChevronDownIcon,
  CrosshairIcon,
  Gamepad2Icon,
  GripIcon,
  PickaxeIcon,
  PlaneIcon,
  SwordsIcon,
  ZapIcon,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupTextarea,
} from "@/components/ui/input-group"

const suggestions = [
  { label: "Voxel survival", icon: PickaxeIcon },
  { label: "Ink samurai duel", icon: SwordsIcon },
  { label: "Comic-book firefight", icon: ZapIcon },
  { label: "Realistic battlefield", icon: PlaneIcon },
  { label: "Fight-first shooter", icon: CrosshairIcon },
  { label: "Jungle expedition drive", icon: CarIcon },
  { label: "Sunny kingdom platformer", icon: Gamepad2Icon },
]

export function ChatComposer() {
  return (
    <>
      <InputGroup className="bg-popover">
        <InputGroupTextarea
          aria-label="Message"
          placeholder="Describe the game you want to build..."
          rows={3}
          className="field-sizing-content max-h-48 min-h-10"
        />
        <InputGroupAddon align="block-end">
          <DropdownMenu>
            <DropdownMenuTrigger
              render={
                <InputGroupButton variant="ghost">
                  <GripIcon />
                  Kimi K3
                  <ChevronDownIcon />
                </InputGroupButton>
              }
            />
            <DropdownMenuContent>
              <DropdownMenuItem>Kimi K3</DropdownMenuItem>
              <DropdownMenuItem>Kimi K2</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <InputGroupButton
            aria-label="Send"
            className="ml-auto rounded-full"
            size="icon-sm"
            variant="default"
          >
            <ArrowUpIcon />
          </InputGroupButton>
        </InputGroupAddon>
      </InputGroup>
      <div className="flex flex-wrap justify-center gap-2">
        {suggestions.map(({ label, icon: Icon }) => (
          <Button key={label} className="rounded-full font-normal text-muted-foreground" size="sm" variant="outline">
            <Icon />
            {label}
          </Button>
        ))}
      </div>
    </>
  )
}
