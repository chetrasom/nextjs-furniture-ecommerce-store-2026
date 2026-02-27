"use client";

// Node modules
import Link from "next/link";
import { usePathname } from "next/navigation";

// Clerk
import { useAuth } from "@clerk/nextjs";

// Custom modules
import { cn } from "@/lib/utils";

// Components
import { Button } from "../ui/button";

// Data
import { links } from "@/data";

// Assets
import { BookmarkIcon, TagIcon } from "lucide-react";

const NavbarBottom = () => {
    const pathname = usePathname();
    const { 
        userId, 
        isLoaded 
    } = useAuth();

    // Prevent hydration mismatch
    if (!isLoaded) return null;

    // UI-only admin check (matches your server logic)
    // const isAdmin = userId === process.env.ADMIN_USER_ID;
    const isAdmin = userId === process.env.NEXT_PUBLIC_ADMIN_USER_ID;

    return (
        <div className="bg-secondary rounded-md flex items-center justify-between px-4 h-16">
            <div className="flex items-center gap-x-6">
                {links.map((item) => {
                    // if (item.label === "dashboard" && !isAdmin) return null;
                    if (item.label === 'dashboard' && !isAdmin) return null;

                    return (
                        <Link 
                            key={item.href} 
                            href={item.href} 
                            className={cn(
                                "capitalize tracking-wide",
                                item.href === "/"
                                    ? pathname === "/"
                                    : pathname.startsWith(item.href) && "text-primary"
                            )}
                        >
                            {item.label}
                        </Link>
                    )
                })}
            </div>

            <div className="space-x-2">
                <Button asChild>
                    <Link href="/">
                        <BookmarkIcon className="w-5 h-5" />
                        <span>Deals Today</span>
                    </Link>
                </Button>

                <Button variant={"outline"} asChild>
                    <Link href="/">
                        <TagIcon className="w-5 h-5" />
                        <span>Special price</span>
                    </Link>
                </Button>
            </div>
        </div>
    )
}

export default NavbarBottom;