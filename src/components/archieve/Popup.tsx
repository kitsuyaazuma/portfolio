import {
  Image,
  Card,
  Text,
  Group,
  Anchor,
  useMantineColorScheme,
  Box,
  Space,
} from "@mantine/core";
import { TbLink } from "react-icons/tb";
import { ReadingListItem } from "./data";

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
        <Group position="apart">
          <Text weight={500} size="xl">
            {data.name}
          </Text>
        </Group>

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
