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
} from "@mantine/core";
import { FooterSocial } from "../common/FooterSocial";
import { data } from "./data";

// const mockdata = [
//   {
//     title: "【JPHACKS 2022】 Innovator認定 & MIRAISE賞",
//     image: "/imgs/JPHACKS2022_resized.jpeg",
//     url: "https://jphacks.com/2022/result/innovator/#:~:text=%E3%81%9F%E3%83%81%E3%83%BC%E3%83%A0%E3%81%A7%E3%81%99%E3%80%82-,VRooM%20(A_2207%3A%E3%81%8F%E3%81%BE%E3%81%95%E3%82%93),-Hacking%20Sprint%20A",
//     date: "November 2022",
//   },
//   {
//     title: "【インターン】 Be Doctor Consulting 株式会社",
//     image: "/imgs/BeDoctor.jpeg",
//     url: "https://www.wantedly.com/companies/company_1306143",
//     date: "November 2022 ~",
//   },
//   {
//     title: "【インターン】 Langsmith 株式会社",
//     image: "/imgs/LangsmithEditor.png",
//     url: "https://corp.langsmith.co.jp/",
//     date: "April 2022 ~",
//   },
//   {
//     title: "【JPHACKS 2021】 審査員特別賞 & Innovator認定 & アドソル日進株式会社賞 & インフィニオンテクノロジーズジャパン株式会社賞 & 株式会社インテリジェントウェイブ賞 & ノキアソリューションズ&ネットワークス合同会社賞",
//     image: "/imgs/JPHACKS2021.png",
//     url: "https://jphacks.com/2021/result/innovator/#:~:text=%E5%A7%94%E5%93%A1%E7%89%B9%E5%88%A5%E8%B3%9E-,Blicky%20(F_2103%3A%E3%82%A6%E3%83%9E%E3%82%B7%E3%82%AB%E3%82%A6%E3%82%B7),-Hacking%20Sprint%20F",
//     date: "November 2021",
//   },
// ];

export const Projects = () => {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const useStyles = createStyles((theme) => ({
    card: {
      transition: "transform 150ms ease, box-shadow 150ms ease",
  
      "&:hover": {
        transform: "scale(1.01)",
        boxShadow: theme.shadows.md,
        backgroundColor: colorScheme === "dark" ? "rgba(47, 158, 68, 0.2)" : "rgba(235, 251, 238, 1)",
      },
    },
    title: {
      fontFamily: `Greycliff CF, ${theme.fontFamily}`,
      fontWeight: 600,
    },
  }));

  const { classes } = useStyles();

  const cards = data.map((el, idx) => (
    <Card
      key={idx}
      p="md"
      radius="md"
      component="a"
      onClick={() => {}}
      className={classes.card}
    >
      <AspectRatio ratio={1920 / 1080}>
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
      <Center my="xl">
        <Title>PROJECTS</Title>
      </Center>
      <Container my="xl">
        <SimpleGrid cols={2} breakpoints={[{ maxWidth: "sm", cols: 1 }]}>
          {cards}
        </SimpleGrid>
      </Container>
      <FooterSocial />
    </>
  );
};
