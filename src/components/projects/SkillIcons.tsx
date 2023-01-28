import { Group, ThemeIcon, useMantineColorScheme } from '@mantine/core';
import React from 'react'
import { SiNextdotjs, SiPython, SiReact, SiTypescript } from 'react-icons/si';

interface SkillIconsProps {
    skills: string[]
}

export const SkillIcons = ({ skills }: SkillIconsProps) => {

    const { colorScheme } = useMantineColorScheme();

    const toIcon = (skill: string) => {
        switch (skill) {
            case 'React':
                return <SiReact />
            case 'Python':
                return <SiPython />
            case 'TypeScript':
                return <SiTypescript />
            case 'Next.js':
                return <SiNextdotjs />
        };
    }
    return (
        <Group position='center' spacing="xs">
            {skills.map((skill: string) => (
                <ThemeIcon
                    variant="light"
                    color={colorScheme === "dark" ? "green.5" : "green.9"}
                    key={skill}
                    style={{ backgroundColor: "transparent" }}
                >
                    {toIcon(skill)}
                </ThemeIcon>
            ))}
        </Group>
    )
}
