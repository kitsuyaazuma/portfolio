import {
  AspectRatio,
  Card,
  Title,
  Image,
  Text,
  createStyles,
  Container,
  SimpleGrid,
  Center,
  useMantineColorScheme,
  Modal,
  Badge,
} from "@mantine/core";
import { useState } from "react";
import { FooterSocial } from "../common/FooterSocial";
import { Popup } from "./Popup";
import { data, ReadingListItem, Status } from "./data";

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

export const Archieve = () => {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const useStyles = createStyles((theme) => ({
    card: {
      "&:hover": {
        transform: "scale(1.01)",
        boxShadow: theme.shadows.md,
        backgroundColor:
          colorScheme === "dark"
            ? "rgba(47, 158, 68, 0.2)"
            : "rgba(235, 251, 238, 1)",
      },
    },
    title: {
      fontFamily: `Greycliff CF, ${theme.fontFamily}`,
      fontWeight: 600,
    },
  }));

  const { classes } = useStyles();
  const [openedData, setOpenedData] = useState<ReadingListItem | null>(null);

  const cards = data.map((el, idx) => (
    <Card
      key={idx}
      p="md"
      radius="md"
      component="a"
      onClick={() => setOpenedData(el)}
      className={classes.card}
      style={{ cursor: "pointer" }}
    >
      <AspectRatio ratio={1 / 1.4}>
        <Image src={el.imageUrl} alt={el.name} />
      </AspectRatio>
      <Badge size="sm" radius="sm" color={getAnchorColor(el.status)}>
        {el.status}
      </Badge>
    </Card>
  ));

  return (
    <>
      <Modal
        opened={openedData !== null}
        onClose={() => setOpenedData(null)}
        centered
      >
        {openedData !== null && <Popup data={openedData} />}
      </Modal>
      <Center my="xl">
        <Title>READING LIST</Title>
      </Center>
      <Container my="xl">
        <SimpleGrid cols={4} breakpoints={[{ maxWidth: "sm", cols: 2 }]}>
          {cards}
        </SimpleGrid>
      </Container>
      <FooterSocial />
    </>
  );
};
