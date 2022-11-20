import React from 'react'
import { useMantineColorScheme, Text, ActionIcon, Title, Center, Stack } from '@mantine/core';
import { IconSun, IconMoonStars } from '@tabler/icons';


export const Header = () => {
    const { colorScheme, toggleColorScheme } = useMantineColorScheme();
    const dark = colorScheme === 'dark';  


    return (
        <>
            <Stack>
                <Center>
                    <Title>Kitsuya Azuma</Title>
                </Center>
                <Center>
                    <Text>Software Engineer / Engineering Student / YouTuber</Text>
                </Center>
                <Center>
                    <ActionIcon
                        variant="outline"
                        color={dark ? 'yellow' : 'blue'}
                        onClick={() => toggleColorScheme()}
                        title="Toggle color scheme"
                        >
                        {dark ? <IconSun size={18} /> : <IconMoonStars size={18} />}
                    </ActionIcon>     
                </Center>
            </Stack>
        </>

    )
}