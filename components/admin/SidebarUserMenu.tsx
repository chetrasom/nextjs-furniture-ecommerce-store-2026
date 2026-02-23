"use client";

// Node modules
import { useClerk, useUser } from "@clerk/nextjs";

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

// Assets
import { ChevronsUpDownIcon, LogOutIcon } from "lucide-react";

const SidebarUserMenu = () => {
    const { user, isLoaded } = useUser();
    const { signOut } = useClerk();

    if (!isLoaded || !user) return null;

    return (
        <DropdownMenu>
            {/* ===== Trigger ===== */}
            <DropdownMenuTrigger asChild>
                <button className="flex w-full items-center gap-2 rounded-lg p-2 text-left text-sm hover:bg-muted">
                <Avatar className="h-8 w-8 rounded-md">
                    <AvatarImage src={user.imageUrl} />
                    <AvatarFallback>
                        {user.fullName?.charAt(0)}
                    </AvatarFallback>
                </Avatar>

                <div className="grid flex-1 leading-tight">
                    <span className="truncate font-medium">
                        {user.fullName}
                    </span>
                    <span className="truncate text-xs text-muted-foreground">
                        {user.primaryEmailAddress?.emailAddress}
                    </span>
                </div>

                <ChevronsUpDownIcon className="ml-auto size-4" />
                </button>
            </DropdownMenuTrigger>

            {/* ===== Content ===== */}
            <DropdownMenuContent
                className="min-w-56 rounded-lg"
                side="right"        // 👉 force right
                align="end"
                sideOffset={8}
            >
                <DropdownMenuLabel className="p-2 font-normal">
                    <div className="flex items-center gap-2">
                        <Avatar className="h-9 w-9 rounded-md">
                            <AvatarImage src={user.imageUrl} />
                            <AvatarFallback>
                                {user.fullName?.charAt(0)}
                            </AvatarFallback>
                        </Avatar>

                        <div className="grid flex-1 leading-tight">
                            <span className="truncate font-medium">
                                {user.fullName}
                            </span>
                            <span className="truncate text-xs text-muted-foreground">
                                {user.primaryEmailAddress?.emailAddress}
                            </span>
                        </div>
                    </div>
                </DropdownMenuLabel>

                <DropdownMenuSeparator />

                <DropdownMenuGroup>
                    <DropdownMenuItem
                        className="cursor-pointer"
                        onClick={() => signOut({ redirectUrl: "/" })}
                    >
                        <LogOutIcon className="mr-2 size-4" />
                        Log out
                    </DropdownMenuItem>
                </DropdownMenuGroup>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}

export default SidebarUserMenu;