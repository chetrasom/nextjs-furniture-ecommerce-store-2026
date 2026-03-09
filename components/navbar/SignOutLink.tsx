"use client";

import { SignOutButton } from "@clerk/nextjs";
import Link from "next/link";
import { toast } from "sonner";
import { LogOut } from "lucide-react";

const SignOutLink = () => {
    const handleLogout = () => {
        toast.success("កំពុងចាកចេញ...");
    };

    return (
        <SignOutButton>
            <Link 
                href="/"
                className="flex w-full items-center gap-2 text-left"
                onClick={handleLogout}
            >
                <LogOut className="size-4" />
                ចាកចេញ
            </Link>
        </SignOutButton>
    )
}

export default SignOutLink