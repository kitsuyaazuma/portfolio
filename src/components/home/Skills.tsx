"use client";
import { Center, Container, Grid, Title } from "@mantine/core";
import React from "react";
import { SkillsChart } from "./SkillsChart";

import { useTranslations } from "next-intl";

export const Skills = () => {
  const t = useTranslations("Skills");
  return (
    <Container py="xl">
      <Center my="xl">
        <Title>{t("title")}</Title>
      </Center>
      <Grid justify="center" align="center">
        {[0, 1, 2].map((key) => (
          <Grid.Col key={key} span={{ md: 4, xs: 6 }}>
            <SkillsChart index={key} />
          </Grid.Col>
        ))}
      </Grid>
    </Container>
  );
};
