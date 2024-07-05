"use client";
import { Divider } from "@mantine/core";
import { FooterSocial } from "../common/FooterSocial";
import { About } from "./About";
import { Experience } from "./Experience";
import { PickUp } from "./PickUp";
import { Skills } from "./Skills";

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
