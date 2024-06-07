"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
    const [isClick, setIsClick] = useState(false);
    const toggleNavbar = () => {
        setIsClick(!isClick);
    }
    const pathname = usePathname()
    console.log(pathname)
    return (
        <nav className="bg-customGray">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
                <div className="flex items-center justify-between h-16">
                    <div className="flex items-center">
                        <div className="flex-shrink-0">
                            <Link href={"/"} className="text-black sm:text-[25px] text-[18px] leading-none tracking-wide font-bold">Task Management Tool</Link>
                        </div>

                    </div>
                    <div className="hidden md:block">
                        <div className="ml-4 flex items-center space-x-10">
                            <Link className={`text-black text-[18px] rounded-lg p-2 leading-none hover:text-customBlue ${pathname === "/" ? "font-semibold text-customBlue" : ""}`} href={"/"}>Dashboard</Link>
                            <Link className={`text-black text-[18px] rounded-lg p-2 leading-none hover:text-customBlue ${pathname === "/to-do" ? "font-semibold text-customBlue" : ""}`} href={"/to-do"}>To Do's</Link>
                        </div>
                    </div>
                    <div className="md:hidden flex items-center">
                        <button className="inline-flex items-center justify-center 
                    p-2 rounded-md text-black md:text-black hover:text-black
                    focus:outline-none focus:ring-2 focus:ring-inset focus:ring-black"
                            onClick={toggleNavbar}>
                            {isClick ? (
                                <svg
                                    className="h-6 w-6"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>
                            ) : (
                                <svg
                                    className="h-6 w-6"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M4 6h16M4 12h16m-7 6h7"
                                    />
                                </svg>
                            )}
                        </button>
                    </div>
                </div>
            </div>
            {isClick && (
                <div className="md:hidden">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 ">
                        <Link className={`text-black block rounded-lg py-2 px-5 hover:bg-customBlue hover:text-white ${pathname === "/" ? "font-semibold text-customBlue" : ""} `} href={"/"}>Dashboard</Link>
                        <Link className={`text-black block rounded-lg py-2 px-5 hover:bg-customBlue hover:text-white  ${pathname === "/to-do" ? "font-semibold text-customBlue" : ""} `}  href={"/to-do"}>To Do's</Link>
                    </div>
                </div>
            )}
        </nav>

    );
};

export default Navbar;
