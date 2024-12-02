import {
  Card,
  Text,
  Flex,
  Anchor,
  useMantineColorScheme,
  Box,
  Space,
} from "@mantine/core";
import Image from "next/image";
import { TbLink } from "react-icons/tb";
import { ReadingListItem } from "../data/reading";

interface PopupProps {
  data: ReadingListItem;
}

export const Popup = ({ data }: PopupProps) => {
  const { colorScheme } = useMantineColorScheme();

  return (
    <Box m="xs">
      <Card>
        <Card.Section style={{ textAlign: "center" }}>
          <Image
            width={300}
            height={0}
            src={data.imageUrl}
            alt={data.imageUrl}
            style={{ height: "auto" }}
          />
        </Card.Section>

        <Card.Section style={{ textAlign: "center" }} pt="xs">
          <Text fw={700} size="lg" truncate>
            {data.name}
          </Text>

          <Anchor
            size="xs"
            href={data.url}
            target="_blank"
            c={colorScheme === "dark" ? "green.5" : "green.9"}
            key={data.url}
            lineClamp={1}
          >
            <TbLink />
            {data.url}
          </Anchor>
        </Card.Section>
      </Card>
    </Box>
  );
};
