'use client'

import { useState } from "react";
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "./ui/sheet";

export function HeaderMobile() {
    const [isActive, setIsActive] = useState(false)

    const activeFunctions = () => {
        setIsActive(!isActive)
    }

    return (
        <header className="flex items-center p-7">
            <div>
                
            </div>

            <Sheet>
                <SheetTrigger>
                    <button 
                        className={`flex flex-col justify-around w-7 h-6 bg-transparent border-0 cursor-pointer focus:outline-none focus:shadow-none md:w-6 md:h-5 ${isActive ? 'active' : ''}`}
                        onClick={activeFunctions}
                    >
                        <span className={`block h-1 w-full bg-gray-100 rounded-full transition-all duration-400 ease-in-out ${isActive ? 'transform rotate-45 translate-y-1.5 translate-x-1.5' : ''}`}></span>
                        <span className={`block h-1 w-full bg-gray-100 rounded-full transition-all duration-400 ease-in-out ${isActive ? 'opacity-0' : ''}`}></span>
                        <span className={`block h-1 w-full bg-gray-100 rounded-full transition-all duration-400 ease-in-out ${isActive ? 'transform -rotate-45 -translate-y-1.5 translate-x-1.5' : ''}`}></span>
                    </button>
                </SheetTrigger>
                <SheetContent>
                    <SheetHeader>
                    <SheetTitle>Are you absolutely sure?</SheetTitle>
                    <SheetDescription>
                        This action cannot be undone. This will permanently delete your account
                        and remove your data from our servers.
                    </SheetDescription>
                    </SheetHeader>
                </SheetContent>
            </Sheet>

        </header>
    )
}