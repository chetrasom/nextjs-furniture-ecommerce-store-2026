import Link from "next/link"
import { LucideSofa } from "lucide-react";

const Logo = () => {
    return (
         <Link 
            href="/"
            className="flex items-center gap-2 font-semibold tracking-wide"
            aria-label="Furniture Logo"
        >
            <div className="hidden sm:block border w-9 h-9 bg-primary text-white rounded-sm md:flex items-center justify-center">
                <LucideSofa className="w-5 h-5" />
            </div>
            <span className="block uppercase font-bold text-xl">Furnova</span>
        </Link>

    )
}

export default Logo