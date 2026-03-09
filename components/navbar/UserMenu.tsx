import Link from 'next/link';

import { SignInButton, SignUpButton, SignedIn, SignedOut } from '@clerk/nextjs';
import { currentUser } from '@clerk/nextjs/server';
import SignOutLink from "./SignOutLink";

import { Button } from "../ui/button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { LayoutDashboardIcon } from "lucide-react";

const UserMenu = async () => {
    const user = await currentUser();
    const profileImage = user?.imageUrl;

    const isAdmin = user?.id === process.env.NEXT_PUBLIC_ADMIN_USER_ID;

    return (
        <>
            <SignedOut>
                <div className="font-kh-kantumruy flex flex-col-reverse gap-y-3 gap-x-2 md:flex-row md:items-center max-md:p-3">
                    <SignInButton mode='modal'>
                        <Button variant={"outline"}>
                            ចូលគណនី
                        </Button>
                    </SignInButton>

                    <SignUpButton mode='modal'>
                        <Button>
                            ចុះឈ្មោះ
                        </Button>
                    </SignUpButton>
                </div>
            </SignedOut>

            <SignedIn>
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button
                            size="icon"
                            variant="ghost"
                        >
                            <Avatar className='rounded-lg'>
                                <AvatarImage src={profileImage} />
                                <AvatarFallback>CN</AvatarFallback>
                            </Avatar>
                        </Button>
                    </DropdownMenuTrigger>

                    <DropdownMenuContent className="min-w-56" align="end">
                       <DropdownMenuItem>
                            <DropdownMenuLabel className="p-0 font-normal">
                                {user && (
                                    <div className="flex items-center gap-2 px-1 py-1.5 text-sm">
                                        <Avatar className="rounded-lg">
                                            <AvatarImage src={user.imageUrl} />
                                            <AvatarFallback>
                                                {user.firstName?.charAt(0)}
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
                                )}
                            </DropdownMenuLabel>
                        </DropdownMenuItem>

                        <DropdownMenuSeparator />

                        {isAdmin && (
                            <DropdownMenuItem asChild>
                                <Link href='/admin/dashboard'>
                                    <LayoutDashboardIcon />
                                    ផ្ទាំងគ្រប់គ្រង
                                </Link>
                            </DropdownMenuItem>
                        )}

                        <DropdownMenuItem>
                            <SignOutLink />
                        </DropdownMenuItem>

                    </DropdownMenuContent>
                </DropdownMenu>
            </SignedIn>
        </>
    )
}

export default UserMenu