import type { ArticleMetadataItem } from "../types/data";

export const articleMetadata: ArticleMetadataItem[] = [
  {
    url: "https://arxiv.org/abs/2406.12045",
    title:
      "$τ$-bench: A Benchmark for Tool-Agent-User Interaction in Real-World Domains",
    description:
      "Existing benchmarks do not test language agents on their interaction with human users or ability to follow domain-specific rules, both of which are vital for deploying them in real world applications. We propose $τ$-bench, a benchmark emulating dynamic conversations between a user (simulated by language models) and a language agent provided with domain-specific API tools and policy guidelines. We employ an efficient and faithful evaluation process that compares the database state at the end of a conversation with the annotated goal state. We also propose a new metric (pass^k) to evaluate the reliability of agent behavior over multiple trials. Our experiments show that even state-of-the-art function calling agents (like gpt-4o) succeed on <50% of the tasks, and are quite inconsistent (pass^8 <25% in retail). Our findings point to the need for methods that can improve the ability of agents to act consistently and follow rules reliably.",
    imageUrl: "https://arxiv.org/static/browse/0.3.4/images/arxiv-logo-fb.png",
  },
  {
    url: "https://gist.github.com/karpathy/442a6bf555914893e9891c11519de94f",
    title: "llm-wiki",
    description:
      "llm-wiki. GitHub Gist: instantly share code, notes, and snippets.",
    imageUrl:
      "https://github.githubassets.com/assets/gist-og-image-54fd7dc0713e.png",
  },
  {
    url: "https://cloud.google.com/blog/products/data-analytics/how-the-open-knowledge-format-can-improve-data-sharing",
    title:
      "How the Open Knowledge Format can improve data sharing | Google Cloud Blog",
    description:
      "Learn how the Open Knowledge Format helps secure data sharing and improves collaboration across teams with standardized documentation.",
    imageUrl:
      "https://storage.googleapis.com/gweb-cloudblog-publish/images/09_-_Data_Analytics_tFH57V6.max-2600x2600.jpg",
  },
  {
    url: "https://arxiv.org/abs/2410.07869",
    title: "Benchmarking Agentic Workflow Generation",
    description:
      "Large Language Models (LLMs), with their exceptional ability to handle a wide range of tasks, have driven significant advancements in tackling reasoning and planning tasks, wherein decomposing complex problems into executable workflows is a crucial step in this process. Existing workflow evaluation frameworks either focus solely on holistic performance or suffer from limitations such as restricted scenario coverage, simplistic workflow structures, and lax evaluation standards. To this end, we introduce WorfBench, a unified workflow generation benchmark with multi-faceted scenarios and intricate graph workflow structures. Additionally, we present WorfEval, a systemic evaluation protocol utilizing subsequence and subgraph matching algorithms to accurately quantify the LLM agent's workflow generation capabilities. Through comprehensive evaluations across different types of LLMs, we discover distinct gaps between the sequence planning capabilities and graph planning capabilities of LLM agents, with even GPT-4 exhibiting a gap of around 15%. We also train two open-source models and evaluate their generalization abilities on held-out tasks. Furthermore, we observe that the generated workflows can enhance downstream tasks, enabling them to achieve superior performance with less time during inference. Code and dataset are available at https://github.com/zjunlp/WorfBench.",
    imageUrl: "https://arxiv.org/static/browse/0.3.4/images/arxiv-logo-fb.png",
  },
  {
    url: "https://www.geoffreylitt.com/2026/07/02/understanding-is-the-new-bottleneck.html",
    title: "Understanding is the new bottleneck",
    description:
      "Agents can write code faster than we can absorb it. Here's why it still matters for humans to understand what they build — and some techniques for doing that efficiently: explainer docs, quizzes, micro-worlds, and shared spaces.",
    imageUrl:
      "https://geoffreylitt.com/images/talks/understanding-bottleneck/card.jpg",
  },
  {
    url: "https://www.anthropic.com/engineering/demystifying-evals-for-ai-agents",
    title: "Demystifying evals for AI agents",
    description: "Demystifying evals for AI agents",
    imageUrl:
      "https://cdn.sanity.io/images/4zrzovbb/website/412be842c5c6bae6b4bcd515c191b0aa5015e05f-2400x1260.png",
  },
  {
    url: "https://www.romaglushko.com/blog/k8s-gateway-api/",
    title: "Kubernetes Gateway API - Blog by Roman Glushko",
    description:
      "Why Ingress Is Being Replaced and Which Gateway Controller to Pick",
    imageUrl:
      "https://www.romaglushko.com/blog/k8s-gateway-api/ani-adigyozalyan-RudjLs7spas-unsplash.jpg",
  },
];
