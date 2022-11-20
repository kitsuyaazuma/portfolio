import { Center, Container, Grid, Title } from '@mantine/core'
import React from 'react'
import { SkillsChart } from './SkillsChart'

export const Skills = () => {
  return (
    <Container py="xl">
        <Center>
            <Title>SKILLS</Title>
        </Center>
        <Grid justify="center" align="center">
            <Grid.Col md={4} sm={6} xs={12}>
                <SkillsChart label="Front-end" />
            </Grid.Col>
            <Grid.Col md={4} sm={6} xs={12}>
                <SkillsChart label="Back-end"/>
            </Grid.Col>
            <Grid.Col md={4} sm={6} xs={12}>
                <SkillsChart label="DevOps"/>
            </Grid.Col>
        </Grid>

    </Container>
  )
}
