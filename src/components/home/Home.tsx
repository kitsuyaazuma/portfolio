"use client";
import { About } from "./About";
import { Skills } from "./Skills";
import { Experience } from "./Experience";
import { useEffect, useState } from "react";

export const Home = () => {
    const [isClient, setIsClient] = useState(false);
    const home = () => {
        if (isClient) {
            return (
                <>
                    <About />
                    <Skills />
                    <Experience />
                </>
            );
        } else {
            return null;
        }
    };
    useEffect(() => {
        setIsClient(true);
    }, []);

    return <>{home()}</>;
};
