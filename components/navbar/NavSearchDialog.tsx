"use client";

// Node modules
import { useState, useRef } from "react";

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
    const inputRef = useRef<HTMLInputElement>(null);
    // const [search, setSearch] = useState(searchParams.get('search')?.toString() || '');
    const [search, setSearch] = useState('');
    const [loading, setLoading] = useState(false);

    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button variant="outline" size="icon" className="h-10">
                    <SearchIcon className="h-[1.2rem] w-[1.2rem] text-primary dark:text-custom-white" />
                </Button>
            </DialogTrigger>

            <DialogContent 
                // className="top-[30%] md:top-[40%] lg:top-[50%] sm:max-w-md"
                className="top-[50%] -translate-y-[50%]"
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
                            // onKeyDown={(e) => e.key === "Enter" && handleSearch(search)}
                        />
                        <Button 
                            variant="default" 
                            // onClick={() => handleSearch(search)} 
                            disabled={loading}
                            className="gap-x-2 items-center h-11"
                        >
                            {loading ? <RotateCwIcon className='h-5 w-5 animate-spin' /> : <SearchIcon className="w-5 h-5" />}
                            {loading ? "Searching..." : "Search"}
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