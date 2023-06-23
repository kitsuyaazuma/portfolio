import { Text, Title, Center, Stack } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";

export const Hero = () => {
  const sm = useMediaQuery("(min-width: 768px)");

  return (
    <>
      <Stack>
        <Center>
          <Title
            size={sm ? 60 : 45}
            variant="gradient"
            gradient={{ from: "green.9", to: "green.7", deg: 45 }}
          >
            Kitsuya Azuma
          </Title>
        </Center>
        <Center>
          <Text color="dimmed">
            Software Engineer / Engineering Student
          </Text>
        </Center>
      </Stack>
    </>
  );
};
