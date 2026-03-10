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
import { links, publicLinks, privateLinks } from "@/data";

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

    // admin check
    const isAdmin = userId === process.env.NEXT_PUBLIC_ADMIN_USER_ID;

    // Links to show when user is logged in, not logged in, and admin
    const linksToShow = !userId ? publicLinks : privateLinks;

    return (
        <div className="bg-secondary rounded-md flex items-center justify-between px-4 h-16">
            {/* <div className="flex items-center gap-x-6">
                {links.map((item) => {
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
                            {item.lang_kh}
                        </Link>
                    )
                })}
            </div> */}

            <div className="flex items-center gap-x-6">
                {linksToShow.map((item) => {
                    if (item.label === "dashboard" && !isAdmin) return null; // optional for admin

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
                            {item.lang_kh}
                        </Link>
                    );
                })}
            </div>

            <div className="space-x-2 font-kh-kantumruy">
                <Button asChild>
                    <Link href="/products">
                        <BookmarkIcon className="w-5 h-5" />
                        <span>ប្រូម៉ូសិនថ្ងៃនេះ</span>
                    </Link>
                </Button>

                <Button variant={"outline"} asChild>
                    <Link href="/products">
                        <TagIcon className="w-5 h-5" />
                        <span>តម្លៃពិសេស</span>
                    </Link>
                </Button>
            </div>
        </div>
    )
}

export default NavbarBottom;