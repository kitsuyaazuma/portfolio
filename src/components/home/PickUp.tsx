"use client";
import {
  Text,
  Flex,
  Image,
  Stack,
  Container,
  Group,
  Button,
  useMantineColorScheme,
  Highlight,
} from "@mantine/core";
import NextImage from "next/image";
import { darkHighlightColor } from "./About";
import { useTranslations } from "next-intl";
import { PickupItem, PickupItemSchema } from "@/types/messages";
import { z } from "zod";

export const PickUp = () => {
  const t = useTranslations("PickUp");
  let items: PickupItem[] = [];
  const result = z.array(PickupItemSchema).safeParse(t.raw("items"));
  if (result.success) {
    items = result.data;
  } else {
    console.error(result.error.message);
  }
  const { colorScheme } = useMantineColorScheme();

  return (
    <Container py="lg" size="md">
      {items.map((item: PickupItem) => (
        <Flex
          direction={{ base: "column", sm: "row" }}
          gap={{ base: "xl", sm: "lg" }}
          justify="center"
          align="center"
          key={item.title}
          py="lg"
        >
          <Image
            component={NextImage}
            src={item.imageUrl}
            alt={item.title}
            width={240}
            height={0}
            w={240}
            h="auto"
          />
          <Stack>
            <Text size="xl" fw={700} style={{ lineHeight: 1.2 }}>
              {item.title}
            </Text>
            {item.textList.map((text, index) => (
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
                highlight={item.searchWordsList[index]}
              >
                {text}
              </Highlight>
            ))}
            <Group gap="sm" justify="center" mt="xs">
              {item.buttons.map((button, index) => (
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
