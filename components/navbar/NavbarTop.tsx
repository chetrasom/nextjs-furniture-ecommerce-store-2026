"use client";

// Node modules
import Link from "next/link";
import { useState, useEffect } from "react";

// Custom modules
import { cn } from "@/lib/utils";

// Assets
import { TagIcon, SmartphoneIcon } from "lucide-react";
import { FaTelegram, FaFacebook  } from "react-icons/fa";

const NavbarTop = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 64);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div className={cn(
            "flex items-center justify-between overflow-hidden bg-background backdrop-blur-xl transition-all duration-300 text-sm px-2",
            isScrolled ? "h-0 border-0" : "h-10 border-b"
        )}>
            <div className="flex items-center gap-x-4">
                <TagIcon className="w-5 h-5 text-primary" />
                <span>Only this weeks</span>
                <span className="text-primary">-20%</span>
            </div>

            <div className="flex items-center gap-x-2">
                <SmartphoneIcon className="w-5 h-5 text-primary" />
                <span>Need help?</span>
                <span>+855 123 456 789</span>
            </div>

            <div className="flex items-center gap-x-4">
                <Link href={"/about"} className="hover:text-primary transition-colors">About us</Link>
                <Link href={"/products"} className="hover:text-primary transition-colors">Shop</Link>

                <Link href={"#"}>
                    <FaTelegram className="w-6 h-6 ring ring-muted-foreground ring-offset-1 rounded-full text-primary hover:ring-primary transition-colors" />
                </Link>

                <Link href={"#"}>
                    <FaFacebook className="w-6 h-6 ring ring-muted-foreground ring-offset-1 rounded-full text-primary hover:ring-primary transition-colors" />
                </Link>
            </div>
        </div>
    )
}

export default NavbarTop