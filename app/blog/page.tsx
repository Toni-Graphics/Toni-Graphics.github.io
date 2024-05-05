"use client";

import { Navbar } from "@/components/Navbar";

export default function BlogHome() {
    return (
        <div>
            <Navbar />
            <div className="container">
                <div className="text-center">
                    <h2 className="text-blue-500"> My Blog </h2>
                </div>

                <p> Hi this is my blog </p>
            </div>
        </div>
    )
}