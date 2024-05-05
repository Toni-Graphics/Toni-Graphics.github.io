"use client";

export const Introduction = () => {
    let iam = ["Rust dev", "C++ dev"];

    return (
        <div className="container-fluid m-10">
            <h1 className="max-w-5xl mx-auto text-center text-6xl tracking-tight 
            font-extrabold text-blue-600 sm:text-8xl 
            md:text-9xl px-2 lg:text-9xl">I am Cr0a3</h1>
            <div className="left-20 text-2xl flex justify-center">
            {iam.map(d => (
                <span className="flex justify-center">
                    <p className="text-orange-500">&lt;</p>
                    <p><b>{d}</b></p>
                    <p className="text-orange-500"> /&gt;&nbsp;&nbsp;</p>
                    <p>&nbsp;&nbsp;</p>
                </span>
            ))}
            </div> 
        </div>
    );
}