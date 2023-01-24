"use client";
import { About } from "./About";
import { Skills } from "./Skills";
import { Experience } from "./Experience";
import { useEffect, useState } from "react";
import { FooterSocial } from "../common/FooterSocial";

export const Home = () => {
    const [isClient, setIsClient] = useState(false);
    const home = () => {
        if (isClient) {
            return (
                <>
                    <About />
                    <Skills />
                    <Experience />
                    <FooterSocial />
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
