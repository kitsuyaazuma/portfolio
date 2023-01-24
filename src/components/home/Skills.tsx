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
        <Grid.Col md={4} xs={6}>
          <SkillsChart index={0} />
        </Grid.Col>
        <Grid.Col md={4} xs={6}>
          <SkillsChart index={1} />
        </Grid.Col>
        <Grid.Col md={4} xs={6}>
          <SkillsChart index={2} />
        </Grid.Col>
      </Grid>
    </Container>
  );
};
