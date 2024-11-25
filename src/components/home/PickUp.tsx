import {
  Text,
  Image,
  Flex,
  Stack,
  Container,
  Group,
  Button,
  useMantineColorScheme,
  Space,
  Highlight,
} from "@mantine/core";
import React from "react";
import { pickups } from "../data/pickup";
import { darkHighlightColor } from "./About";

export const PickUp = () => {
  const { colorScheme } = useMantineColorScheme();
  return (
    <Container py="xl">
      {pickups.map((pickup) => (
        <Flex
          direction={{ base: "column", sm: "row" }}
          gap="lg"
          justify="center"
          align="center"
          key={pickup.title}
          my="xl"
        >
          <div style={{ width: "240px" }}>
            <Image
              p="lg"
              radius="md"
              src={pickup.imageUrl}
              alt={pickup.title}
            />
          </div>
          <Stack>
            <Text size="xl" fw={700}>
              {pickup.title}
            </Text>
            {pickup.textList.map((text, index) => (
              <Highlight
                size="sm"
                key={index}
                highlightStyles={(theme) => ({
                  backgroundColor:
                    colorScheme === "dark"
                      ? darkHighlightColor
                      : theme.colors.green[0],
                  color: colorScheme === "dark" ? "white" : "black",
                  fontWeight: "bolder",
                })}
                highlight={pickup.searchWordsList[index]}
              >
                {text}
              </Highlight>
            ))}
            <Group gap="sm" justify="center" mt="xs">
              {pickup.buttons.map((button, index) => (
                <Button
                  key={index}
                  variant="light"
                  color="green.9"
                  size="md"
                  component="a"
                  href={button.url}
                  target="_blank"
                >
                  {button.text}
                </Button>
              ))}
            </Group>
          </Stack>
        </Flex>
      ))}
    </Container>
  );
};
