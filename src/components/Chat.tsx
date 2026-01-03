"use client";

import { useChat } from "@ai-sdk/react";
import { DefaultChatTransport } from "ai";
import { useState, useRef, useEffect } from "react";
import {
  Paper,
  TextInput,
  ScrollArea,
  Stack,
  Group,
  Text,
  ActionIcon,
  Container,
  Box,
  Avatar,
  Center,
  Title,
} from "@mantine/core";
import { TbSend2 } from "react-icons/tb";
import { useTranslations } from "next-intl";
import { ChatInitialMessageSchema } from "@/types/messages";
import { z } from "zod";

export function Chat() {
  const [input, setInput] = useState("");
  const viewport = useRef<HTMLDivElement>(null);

  const t = useTranslations("Chat");
  const result = z
    .array(ChatInitialMessageSchema)
    .safeParse(t.raw("initialMessages"));
  const initialMessages = result.success ? result.data : [];

  const { messages, sendMessage, status } = useChat({
    transport: new DefaultChatTransport({
      api: "https://portfolio-ai-chat.kitsuyaazuma.workers.dev",
    }),
    messages: initialMessages.map((message, i) => ({
      id: `initial-message-${i}`,
      role: message.role,
      parts: [
        {
          type: "text",
          text: message.text,
        },
      ],
    })),
  });

  useEffect(() => {
    if (viewport.current) {
      viewport.current.scrollTo({
        top: viewport.current.scrollHeight,
        behavior: "smooth",
      });
    }
  }, [messages]);

  const handleSend = () => {
    if (!input.trim()) return;
    sendMessage({
      parts: [{ type: "text", text: input }],
    });
    setInput("");
  };

  const isBusy = status === "submitted" || status === "streaming";

  return (
    <Container pt="xl" id="chat" size="sm">
      <Center my="lg">
        <Title>{t("title")}</Title>
      </Center>
      <ScrollArea.Autosize viewportRef={viewport} mah="60vh" type="auto">
        <Stack gap="md" p="sm">
          {messages.map((message, index) => {
            const isUser = message.role === "user";
            return (
              <Group
                key={index}
                justify={isUser ? "flex-end" : "flex-start"}
                align="flex-start"
                wrap="nowrap"
                gap="xs"
              >
                {!isUser && (
                  <Avatar
                    src="/images/home/icon.webp"
                    radius="xl"
                    color="gray"
                  />
                )}
                <Paper
                  p="sm"
                  radius="lg"
                  bg={isUser ? "green.7" : "gray.1"}
                  c={isUser ? "white" : "black"}
                  maw="80%"
                  withBorder={!isUser}
                >
                  {message.parts.map((part, partIndex) => {
                    if (part.type === "text") {
                      return (
                        <Text
                          key={`${message.id}-text-${partIndex}`}
                          size="sm"
                          style={{ whiteSpace: "pre-wrap" }}
                        >
                          {part.text}
                        </Text>
                      );
                    }
                    return null;
                  })}
                </Paper>
              </Group>
            );
          })}
          {status === "submitted" && (
            <Group justify="flex-start" align="center" gap="xs">
              <Avatar src="/images/home/icon.webp" radius="xl" color="gray" />
              <Text size="sm" c="dimmed">
                {t("thinking")}
              </Text>
            </Group>
          )}
        </Stack>
      </ScrollArea.Autosize>

      <Box p="sm">
        <TextInput
          placeholder={t("placeholder")}
          value={input}
          size="md"
          onChange={(event) => setInput(event.target.value)}
          onKeyDown={(event) => {
            if (
              event.key === "Enter" &&
              !event.shiftKey &&
              !event.nativeEvent.isComposing
            ) {
              event.preventDefault();
              handleSend();
            }
          }}
          style={{ flex: 1 }}
          disabled={isBusy}
          rightSection={
            <ActionIcon
              variant="transparent"
              onClick={handleSend}
              disabled={!input.trim() || isBusy}
            >
              <TbSend2 />
            </ActionIcon>
          }
        />
        <Center pt="xs">
          <Text size="xs" c="dimmed">
            {t("disclaimer")}
          </Text>
        </Center>
      </Box>
    </Container>
  );
}
