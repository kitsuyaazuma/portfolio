"use client";
import { Badge, Card, Text, Overlay, SimpleGrid, Stack } from "@mantine/core";
import Image from "next/image";
import { readingList } from "@/data/reading";
import { ReadingListItem, ReadingListStatus } from "@/types/data";
import classes from "../Card.module.css";
import { useState } from "react";
import { TbExternalLink } from "react-icons/tb";

const getAnchorColor = (status: ReadingListStatus) => {
  switch (status) {
    case "Finished":
      return "green.5";
    case "Reading":
      return "blue.5";
    case "Almost Finished":
      return "lime.5";
    case "Partially Read":
      return "yellow.5";
    case "Not Started":
      return "gray.5";
  }
};

export const ReadingList = () => {
  return (
    <SimpleGrid cols={{ base: 2, sm: 3, md: 4, lg: 5 }}>
      {readingList.map((item: ReadingListItem, idx: number) => (
        <ReadingListCard key={idx} item={item} />
      ))}
    </SimpleGrid>
  );
};

interface ReadingListCardProps {
  item: ReadingListItem;
}

const ReadingListCard = ({ item }: ReadingListCardProps) => {
  const [focused, setFocused] = useState(false);

  return (
    <Card
      p="md"
      component="a"
      onMouseOver={() => setFocused(true)}
      onMouseOut={() => setFocused(false)}
      href={item.url}
      className={classes.card}
      style={{ cursor: "pointer", aspectRatio: "1 / 1.4" }}
    >
      <Card.Section>
        <Image fill src={item.imageUrl} alt={item.name} />
        <Overlay className="overlay" backgroundOpacity={0.5} hidden={!focused}>
          <Stack
            justify="center"
            align="center"
            style={{
              position: "absolute",
              width: "100%",
              height: "100%",
              padding: "1rem",
            }}
          >
            <TbExternalLink size={24} color="white" />
            <Text size="sm" c="white" fw={500}>
              {item.name}
            </Text>
          </Stack>
        </Overlay>
      </Card.Section>
      <Badge
        size="sm"
        radius="sm"
        color={getAnchorColor(item.status)}
        style={{
          position: "absolute",
          left: "8px",
          bottom: "8px",
          zIndex: 2,
        }}
      >
        {item.status}
      </Badge>
    </Card>
  );
};
