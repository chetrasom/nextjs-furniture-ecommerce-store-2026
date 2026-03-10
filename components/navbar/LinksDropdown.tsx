// Node modules
import Link from "next/link";
import { SignInButton, SignUpButton, SignedIn, SignedOut } from '@clerk/nextjs';
import { currentUser, auth } from '@clerk/nextjs/server';
import SignOutLink from "./SignOutLink";

// Components
import { 
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
    DropdownMenuSeparator,
    DropdownMenuLabel,
} from "../ui/dropdown-menu";
import { Button } from "../ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

// Constants
import { publicLinks, privateLinks } from "@/data";

// Assets
import { CircleUserIcon, LogIn, UserPlus, LucideAlignRight } from "lucide-react";

const LinksDropdown = async () => {
    const user = await currentUser();
    const profileImage = user?.imageUrl;

    const { userId } = await auth();
    const isAdmin = userId === process.env.NEXT_PUBLIC_ADMIN_USER_ID;

    // Determine which links to show
    const linksToShow = userId ? privateLinks : publicLinks;

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>       
                <Button 
                    variant='outline' 
                    size={user ? 'default' : 'icon'}
                    className='flex gap-4 max-w-25'
                >
                    {profileImage ? (
                        <>
                            <Avatar className="h-8 w-8 rounded-lg">
                                <AvatarImage src={profileImage} />
                                <AvatarFallback>
                                {user?.firstName?.charAt(0)}
                                </AvatarFallback>
                            </Avatar>

                            <LucideAlignRight className="size-4 opacity-70" />
                        </>
                    ) : (
                        <CircleUserIcon className="size-5" />
                    )}
                </Button>
            </DropdownMenuTrigger>

            <DropdownMenuContent className="min-w-40 font-kh-kantumruy" align="end">
                <SignedOut>
                    <DropdownMenuItem asChild className="w-full">
                        <SignInButton mode='modal'>
                            <button aria-label='login' className='w-full text-left bg-red-300'>
                                <LogIn className="size-4" />
                                ចូលគណនី
                            </button>
                        </SignInButton>
                    </DropdownMenuItem>

                    <DropdownMenuSeparator />

                    <DropdownMenuItem asChild className="w-full">
                        <SignUpButton mode='modal'>
                            <button aria-label='register' className='w-full text-left bg-red-300'>
                                <UserPlus className="size-4" />
                                ចុះឈ្មោះ
                            </button>
                        </SignUpButton>
                    </DropdownMenuItem>
                </SignedOut>

                <SignedIn>
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

                    {linksToShow.map((link) => {
                        // hide dashboard if not admin
                        if (link.label === 'dashboard' && !isAdmin) return null;

                        return (
                            <DropdownMenuItem key={link.href}>
                                <Link href={link.href} className='capitalize w-full'>
                                    {link.lang_kh}
                                </Link>
                            </DropdownMenuItem>
                        );
                    })}

                    <DropdownMenuSeparator />

                    <DropdownMenuItem>
                        <SignOutLink />
                    </DropdownMenuItem>

                </SignedIn>
                
            </DropdownMenuContent>
        </DropdownMenu>
    )
}

export default LinksDropdown;