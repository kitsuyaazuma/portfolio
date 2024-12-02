type AboutItem = {
  text: string;
  searchWords: string[];
};

export const abouts: AboutItem[] = [
  {
    text: "都内在住の修士1年生。",
    searchWords: ["修士1年生"],
  },
  {
    text: "大学入学と同時に競技プログラミングを始めたことをきっかけに、個人開発にも興味を持つ。次第に興味は大規模サービス開発に移っていった。",
    searchWords: ["個人開発", "大規模サービス開発"],
  },
  {
    text: "大学ではComputer Visionの研究室に所属し、知識蒸留ベースのFederated Learning（連合学習）の研究を行なった。大学院ではFLに更にフォーカスして研究を行っている。",
    searchWords: ["Computer Vision", "Federated Learning"],
  },
  {
    text: "学生インターンとして大小様々な企業で修行を積んでいる。最近はPlatform EngineeringとMLOpsに興味がある。",
    searchWords: ["学生インターン", "Platform Engineering", "MLOps"],
  },
  {
    text: "2024年はジャーナル投稿とLT登壇が目標。",
    searchWords: ["ジャーナル投稿", "LT登壇"],
  },
];
