import { Card, SimpleGrid } from "@mantine/core";
import Image from "next/image";
import { blogCount } from "@/data/blog";
import classes from "./Card.module.css";

export const BlogList = () => {
  return (
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
          }}
          className={classes.card}
        >
          <Image
            fill
            key={idx}
            src={`/images/blog/${idx + 1}.webp`}
            alt={`blog_${idx + 1}`}
            style={{ objectFit: "cover" }}
          />
        </Card>
      ))}
    </SimpleGrid>
  );
};
