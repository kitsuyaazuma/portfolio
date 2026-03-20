import { Card, Center, Container, SimpleGrid, Title } from "@mantine/core";
import Image from "next/image";
import { blogCount } from "@/data/blog";
import classes from "./Card.module.css";
import { getTranslations } from "next-intl/server";

export const TechBlog = async () => {
  const t = await getTranslations("Publications");
  return (
    <Container pt="xl" id="tech-blog">
      <Center my="lg">
        <Title>{t("blogTitle")}</Title>
      </Center>
      <SimpleGrid cols={{ base: 2, sm: 3, md: 4, lg: 5 }}>
        {[...Array(blogCount)].map((_, idx) => (
          <Card
            p="md"
            key={idx}
            component="a"
            href={`https://alvinvin.hatenablog.jp/entry/${idx + 1}`}
            target="_blank"
            rel="noreferrer"
            style={{
              cursor: "pointer",
              aspectRatio: "1 / 1",
              boxShadow: "5px 5px 10px rgba(0, 0, 0, 0.1)",
              position: "relative",
            }}
            className={classes.card}
          >
            <Image
              fill
              key={idx}
              src={`/images/blog/${idx + 1}.webp`}
              alt={`blog_${idx + 1}`}
              sizes="(max-width: 576px) 50vw, (max-width: 768px) 33vw, (max-width: 992px) 25vw, 20vw"
              style={{ objectFit: "cover" }}
            />
          </Card>
        ))}
      </SimpleGrid>
    </Container>
  );
};
