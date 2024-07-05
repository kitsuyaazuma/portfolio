import {
  Image,
  Card,
  Text,
  Group,
  Anchor,
  useMantineColorScheme,
  Flex,
  Stack,
  Box,
} from "@mantine/core";
import { TbLink } from "react-icons/tb";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { DataType, LinkType } from "./data";

interface PopupProps {
  data: DataType;
}

export const Popup = ({ data }: PopupProps) => {
  const { colorScheme } = useMantineColorScheme();

  return (
    <Box p="xs" m="xs">
      <Card.Section>
        <Carousel
          showStatus={false}
          autoPlay={true}
          infiniteLoop
          showThumbs={false}
        >
          {data.images.map((image) => (
            <div key={image}>
              <Image src={image} alt={image} />
            </div>
          ))}
        </Carousel>
      </Card.Section>

      <Card.Section mt="md" mx="1px">
        <Group position="apart">
          <Text weight={500} size="xl">
            {data.name}
          </Text>
        </Group>

        <Text size="sm" color="dimmed" mt="sm">
          {data.impressions}
        </Text>
      </Card.Section>

      <Group mt="md">
        {data.links.map((link: LinkType) => (
          <Anchor
            size="xs"
            href={link.url}
            target="_blank"
            color={colorScheme === "dark" ? "green.5" : "green.9"}
            key={link.name}
          >
            <TbLink />
            {link.name}
          </Anchor>
        ))}
      </Group>
    </Box>
  );
};
