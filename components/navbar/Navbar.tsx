// Node modules
import { Suspense } from "react";

// Components
import ContainerWrapper from "../global/ContainerWrapper";
import NavbarTop from "./NavbarTop";
import NavbarBottom from "./NavbarBottom";
import Logo from "./Logo";
import NavSearch from "./NavSearch";
import LinksDropdown from "./LinksDropdown";
import NavSearchDialog from "./NavSearchDialog";
import CartButton from "./CartButton";
import DarkMode from "./DarkMode";

import TempDesign from "../TempDesign";

const Navbar = () => {
    return (
        <header className="fixed top-0 left-0 w-full z-50 bg-background">
            <ContainerWrapper>
                <nav className="hidden lg:block">
                    <NavbarTop />
                </nav>

                <nav className="h-16 flex items-center justify-between lg:py-10">
                    {/* Mobile */}
                    <div className="h-full w-full border-b flex items-center justify-between lg:hidden">
                        {/* Left */}
                        <Logo />

                        {/* Right */}
                        <div className="flex items-center gap-x-2">
                            <Suspense>
                                <NavSearchDialog />
                            </Suspense>
                            <DarkMode />
                            <TempDesign />
                            {/* <LinksDropdown /> */}
                        </div>
                    </div>

                    {/* Large */}
                    <div className="h-full w-full hidden lg:block">
                        <div className="h-full flex items-center justify-between">
                            <Logo />
                            <Suspense>
                                <NavSearch />
                            </Suspense>
                            <div className="flex items-center gap-x-2">
                                <TempDesign />
                                <DarkMode />
                                {/* <LinksDropdown /> */}
                            </div>
                        </div>
                    </div>
                </nav>

                <nav className="hidden lg:block lg:ml-auto">
                    <NavbarBottom />
                </nav>
            </ContainerWrapper>
        </header>
    )
}

export default Navbar