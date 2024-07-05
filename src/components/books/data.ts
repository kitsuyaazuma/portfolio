export type LinkType = {
  name: string;
  url: string;
};

export type DataType = {
  name: string;
  date: string;
  status: string;
  description: string;
  skills: string[];
  links: LinkType[];
  images: string[];
  impressions: string;
};

export const data: DataType[] = [
  {
    name: "Lab GPU Dashboard",
    date: "October 2023",
    status: "In Progress",
    description: "研究室のGPUサーバー群の監視ダッシュボード",
    skills: ["Go", "Prometheus", "Grafana"],
    links: [
      {
        name: "GitHub",
        url: "https://github.com/Kitsuya0828/nvidia_gpu_exporter_index",
      },
    ],
    images: ["https://ndlsearch.ndl.go.jp/thumbnail/9784274224478.jpg"],
    impressions:
      "Prometheus&Grafanaの勉強がてら、研究室のサーバー監視基盤をオンプレミスに構築。開発は楽しかったが多分あまり利用されていない。",
  },
  {
    name: "Notion Google Calendar Sync",
    date: "September 2023",
    status: "In Progress",
    description: "NotionのカレンダーとGoogle Calendarの相互同期ツール",
    skills: ["Go", "Terraform", "Google Cloud"],
    links: [
      {
        name: "GitHub",
        url: "https://github.com/Kitsuya0828/notion-google-calendar-sync",
      },
    ],
    images: [
      "https://github.com/Kitsuya0828/notion-google-calendar-sync/raw/main/docs/imgs/calendar-properties-sync.jpeg",
      "https://github.com/Kitsuya0828/notion-google-calendar-sync/raw/main/docs/imgs/notion-google-calendar-sync.jpeg",
    ],
    impressions:
      "Notion便利だけどスマホでカレンダーが見にくい！小さな動機から生まれた同期。クラウドデプロイのIaCまで完備。（※ 2024年1月にNotion Calendarがリリースされたため利用は非推奨）",
  },
];
