"use client";

import { Navbar } from "@/components/Navbar";

export default function DocsHome() {
    return (
        <div>
            <Navbar />
            <div className="container">
                <div className="text-center">
                    <h2 className="text-blue-500"> Documentation </h2>
                </div>

                <p> Here you can find documentations for my projects </p>
            </div>
        </div>
    )
}