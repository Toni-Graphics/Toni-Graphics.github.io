"use client";

import { FileSliders, Github, Package, Terminal } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "./ui/alert";
import { ReactElement } from "react";
import { Button } from "./ui/button";

export const Repos = () => {

    let repos: {name: string, link: string, description: string, ic: ReactElement}[] = [
        {
            name: "CodeGenLib",
            link: "https://github.com/Toni-Graphics/CodeGenLib",
            description: "A code generation libary",

            ic: (
                <Terminal className="h-4 w-4"/>
            ),
        },
        {
            name: "Asc",
            link: "https://github.com/Toni-Graphics/asc",
            description: "A new high level assembler",

            ic: (
                <FileSliders className="h-4 w-4"/>
            ),
        },
        {
            name: "Quill",
            link: "https://github.com/Toni-Graphics/quill",
            description: "A package manager for C++",

            ic: (
                <Package className="h-4 w-4"/>
            ),
        },
    ];

    return (
        <div className="container">
            <ul className="flex flex-wrap items-center justify-center text-gray-900 dark:text-white">
                {repos.map(repo => (
                    <li>
                        <div className="m-4">
                            <Alert>
                                {repo.ic}
                                <AlertTitle>{repo.name}</AlertTitle>
                                <AlertDescription>
                                    {repo.description}
                                </AlertDescription>
                                <Button className="absolute inset-y-0 right-0 w-16" variant="ghost">
                                    <a href={repo.link} target="_blank" className="text-gray-300">
                                        <Github />
                                    </a>
                                </Button>
                            </Alert>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}