"use client"

// Node modules
import Link from 'next/link'

// Components
import { Button } from './ui/button';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

// Assets
import { 
    LayoutDashboardIcon, 
    LogOutIcon, 
    SettingsIcon,
    MenuIcon,
    CircleUserIcon
} from "lucide-react";

const TempDesign = () => {
    const user = true;

    // if (user) {
    //     return (
    //         <DropdownMenu>
    //             <DropdownMenuTrigger asChild>
    //                 <Button
    //                     size="icon"
    //                     variant="ghost"
    //                 >
    //                     <Avatar className='rounded-lg'>
    //                         <AvatarImage src="" />
    //                         <AvatarFallback>CN</AvatarFallback>
    //                     </Avatar>
    //                 </Button>
    //             </DropdownMenuTrigger>

    //             <DropdownMenuContent className="min-w-56" align="end">
    //                 <DropdownMenuLabel className="p-0 font-normal">
    //                     <div className="flex items-center gap-2 px-1 py-1.5 text-left text-sm">
    //                         <Avatar className='rounded-lg'>
    //                             <AvatarImage src="" />
    //                             <AvatarFallback>CN</AvatarFallback>
    //                         </Avatar>

    //                         <div className="grid flex-1 text-sm text-left leading-tight">
    //                             <div className="truncate font-medium">Milk Coffee</div>
    //                             <div className="truncate text-xs">milkcoffee@gmail.com</div>
    //                         </div>
    //                     </div>
    //                 </DropdownMenuLabel>

    //                 <DropdownMenuSeparator />

    //                 <DropdownMenuGroup>
    //                 <DropdownMenuItem asChild>
    //                     <Link
    //                         href='/admin/dashboard'
    //                     >
    //                         <LayoutDashboardIcon />
    //                         Dashboard
    //                     </Link>
    //                 </DropdownMenuItem>

    //                 <DropdownMenuItem onSelect={(e) => e.preventDefault()}>
    //                     <SettingsIcon />
    //                     Settings
    //                 </DropdownMenuItem>

    //                     <DropdownMenuItem>
    //                         <LogOutIcon />
    //                         Log out
    //                     </DropdownMenuItem>
    //                 </DropdownMenuGroup>
    //             </DropdownMenuContent>
    //         </DropdownMenu>
    //     )
    // }

    // Mobile
    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button
                    size="icon"
                    variant="outline"
                >
                    <CircleUserIcon className='size-5' />
                </Button>
            </DropdownMenuTrigger>

            <DropdownMenuContent className="min-w-56" align="end">
                <DropdownMenuItem asChild>
                    <Link
                        href='#'
                    >
                        <LayoutDashboardIcon />
                        Login
                    </Link>
                </DropdownMenuItem>

                <DropdownMenuSeparator />

                <DropdownMenuItem asChild>
                    <Link
                        href='#'
                    >
                        <LayoutDashboardIcon />
                        Register
                    </Link>
                </DropdownMenuItem>

            </DropdownMenuContent>
        </DropdownMenu>
    )

    {/* If user does not exist. */}
    // return (
    //     <>
    //         {/* <Separator className="bg-orange-400 md:hidden" /> */}

    //         <div className="flex flex-col-reverse gap-y-3 gap-x-2 md:flex-row md:items-center max-md:p-3">
    //             <Button asChild variant={"outline"}>
    //                 <Link href='/login'>Login</Link>
    //             </Button>

    //             <Button asChild>
    //                 <Link href='/signup'>Get Started</Link>
    //             </Button>
    //         </div>
    //     </>
    // )
}

export default TempDesign