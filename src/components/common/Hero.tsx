import { Text, Title, Center, Stack } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";

export const Hero = () => {
  const sm = useMediaQuery("(min-width: 768px)");

  return (
    <Stack>
      <Center>
        <Title size={sm ? 60 : 45} c="green.9">
          Kitsuya Azuma
        </Title>
      </Center>
      <Center>
        <Text c="dimmed">Software Engineer / Engineering Student</Text>
      </Center>
    </Stack>
  );
};
