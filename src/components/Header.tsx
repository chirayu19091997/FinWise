"use client";
// import { HeaderOptions, Logo } from "@/utils/constants";
import Link from "next/link";
import React, { useState } from "react";
import { IconMenu2, IconX } from "@tabler/icons-react";
import TextHover from "./TextHover";
import { UserButton, UserProfile } from "@clerk/nextjs";

const Header = () => {
    const HeaderOptions = [{ title: "Home", route: "/" }]
    const [isMenuVisible, setIsMenuVisible] = useState(false);

    return (
        <nav>
            <div className="px-4 mx-auto sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20 lg:h-20">
                    {/* <Link href="/">{Logo}</Link> */}
                    <button
                        type="button"
                        className="inline-flex p-2  transition-all duration-200 rounded-md lg:hidden focus:bg-gray-100 hover:bg-gray-100"
                        onClick={() => setIsMenuVisible(!isMenuVisible)}
                    >
                        <IconMenu2 size={24} />
                    </button>

                    <div className="hidden lg:flex lg:items-center lg:justify-center lg:space-x-10">
                        {HeaderOptions.map((item) => (
                            <Link
                                key={`Hnavigation-${item.title}`}
                                href={item.route}
                                title={item.title}
                            >
                                <TextHover text={item.title} />
                            </Link>
                        ))}
                    </div>
                    <UserButton showName afterSignOutUrl="/" />

                    {/* <a
            href="#"
            title=""
            className="hidden lg:inline-flex items-center justify-center px-5 py-2.5 text-base transition-all duration-200 hover:bg-primaryColor hover: focus: focus:bg-primaryColor font-semibold text-white bg-black rounded-full"
            role="button"
          >
            Join Now
          </a> */}
                </div>
            </div>
            <div
                className="navbar-menu relative z-50"
                style={{ display: isMenuVisible ? "" : "none" }}
            >
                <div className="navbar-backdrop fixed inset-0 bg-gray-800 opacity-25"></div>
                <nav className="fixed top-0 left-0 bottom-0 flex flex-col w-5/6 max-w-sm py-6 px-6 bg-backgroundColor border-r overflow-y-auto">
                    <div className="flex items-center mb-8">
                        {/* <Link className="mr-auto text-3xl font-bold leading-none" href="/">
                            {Logo}
                        </Link> */}
                        <button
                            className="navbar-close"
                            onClick={() => setIsMenuVisible(false)}
                        >
                            <IconX size={24} />
                        </button>
                    </div>
                    <div>
                        <ul>
                            {HeaderOptions.map((item) => (
                                <li
                                    className="mb-1"
                                    key={`Hnavigation-${item.title}`}
                                    onClick={() => setIsMenuVisible(!isMenuVisible)}
                                >
                                    <Link
                                        className="block p-4 text-sm font-semibold text-gray-500 hover:bg-indigo-50 hover:text-secondaryColor rounded"
                                        href={item.route}
                                    >
                                        {item.title}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </nav>
            </div>
        </nav>
    );
};

export default Header;
