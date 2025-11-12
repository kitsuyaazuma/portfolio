"use client";

import { motion, MotionValue, useTransform, useScroll } from "motion/react";
import { Flex, Text, UnstyledButton } from "@mantine/core";
import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";
import { useState, useEffect } from "react";

const AnimatedCharacter = ({
  char,
  progress,
}: {
  char: string;
  progress: MotionValue<number>;
}) => {
  const [{ initialX, initialY, initialRotate }] = useState(() => {
    return {
      initialX: (Math.random() - 0.5) * 200,
      initialY: (Math.random() - 0.5) * 60,
      initialRotate: (Math.random() - 0.5) * 180,
    };
  });

  const x = useTransform(progress, [0, 1], [initialX, 0]);
  const y = useTransform(progress, [0, 1], [initialY, 0]);
  const rotate = useTransform(progress, [0, 1], [initialRotate, 0]);
  const opacity = useTransform(progress, [0, 0.5], [0, 1]);

  return (
    <motion.span style={{ x, y, rotate, opacity, display: "inline-block" }}>
      <Text c="green.9" size="lg">
        {char}
      </Text>
    </motion.span>
  );
};

export const AnimatedHeaderLogo = () => {
  const tFooter = useTranslations("Footer");
  const name = tFooter("name");

  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setIsMounted(true);
  }, []);

  const { scrollY } = useScroll();
  const progress = useTransform(scrollY, [0, 300], [0, 1]);

  return (
    <UnstyledButton component={Link} href="/">
      <Flex
        justify="center"
        align="center"
        style={{
          whiteSpace: "nowrap",
          overflow: "visible",
        }}
      >
        {isMounted &&
          name.split("").map((char, index) => {
            if (char === " ") {
              return <span key={index}>&nbsp;</span>;
            }
            return (
              <AnimatedCharacter key={index} char={char} progress={progress} />
            );
          })}
      </Flex>
    </UnstyledButton>
  );
};
