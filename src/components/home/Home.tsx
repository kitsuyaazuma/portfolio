"use client";
import { FooterSocial } from "../common/FooterSocial";
import { About } from "./About";
import { Experience } from "./Experience";
import { PickUp } from "./PickUp";
import { Skills } from "./Skills";

export const Home = () => {
  return (
    <>
      <About />
      <PickUp />
      <Skills />
      <Experience />
      <FooterSocial />
    </>
  );
};
