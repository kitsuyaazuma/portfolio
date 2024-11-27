import { AspectRatio, Badge, Card, Modal, SimpleGrid } from "@mantine/core";
import Image from "next/image";
import { useState } from "react";
import { readingList, ReadingListItem, Status } from "../data/reading";
import classes from "./Card.module.css";
import { Popup } from "./Popup";

const getAnchorColor = (status: Status) => {
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
            <Image
              fill
              src={el.imageUrl}
              alt={el.name}
              style={{ objectFit: "cover" }}
            />
            <Badge size="sm" radius="sm" color={getAnchorColor(el.status)}>
              {el.status}
            </Badge>
          </Card>
        ))}
      </SimpleGrid>
    </>
  );
};
