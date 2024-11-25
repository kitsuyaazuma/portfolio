import { Center, Container, Grid, Title } from "@mantine/core";
import React from "react";
import { SkillsChart } from "./SkillsChart";

export const Skills = () => {
  return (
    <Container py="xl">
      <Center my="xl">
        <Title>SKILLS</Title>
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
