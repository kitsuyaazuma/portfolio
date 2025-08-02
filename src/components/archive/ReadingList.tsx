"use client";
import { Badge, Card, Modal, SimpleGrid } from "@mantine/core";
import Image from "next/image";
import { useState } from "react";
import { readingList } from "@/data/reading";
import { ReadingListItem, ReadingListStatus } from "@/types/data";
import classes from "./Card.module.css";
import { Popup } from "./Popup";

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
  const [openedData, setOpenedData] = useState<ReadingListItem | null>(null);

  return (
    <>
      <Modal
        opened={openedData !== null}
        onClose={() => setOpenedData(null)}
        centered
      >
        {openedData !== null && <Popup data={openedData} />}
      </Modal>

      <SimpleGrid cols={{ base: 2, sm: 3, md: 4, lg: 5 }}>
        {readingList.map((el, idx) => (
          <Card
            key={idx}
            p="md"
            component="a"
            onClick={() => setOpenedData(el)}
            className={classes.card}
            style={{ cursor: "pointer", aspectRatio: "1 / 1.4" }}
          >
            <Card.Section>
              <Image fill src={el.imageUrl} alt={el.name} />
            </Card.Section>
            <Badge
              size="sm"
              radius="sm"
              color={getAnchorColor(el.status)}
              style={{
                position: "absolute",
                left: "8px",
                bottom: "8px",
                zIndex: 2,
              }}
            >
              {el.status}
            </Badge>
          </Card>
        ))}
      </SimpleGrid>
    </>
  );
};
