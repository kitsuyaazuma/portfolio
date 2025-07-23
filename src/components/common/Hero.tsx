import { Text, Title, Center, Stack } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";

import { useTranslations } from "next-intl";

// ... (imports)

export const Hero = () => {
  const t = useTranslations("Hero");
  const sm = useMediaQuery("(min-width: 768px)");

  return (
    <Stack>
      <Center>
        <Title size={sm ? 60 : 45} c="green.9">
          {t("name")}
        </Title>
      </Center>
      <Center>
        <Text c="dimmed">{t("description")}</Text>
      </Center>
    </Stack>
  );
};
