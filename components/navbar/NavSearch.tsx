"use client";

import { useSearchParams, useRouter } from 'next/navigation';
import { useDebouncedCallback } from 'use-debounce';
import { useState, useEffect } from 'react';
import { Input } from "../ui/input";
import { SearchIcon } from "lucide-react";

const NavSearch = () => {
    const searchParams = useSearchParams();
    const { replace } = useRouter();
    const [search, setSearch] = useState(
        searchParams.get('search')?.toString() || ''
    );

    const searchQuery = searchParams.get("search") || "";

    const handleSearch = useDebouncedCallback((value: string) => {
        const params = new URLSearchParams(searchParams);
        if (value) {
            params.set('search', value);
        } else {
            params.delete('search');
        }
        replace(`/products?${params.toString()}`);
    }, 300);

    useEffect(() => {
        const timer = setTimeout(() => {
            if (!searchQuery) {
                setSearch("");
            }
        }, 0);

        return () => clearTimeout(timer);
    }, [searchQuery]);

    return (
        <div className="relative max-w-xl w-full">
            <Input
                type='search'
                placeholder='ស្វែងរកផលិតផល...'
                className='h-11 w-full font-kh-suwannaphum rounded-full pl-11 pr-4'
                value={search}
                onChange={(e) => {
                    setSearch(e.target.value);
                    handleSearch(e.target.value);
                }}
            />
            <span className="absolute top-1/2 left-4 -translate-y-1/2 ">
                <SearchIcon className="w-5 h-5 text-muted-foreground" />
            </span>
        </div>
    )
}

export default NavSearch