import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Metadata } from "next"

export const metadata: Metadata = {
    title: "Product Not Found | Furniture Store",
    description:
        "The product you are looking for does not exist. Browse our furniture collection.",
    robots: {
        index: false,
        follow: false,
    },
}

export default function NotFound() {
    return (
        <section className="min-h-screen flex items-center justify-center font-kh-kantumruy">
            <div className="text-center space-y-4">
                <h1 className="text-2xl font-semibold">
                    មិនមានផលិតផល
                </h1>
                <p className="text-muted-foreground">
                    ផលិតផលដែលអ្នកកំពុងស្វែងរកមិនមាននៅទីនេះទេ។
                </p>
                <Button asChild variant={"secondary"} size={"lg"}>
                    <Link href="/products">ត្រឡប់ទៅហាងទំនិញ</Link>
                </Button>
            </div>
        </section>
    )
}