export type ExperienceItem = {
  title: string;
  titleUrl: string;
  details: string[];
  skills: string[];
  isCurrent: boolean;
  category: ExperienceCategory;
};

export type ExperienceCategory = "Internship" | "Education" | "Award";

export const experiences: ExperienceItem[] = [
  {
    title: "株式会社メルカリ",
    titleUrl: "https://about.mercari.com/",
    details: ["2025年1月 -　Internship (Software Engineer, Web Platform)"],
    skills: ["TypeScript", "Kubernetes", "Google Cloud"],
    isCurrent: true,
    category: "Internship",
  },
  {
    title: "東京科学大学（旧：東京工業大学）",
    titleUrl: "https://www.isct.ac.jp/ja",
    details: ["2024年4月 -　工学院 情報通信系", "2024年4月 -　西尾研究室"],
    skills: ["情報通信", "機械学習", "連合学習"],
    isCurrent: true,
    category: "Education",
  },
  {
    title: "株式会社ミラティブ",
    titleUrl: "https://www.mirrativ.co.jp/",
    details: ["2024年2月 - 2024年6月　インターン（インフラエンジニア）"],
    skills: ["Go", "Linux", "Fluentd", "Fluent Bit"],
    isCurrent: false,
    category: "Internship",
  },
  {
    title: "エムスリー株式会社",
    titleUrl: "https://corporate.m3.com/",
    details: ["2024年3月　インターン（MLOpsエンジニア @AI・機械学習チーム）"],
    skills: ["Go", "Kubernetes", "Google Cloud"],
    isCurrent: false,
    category: "Internship",
  },
  {
    title: "東北大学",
    titleUrl: "https://www.tohoku.ac.jp/japanese/",
    details: [
      "2020年4月 - 2024年3月　工学部電気情報物理工学科",
      "2023年4月 - 2024年3月　大町研究室",
    ],
    skills: ["情報工学", "機械学習", "画像処理"],
    isCurrent: false,
    category: "Education",
  },
  {
    title: "株式会社サイバーエージェント",
    titleUrl: "https://www.cyberagent.co.jp/",
    details: [
      "2023年9月　次世代トップエンジニア創出インターンシップ ACE（最優秀チーム賞）",
    ],
    skills: ["TypeScript", "MySQL", "GraphQL", "AWS"],
    isCurrent: false,
    category: "Internship",
  },
  {
    title: "ヤフー株式会社",
    titleUrl: "https://www.lycorp.co.jp",
    details: [
      "2023年8月　インターン（2023 Summer Internship クラウドインフラ開発 @クラウドプラットフォーム本部 ）",
    ],
    skills: ["Linux", "OpenStack", "Observability", "OpenObserve"],
    isCurrent: false,
    category: "Internship",
  },
  {
    title: "株式会社サイバーエージェント",
    titleUrl: "https://www.cyberagent.co.jp/",
    details: ["2023年7月　インターン（CA Tech JOB @Abema Cloud Platform）"],
    skills: ["Go", "Google Cloud", "AWS", "Terraform"],
    isCurrent: false,
    category: "Internship",
  },
  {
    title: "Be Doctor Consulting株式会社",
    titleUrl: "http://be-doctor.com/",
    details: ["2022年11月 - 2023年4月　インターン（業務委託）"],
    skills: ["React", "GraphQL", "AWS", "Terraform"],
    isCurrent: false,
    category: "Internship",
  },
  {
    title: "JPHACKS 2022",
    titleUrl: "https://jphacks.com/2022/result/",
    details: [
      "2022年10月 - 2022年11月　ハッカソン（イノベーター認定、スポンサー賞×3）",
    ],
    skills: ["React", "TypeScript", "Firebase"],
    isCurrent: false,
    category: "Award",
  },
  {
    title: "株式会社Langsmith",
    titleUrl: "https://corp.langsmith.co.jp/",
    details: ["2022年4月 - 2023年4月　インターン（フロントエンドエンジニア）"],
    skills: ["React", "TypeScript", "Next.js", "Tailwind CSS"],
    isCurrent: false,
    category: "Internship",
  },
  {
    title: "学校法人角川ドワンゴ学園",
    titleUrl: "https://nnn.ed.jp/course/net_commute/",
    details: ["2021年4月 - 2022年11月　インターン（プログラミングTA）"],
    skills: ["Premiere Pro", "Photoshop", "Illustrator", "JavaScript"],
    isCurrent: false,
    category: "Internship",
  },
  {
    title: "JPHACKS 2021",
    titleUrl: "https://jphacks.com/2021/result/",
    details: [
      "2021年10月 - 2021年11月　ハッカソン（審査員特別賞、イノベーター認定、スポンサー賞×5）",
    ],
    skills: ["Python", "機械学習"],
    isCurrent: false,
    category: "Award",
  },
  {
    title: "楽天株式会社",
    titleUrl: "https://corp.rakuten.co.jp/",
    details: ["2022年8月　インターン（夏の陣2022 新規プロトタイプ開発コース）"],
    skills: ["Ruby on Rails", "Ruby", "Docker"],
    isCurrent: false,
    category: "Internship",
  },
  {
    title: "群馬県立前橋高等学校",
    titleUrl: "https://maebashi-hs.gsn.ed.jp/",
    details: ["2017年4月 - 2020年3月"],
    skills: [],
    isCurrent: false,
    category: "Education",
  },
  {
    title: "International Science School 2019 - The University of Sydney",
    titleUrl:
      "https://www.sydney.edu.au/science/industry-and-community/community-engagement/international-science-school.html",
    details: ["2019年7月　オーストラリア科学奨学生"],
    skills: [],
    isCurrent: false,
    category: "Education",
  },
];
