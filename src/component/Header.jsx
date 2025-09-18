import React, { useState } from "react";
import { ChevronDown, ChevronDownIcon, ChevronUpIcon, Menu, X } from "lucide-react";
import { Link } from "react-router";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

const Header = () => {
    const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const toggleMobileNav = () => {
        setIsMobileNavOpen(!isMobileNavOpen);
    };

    return (
        <>
        <header className="relative py-8">
                <div className="container mx-auto px-4">
                    <nav className="flex items-center justify-between flex-wrap">
                        <div className="flex items-center mr-3">
                            <Link to="/" className="flex items-center" >
                                <img
                                    className="h-6 w-auto"
                                    src="/site-logo.svg"
                                    alt="logo"
                                />
                            </Link>
                        </div>

                        {/* Mobile Menu Button */}
                        <button
                            className="lg:hidden flex flex-col justify-center items-center w-10 h-10"
                            onClick={toggleMobileNav}
                        >
                            {isMobileNavOpen ? <X /> : <Menu />}
                        </button>

                        {/* Desktop Navigation Items */}
                        <div className="hidden lg:flex lg:items-center lg:justify-end w-full lg:w-auto">
                            <ul className="flex flex-col lg:flex-row items-center">
                                <li className="mr-4 mb-3 lg:mb-0">
                                    <a className="text-white font-semibold text-lg hover:text-gray-200">Home</a>
                                </li>
                                <li className="relative group mr-4 mb-3 lg:mb-0">
                                    {/* Desktop Dropdown */}
                                    <div className="relative">
                                        <DropdownMenu onOpenChange={setIsDropdownOpen}>
                                            <DropdownMenuTrigger className="flex gap-1 items-center focus:outline-none text-white font-semibold text-lg">
                                                Categories {isDropdownOpen ? <ChevronDownIcon className="w-4 h-4" /> : <ChevronUpIcon className="w-4 h-4" />}
                                            </DropdownMenuTrigger>
                                            <DropdownMenuContent className="m-4 w-[300px] py-3">
                                                <DropdownMenuItem className="mb-2">Get Started</DropdownMenuItem>
                                                <DropdownMenuItem className="mb-2">Product Guide</DropdownMenuItem>
                                                <DropdownMenuItem className="mb-2">Integrations</DropdownMenuItem>
                                                <DropdownMenuItem className="mb-2">Collaboration</DropdownMenuItem>
                                                <DropdownMenuItem className="mb-2">Billing & Subscription</DropdownMenuItem>
                                                <DropdownMenuItem className="mb-2">Developers & APIs</DropdownMenuItem>
                                                <DropdownMenuItem className="mb-2">Support & Troubleshooting</DropdownMenuItem>
                                                <DropdownMenuItem className="mb-2">Best Practices</DropdownMenuItem>
                                                <DropdownMenuItem className="mb-2">Resources</DropdownMenuItem>
                                            </DropdownMenuContent>
                                        </DropdownMenu>
                                    </div>
                                </li>
                                <li className="pt-3 lg:pt-0">
                                    <a className="bg-green-500 hover:bg-green-400 text-white font-semibold py-5 px-6 rounded-full">
                                        Free Trial
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </nav>

                    {/* Mobile Navigation Menu */}
                    <div className={`lg:hidden w-full transition-all duration-300 ease-in-out overflow-hidden ${isMobileNavOpen ? "max-h-96 opacity-100 mt-4" : "max-h-0 opacity-0"
                        }`}>
                        <div className="px-4 py-6 border-t border-white/20">
                            <ul className="flex flex-col space-y-4">
                                <li className="">
                                    <a className="text-white font-semibold text-lg hover:text-gray-200 block py-2">Home</a>
                                </li>

                                <li className="relative group">
                                    {/* Mobile Dropdown */}
                                    <div className="relative">
                                        <DropdownMenu onOpenChange={setIsDropdownOpen}>
                                            <DropdownMenuTrigger className="flex gap-1 items-center text-white font-semibold text-lg w-full text-left">
                                                Categories {isDropdownOpen ? <ChevronDownIcon className="w-4 h-4" /> : <ChevronUpIcon className="w-4 h-4" />}
                                            </DropdownMenuTrigger>
                                            <DropdownMenuContent className=" w-[600px] py-3">
                                                <DropdownMenuItem className="mb-2">Get Started</DropdownMenuItem>
                                                <DropdownMenuItem className="mb-2">Product Guide</DropdownMenuItem>
                                                <DropdownMenuItem className="mb-2">Integrations</DropdownMenuItem>
                                                <DropdownMenuItem className="mb-2">Collaboration</DropdownMenuItem>
                                                <DropdownMenuItem className="mb-2">Billing & Subscription</DropdownMenuItem>
                                                <DropdownMenuItem className="mb-2">Developers & APIs</DropdownMenuItem>
                                                <DropdownMenuItem className="mb-2">Support & Troubleshooting</DropdownMenuItem>
                                                <DropdownMenuItem className="mb-2">Best Practices</DropdownMenuItem>
                                                <DropdownMenuItem className="mb-2">Resources</DropdownMenuItem>
                                            </DropdownMenuContent>
                                        </DropdownMenu>
                                    </div>
                                </li>

                                <li className="pt-2">
                                    <a className="bg-green-500 w-fit hover:bg-green-400 text-white font-semibold py-3 px-6 rounded-full block text-center">
                                        Free Trial
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </header>
        </>
    );
};

export default Header;