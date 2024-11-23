type pickupItemButton = {
  text: string;
  url: string;
};

type pickupItem = {
  title: string;
  textList: string[];
  searchWordsList: string[][];
  buttons: pickupItemButton[];
  imageUrl: string;
};

export const pickups: pickupItem[] = [
  {
    title: "『ReactではじめるChrome拡張開発入門』",
    textList: [
      "体系的なドキュメントがなかったReactとTypeScriptによるChrome拡張機能開発を入門書にまとめて公開。",
      "ハンズオン形式でDeepLのような実践的な翻訳Chrome拡張機能を開発しながら学ぶ。",
      "ZennのTrending Books（2023年2月）で1位を獲得した。2024年2月に改訂版を公開。",
    ],
    searchWordsList: [
      ["ReactとTypeScriptによるChrome拡張機能開発"],
      ["ハンズオン形式"],
      ["1位を獲得"],
    ],
    buttons: [
      {
        text: "Zennで本を読む",
        url: "https://zenn.dev/alvinvin/books/chrome_extension",
      },
    ],
    imageUrl: "images/home/zenn.webp",
  },
  {
    title:
      "『クラウドにおけるコスト管理のためのリソースラベル監視ツールの開発』",
    textList: [
      "サイバーエージェントでのインターンシップ生としての取り組みがDevelopers Blogで紹介された。",
      "ABEMAの大規模なクラウド環境のコスト管理を楽にするため、リソースラベルを監視するツールを開発した。",
      "ソースコードとデプロイ用のTerraformをGitHubで公開中。",
    ],
    searchWordsList: [
      ["サイバーエージェント"],
      ["大規模なクラウド環境", "リソースラベルを監視"],
      ["GitHubで公開中"],
    ],
    buttons: [
      {
        text: "ブログを読む",
        url: "https://developers.cyberagent.co.jp/blog/archives/43627/",
      },
    ],
    imageUrl: "images/home/cyberagent.webp",
  },
  {
    title:
      "『連合学習の通信量を削減するためのEnergyスコアを利用した知識蒸留手法の検討』",
    textList: [
      "広島大学で開催されたIEICE（電子情報通信学会）総合大会2024の学生ポスターセッションで優秀ポスター賞（上位7%）を受賞。",
      "蒸留ベースの連合学習手法において十分に学習されたデータに対する予測のみを集約するため、初めて分布外検出スコアを取り入れ、通信量の削減とともに学習の効率化に成功した。",
      "発表内容をさらに発展させ、卒業論文として執筆した。",
    ],
    searchWordsList: [
      ["IEICE", "学生ポスターセッション", "優秀ポスター賞"],
      ["連合学習", "分布外検出"],
      ["卒業論文"],
    ],
    buttons: [
      {
        text: "プロジェクトページへ",
        url: "https://kitsuya0828.github.io/DSFLplus/",
      },
      {
        text: "受賞ページへ",
        url: "https://www.ieice.org/jpn_r/junior/poster_session_awards_2024.html",
      },
    ],
    imageUrl: "images/home/ieice.webp",
  },
  {
    title:
      "『OOMしたCronJobのメモリ制限を「いい感じ」に増やし、不必要な課金・障害対応を減らす』",
    textList: [
      "エムスリーでのインターンとしての取り組みがテックブログで紹介された。",
      "KubernetesのCronJobでOOMが発生した時に「いい感じ」にメモリ制限を増加させてくれるCustom Controllerであるbroomを開発し、クラウド課金と障害対応の両側面から課題解決を目指した。",
      "broomはOSSとしてGitHubで公開し、現在も継続して開発中。",
    ],
    searchWordsList: [
      ["エムスリー"],
      ["CronJobでOOMが発生", "broom"],
      ["OSSとしてGitHubで公開"],
    ],
    buttons: [
      {
        text: "テックブログを読む",
        url: "https://www.m3tech.blog/entry/2024/04/12/110000",
      },
    ],
    imageUrl: "images/home/m3.webp",
  },
  {
    title: "『ログ基盤のFluentdをFluent Bitに移行して監視ツールを実装した話』",
    textList: [
      "ミラティブでのインターンとしての取り組みがテックブログで紹介された。",
      "既存の基盤のログ欠損の原因解明、FluentdからFluent Bitへの移行、Fluent Bit監視ツールの実装などを丁寧にまとめた。",
      "はてなブックマーク（テクノロジー）のホットエントリーで2位を獲得した。",
    ],
    searchWordsList: [
      ["ミラティブ"],
      ["ログ欠損の原因解明", "Fluent Bitへの移行"],
      ["2位を獲得"],
    ],
    buttons: [
      {
        text: "テックブログを読む",
        url: "https://tech.mirrativ.stream/entry/log-fluent-bit-monitor",
      },
    ],
    imageUrl: "images/home/mirrativ.webp",
  },
];
