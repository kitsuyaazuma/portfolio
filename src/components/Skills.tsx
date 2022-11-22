import { Center, Container, Grid, Title } from '@mantine/core'
import React from 'react'
import { SkillsChart } from './SkillsChart'

export const Skills = () => {
  return (
    <Container py="xl">
        <Center my="xl">
            <Title>SKILLS</Title>
        </Center>
        <Grid justify="center" align="center">
            <Grid.Col md={4} xs={6}>
                <SkillsChart label="Front-end" />
            </Grid.Col>
            <Grid.Col md={4} xs={6}>
                <SkillsChart label="Back-end"/>
            </Grid.Col>
            <Grid.Col md={4} xs={6}>
                <SkillsChart label="DevOps"/>
            </Grid.Col>
        </Grid>

    </Container>
  )
}
