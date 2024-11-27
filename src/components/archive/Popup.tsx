import {
  Image,
  Card,
  Text,
  Flex,
  Anchor,
  useMantineColorScheme,
  Box,
  Space,
} from "@mantine/core";
import { TbLink } from "react-icons/tb";
import { ReadingListItem } from "../data/reading";

interface PopupProps {
  data: ReadingListItem;
}

export const Popup = ({ data }: PopupProps) => {
  const { colorScheme } = useMantineColorScheme();

  return (
    <Box p="xs" m="xs">
      <Card.Section withBorder>
        <Image src={data.imageUrl} alt={data.imageUrl} />
      </Card.Section>

      <Space h="xs" />

      <Card.Section mt="md" mx="1px">
        <Flex justify="space-between">
          <Text fw={500} size="xl">
            {data.name}
          </Text>
        </Flex>

        <Anchor
          size="xs"
          href={data.url}
          target="_blank"
          color={colorScheme === "dark" ? "green.5" : "green.9"}
          key={data.url}
        >
          <TbLink />
          {data.url}
        </Anchor>
      </Card.Section>
    </Box>
  );
};
