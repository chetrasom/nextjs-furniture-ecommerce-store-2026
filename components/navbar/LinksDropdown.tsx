"use client";

// Node modules
import Link from "next/link";

// Components
import { 
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
    DropdownMenuSeparator,
} from "../ui/dropdown-menu";
import { Button } from "../ui/button";

// Constants
import { links } from "@/data";

// Assets
import { LuAlignLeft } from 'react-icons/lu';

const LinksDropdown = () => {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant={"outline"} className='gap-x-3 h-10 max-w-30 w-full px-3 transition lg:max-w-max'>
                    <LuAlignLeft className='h-[1.3rem] w-[1.3rem] text-primary dark:text-white' />
                    {/* <UserIcon /> */}
                    <div className="bg-amber-300">
                        1
                    </div>
                </Button>
            </DropdownMenuTrigger>

            <DropdownMenuContent className='w-40 z-10' align='end' sideOffset={10}>
                {links.map((item) => (
                    <DropdownMenuItem key={item.label}>
                        <Link href={item.href}>
                            {item.label}
                        </Link>
                    </DropdownMenuItem>
                ))}
            </DropdownMenuContent>
        </DropdownMenu>
    )
}

export default LinksDropdown;