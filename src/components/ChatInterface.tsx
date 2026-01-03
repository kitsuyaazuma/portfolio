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

export default function ChatInterface() {
  const [input, setInput] = useState("");
  const viewport = useRef<HTMLDivElement>(null);

  const { messages, sendMessage, status } = useChat({
    transport: new DefaultChatTransport({
      api: "https://portfolio-ai-chat.kitsuyaazuma.workers.dev",
    }),
    messages: [
      {
        id: "assistant0",
        role: "assistant",
        parts: [
          {
            type: "text",
            text: "Hi! I'm AI Azuma. I can answer questions about Kitsuya's background, research, and skills. How can I help you?",
          },
        ],
      },
      {
        id: "user0",
        role: "user",
        parts: [{ type: "text", text: "Who is Kitsuya Azuma?" }],
      },
      {
        id: "assistant1",
        role: "assistant",
        parts: [
          {
            type: "text",
            text: "Kitsuya is a Master's student at Institute of Science Tokyo researching Federated Learning. He is aspiring to be a Platform Engineer.",
          },
        ],
      },
    ],
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
        <Title>ASK ME ANYTHING</Title>
      </Center>
      <ScrollArea.Autosize viewportRef={viewport} mah="60vh" type="auto">
        <Stack gap="md" px="sm">
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
                Thinking...
              </Text>
            </Group>
          )}
        </Stack>
      </ScrollArea.Autosize>

      <Box p="sm">
        <Group gap="xs">
          <TextInput
            placeholder="Ask AI Azuma"
            value={input}
            size="md"
            onChange={(event) => setInput(event.target.value)}
            onKeyDown={(event) => {
              if (event.key === "Enter" && !event.shiftKey) {
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
        </Group>
        <Center>
          <Text size="xs" c="dimmed">
            AI Azuma can make mistakes, so double-check it.
          </Text>
        </Center>
      </Box>
    </Container>
  );
}
