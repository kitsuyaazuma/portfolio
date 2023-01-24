"use client";
import { About } from "./About";
import { Skills } from "./Skills";
import { Experience } from "./Experience";
import { FooterSocial } from "../common/FooterSocial";

export const Home = () => {
    return (
        <>
            <About />
            <Skills />
            <Experience />
            <FooterSocial />
        </>
    );
};
