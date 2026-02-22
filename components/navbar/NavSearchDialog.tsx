"use client";

// Node modules
import { useSearchParams, useRouter } from "next/navigation";
import { useState, useRef, useEffect } from "react";
import { useDebouncedCallback } from "use-debounce";

// Components
import { 
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "../ui/dialog";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

// Assets
import { SearchIcon, RotateCwIcon } from "lucide-react";

const NavSearchDialog = () => {
    const searchParams = useSearchParams();
    const { replace } = useRouter();
    
    const [search, setSearch] = useState(searchParams.get('search')?.toString() || '');
    const [loading, setLoading] = useState(false);
    const inputRef = useRef<HTMLInputElement>(null);

    // Extract primitive value from URL for stable useEffect dependency
    const searchQuery = searchParams.get("search") || "";

    // Debounced router update
    const handleSearch = useDebouncedCallback((value: string) => {
        const params = new URLSearchParams(searchParams);
        
        if (value.trim()) {
            params.set('search', value);
        } else {
            params.delete('search')
        }

        replace(`/products?${params.toString()}`)
        setLoading(false);
    }, 300);

    const submitSearch = () => {
        if (!search.trim()) return;

        setLoading(true);
        handleSearch(search);
    };

    // Sync input state with URL safely and stop loading spinner
    // - Clears the input if the URL has no search
    // - Uses setTimeout to defer state update, avoiding React 18 cascading render warnings
    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);

            if (!searchQuery) {
                setSearch("");
            }
        }, 0);

        return () => clearTimeout(timer);
    }, [searchQuery]);

    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button variant="outline" size="icon">
                    <SearchIcon className="h-[1.2rem] w-[1.2rem] text-primary" />
                </Button>
            </DialogTrigger>

            <DialogContent 
                // className="top-[40%] -translate-y-[40%] md:top-[40%] lg:top-[50%] sm:max-w-md"
                className="top-[40%] -translate-y-[40%]"
            >
                <DialogHeader>
                    <DialogTitle className="mb-2 font-kh-kantumruy text-2xl">ស្វែងរកផលិតផល</DialogTitle>
                    <DialogDescription className="font-kh-suwannaphum">
                        អ្នកអាចស្វែងរកផលិតផលណាមួយតាមចំណូលចិត្តរបស់អ្នក
                    </DialogDescription>
                </DialogHeader>
                <div className="flex items-center space-x-2">
                    <div className="grid flex-1 gap-2">
                        <Input
                            ref={inputRef}
                            type="search"
                            placeholder="ស្វែងរកផលិតផល..."
                            className="h-12 bg-background flex-1 rounded-lg mb-2 font-kh-suwannaphum"
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            onKeyDown={(e) => e.key === "Enter" && submitSearch()}
                        />
                        <Button 
                            variant="default" 
                            onClick={submitSearch}
                            disabled={loading}
                            className="gap-x-2 items-center h-11"
                        >
                            {loading ? (
                                <>
                                    <RotateCwIcon className="h-5 w-5 animate-spin" />
                                    Searching...
                                </>
                            ) : (
                                <>
                                    <SearchIcon className="w-5 h-5" />
                                    Search
                                </>
                            )}
                        </Button>
                    </div>
                </div>
                <DialogFooter className="sm:justify-start">
                    <DialogClose asChild className="sr-only">
                        <Button type="button" variant="secondary">
                            Close
                        </Button>
                    </DialogClose>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}

export default NavSearchDialog;