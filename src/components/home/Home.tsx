"use client";
import { About } from "./About";
import { Skills } from "./Skills";
import { Experience } from "./Experience";
import { FooterSocial } from "../common/FooterSocial";
import { PickUp } from "./PickUp";
import { Divider } from "@mantine/core";

export const Home = () => {
    return (
        <>
            <About />
            {/* <Divider my="sm" /> */}
            <PickUp />
            {/* <Divider my="sm" /> */}
            <Skills />
            {/* <Divider my="sm" /> */}
            <Experience />
            <FooterSocial />
        </>
    );
};
