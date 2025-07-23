import { Center, Container, Grid, Title } from "@mantine/core";
import React from "react";
import { SkillsChart } from "./SkillsChart";

import { useTranslations } from "next-intl";

// ... (imports)

export const Skills = () => {
  const t = useTranslations("Skills");
  return (
    <Container py="xl">
      <Center my="xl">
        <Title>{t("title")}</Title>
      </Center>
      <Grid justify="center" align="center">
        {[0, 1, 2].map((index) => (
          <Grid.Col key={index} span={{ md: 4, xs: 6 }}>
            <SkillsChart index={index} />
          </Grid.Col>
        ))}
      </Grid>
    </Container>
  );
};
