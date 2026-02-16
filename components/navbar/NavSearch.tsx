import { Input } from "../ui/input";
import { SearchIcon } from "lucide-react";

const NavSearch = () => {
    return (
        <div className="relative max-w-xl w-full">
            <Input
                type='search'
                placeholder='ស្វែងរកផលិតផល...'
                className='h-11 w-full font-kh-suwannaphum rounded-full pl-11 pr-4'
            />
            <span className="absolute top-1/2 left-4 -translate-y-1/2 ">
                <SearchIcon className="w-5 h-5 text-muted-foreground" />
            </span>
        </div>
    )
}

export default NavSearch