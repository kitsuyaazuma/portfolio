import { Hero } from "@/components/Hero";
import {
  Anchor,
  Badge,
  Center,
  Container,
  Group,
  Space,
  Text,
  ThemeIcon,
  Title,
} from "@mantine/core";
import { TechBlog } from "@/components/TechBlog";
import { getTranslations } from "next-intl/server";
import { TbBook, TbMapPin } from "react-icons/tb";

export default function PublicationsPage() {
  return (
    <main>
      <Hero />
      <Publications />
    </main>
  );
}

const Publications = async () => {
  const t = await getTranslations("Publications");
  return (
    <>
      <TechBlog />

      <Space h="xl" />

      <Container pt="xl" id="papers">
        <Center my="lg">
          <Title>{t("paperTitle")}</Title>
        </Center>
        {(t.raw("items") as any[]).map((paper, index) => (
          <div key={index}>
            <Anchor
              href={paper.url}
              target="_blank"
              underline="hover"
              c="var(--mantine-color-text)"
            >
              <Text size="xl" fw={700} style={{ lineHeight: 1.2 }}>
                {paper.title}
              </Text>
            </Anchor>
            <Group mb="xs" gap={0}>
              <ThemeIcon variant="transparent" c="dimmed">
                <TbBook />
              </ThemeIcon>
              <Text c="dimmed" size="sm">
                {paper.conference}
              </Text>
              <Badge variant="light" size="sm" ml="xs">
                {paper.year}
              </Badge>
            </Group>
            <Text size="md" mt="sm">
              {paper.text}
            </Text>
          </div>
        ))}
      </Container>

      <Space h="xl" />

      <Container pt="xl" id="talks">
        <Center my="lg">
          <Title>{t("talkTitle")}</Title>
        </Center>
        <Text size="xl" mt="lg" fw={700} style={{ lineHeight: 1.2 }}>
          Beyond Multiprocessing: A Real-World ML Workload Speedup with Python
          3.13+ Free-Threading
        </Text>
        <Group mb="xs" gap={0}>
          <ThemeIcon variant="transparent" c="dimmed">
            <TbMapPin />
          </ThemeIcon>
          <Anchor
            href="https://2025.pycon.jp"
            target="_blank"
            c="dimmed"
            size="sm"
          >
            PyCon JP 2025
          </Anchor>
          <Badge variant="light" size="sm" ml="xs">
            Talk
          </Badge>
        </Group>
        <iframe
          className="speakerdeck-iframe"
          src="https://speakerdeck.com/player/3927e6a7a7c842f3b0a8387459c359d6"
          title="Beyond Multiprocessing: A Real-World ML Workload Speedup with Python 3.13+ Free-Threading"
          style={{
            border: "0px",
            background: "padding-box padding-box rgba(0, 0, 0, 0.1)",
            margin: "0px",
            padding: "0px",
            borderRadius: "6px",
            boxShadow: "rgba(0, 0, 0, 0.2) 0px 5px 40px",
            width: "100%",
            height: "auto",
            aspectRatio: "560 / 315",
          }}
          data-ratio="1.7777777777777777"
        ></iframe>

        <Text size="xl" mt="lg" fw={700} style={{ lineHeight: 1.2 }}>
          研究室サーバーとKubeflowで実践するNotebook as a Service
        </Text>
        <Group mb="xs" gap={0}>
          <ThemeIcon variant="transparent" c="dimmed">
            <TbMapPin />
          </ThemeIcon>
          <Anchor
            href="https://cloudnativedays.jp/cnds2025"
            target="_blank"
            c="dimmed"
            size="sm"
          >
            CloudNative Days Summer 2025
          </Anchor>
          <Badge variant="light" size="sm" ml="xs">
            LT
          </Badge>
        </Group>
        <iframe
          className="speakerdeck-iframe"
          src="https://speakerdeck.com/player/e73ecf1f537a4175b173ed4ec5638a92"
          title="研究室サーバーとKubeflowで実践するNotebook as a Service"
          style={{
            border: "0px",
            background: "padding-box padding-box rgba(0, 0, 0, 0.1)",
            margin: "0px",
            padding: "0px",
            borderRadius: "6px",
            boxShadow: "rgba(0, 0, 0, 0.2) 0px 5px 40px",
            width: "100%",
            height: "auto",
            aspectRatio: "560 / 315",
          }}
          data-ratio="1.7777777777777777"
        ></iframe>

        <Text size="xl" mt="lg" fw={700} style={{ lineHeight: 1.2 }}>
          rootlessコンテナのすゝめ - 研究室サーバーでもできる安全なコンテナ管理
        </Text>
        <Group mb="xs" gap={0}>
          <ThemeIcon variant="transparent" c="dimmed">
            <TbMapPin />
          </ThemeIcon>
          <Anchor
            href="https://cloudnativedays.jp/cnds2025"
            target="_blank"
            c="dimmed"
            size="sm"
          >
            学生と社会人LT会 #2
          </Anchor>
          <Badge variant="light" size="sm" ml="xs">
            LT
          </Badge>
        </Group>
        <iframe
          className="speakerdeck-iframe"
          src="https://speakerdeck.com/player/91f0b01b3794493b80ec663da267e432"
          title="rootlessコンテナのすゝめ - 研究室サーバーでもできる安全なコンテナ管理"
          style={{
            border: "0px",
            background: "padding-box padding-box rgba(0, 0, 0, 0.1)",
            margin: "0px",
            padding: "0px",
            borderRadius: "6px",
            boxShadow: "rgba(0, 0, 0, 0.2) 0px 5px 40px",
            width: "100%",
            height: "auto",
            aspectRatio: "560 / 315",
          }}
          data-ratio="1.7777777777777777"
        ></iframe>
      </Container>
    </>
  );
};
