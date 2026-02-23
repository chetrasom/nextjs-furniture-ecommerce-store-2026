"use client";

// Node modules
import Link from "next/link";
import { usePathname } from "next/navigation";

// Components
import { Button } from "@/components/ui/button";
import SidebarUserMenu from "@/components/admin/SidebarUserMenu";

// Data
import { adminLinks } from "@/data";

const Sidebar = () => {
    const pathname = usePathname();

    return (
        <aside className="bg-muted">
            <span className="text-neutral-400 text-sm block mb-2">Home</span>

            {adminLinks.map((link) => {
                const isActivePage = link.href === pathname;
                const variant = isActivePage ? "default" : "outline";

                return (
                    <Button 
                        asChild
                        key={link.href}
                        className="capitalize w-full justify-start mb-3"
                        size={"lg"}
                        variant={variant}
                    >
                        <Link href={link.href}>
                            {link.label}
                        </Link>
                    </Button>
                )
            })}

            <div className="mt-auto">
                <SidebarUserMenu />
            </div>
        </aside>
    )
}

export default Sidebar;