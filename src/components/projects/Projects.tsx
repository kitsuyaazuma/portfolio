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
} from "@mantine/core";
import { useState } from "react";
import { FooterSocial } from "../common/FooterSocial";
import { data, DataType } from "./data";
import { Popup } from "./Popup";


export const Projects = () => {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const useStyles = createStyles((theme) => ({
    card: {
      transition: "transform 150ms ease, box-shadow 150ms ease",

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
  const [openedData, setOpenedData] = useState<DataType | null>(null);

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
      <AspectRatio ratio={16 / 9}>
        <Image src={el.images[0]} alt={el.name} />
      </AspectRatio>
      <Text color="dimmed" size="xs" weight={700} mt="md">
        {el.date}
      </Text>
      <Text className={classes.title} mt={5}>
        {el.name}
      </Text>
      <Text color="dimmed" size="xs">
        {el.description}
      </Text>
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
        <Title>PROJECTS</Title>
      </Center>
      <Container my="xl">
        <SimpleGrid
          cols={2}
          breakpoints={[{ maxWidth: "sm", cols: 1 }]}
        >
          {cards}
        </SimpleGrid>
      </Container>
      <FooterSocial />
    </>
  );
};
