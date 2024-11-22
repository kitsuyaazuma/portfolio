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
  Space,
} from "@mantine/core";
import { useState } from "react";
import { FooterSocial } from "../common/FooterSocial";
import { readingList, ReadingListItem, Status } from "../data/reading";
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

  const blogs = (num: number) => {
    return (
      <>
        {[...Array(num)].map((_, idx) => (
          <Card
            key={idx}
            p="md"
            radius="md"
            component="a"
            href={`https://alvinvin.hatenablog.jp/entry/${idx + 1}`}
            target="_blank"
            rel="noreferrer"
            style={{ cursor: "pointer" }}
            className={classes.card}
          >
            <AspectRatio ratio={1 / 1}>
              <Image
                width="100%"
                src={`/images/blog/${idx + 1}.webp`}
                alt={`blog_${idx + 1}`}
              />
            </AspectRatio>
          </Card>
        ))}
      </>
    );
  };

  const cards = readingList.map((el, idx) => (
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

      <Center mt="xl">
        <Title>TECH BLOG</Title>
      </Center>
      <Center mb="xl">
        <Text color="dimmed">てっく・ざ・ぶろぐ</Text>
      </Center>
      <Container my="xl">
        <SimpleGrid cols={5} breakpoints={[{ maxWidth: "sm", cols: 2 }]}>
          {blogs(9)}
        </SimpleGrid>
      </Container>
      <Space h="xl" />
      <Center mt="xl">
        <Title>READING LIST</Title>
      </Center>
      <Center mb="xl">
        <Text color="dimmed">読書記録</Text>
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
