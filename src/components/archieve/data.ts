export type Status =
  | "Finished"
  | "Reading"
  | "Partially Read"
  | "Almost Finished"
  | "Not Started";

export type ReadingListItem = {
  name: string;
  status: Status;
  url: string;
  imageUrl: string;
};

export const data: ReadingListItem[] = [
  {
    name: "ゼロから学ぶRust　システムプログラミングの基礎から線形型システムまで",
    status: "Almost Finished",
    url: "https://www.kspub.co.jp/book/detail/5301951.html",
    imageUrl: "https://ndlsearch.ndl.go.jp/thumbnail/9784065301951.jpg",
  },
  {
    name: "SOFT SKILLS ソフトウェア開発者の人生マニュアル 第2版",
    status: "Finished",
    url: "https://bookplus.nikkei.com/atcl/catalog/22/S00500/",
    imageUrl: "https://ndlsearch.ndl.go.jp/thumbnail/9784296000500.jpg",
  },
  {
    name: "Podman in Action",
    status: "Partially Read",
    url: "https://developers.redhat.com/e-books/podman-action",
    imageUrl:
      "https://developers.redhat.com/sites/default/files/styles/cheat_sheet_feature/public/Podman%20in%20Action.png.webp",
  },
  {
    name: "効率的なGo ーデータ指向によるGoアプリケーションの性能最適化",
    status: "Finished",
    url: "https://www.oreilly.co.jp//books/9784814400539/",
    imageUrl: "https://ndlsearch.ndl.go.jp/thumbnail/9784814400539.jpg",
  },
  {
    name: "大規模言語モデル入門",
    status: "Finished",
    url: "https://gihyo.jp/book/2023/978-4-297-13633-8",
    imageUrl: "https://ndlsearch.ndl.go.jp/thumbnail/9784297136338.jpg",
  },
  {
    name: "マスタリングTCP/IP　入門編（第6版）",
    status: "Partially Read",
    url: "https://www.ohmsha.co.jp/book/9784274224478/",
    imageUrl: "https://ndlsearch.ndl.go.jp/thumbnail/9784274224478.jpg",
  },
  {
    name: "ゼロから作るDeep Learning ❷",
    status: "Finished",
    url: "https://www.oreilly.co.jp/books/9784873118369/",
    imageUrl: "https://ndlsearch.ndl.go.jp/thumbnail/9784873118369.jpg",
  },
  {
    name: "オブザーバビリティ・エンジニアリング",
    status: "Finished",
    url: "https://www.oreilly.co.jp/books/9784814400126/",
    imageUrl: "https://ndlsearch.ndl.go.jp/thumbnail/9784814400126.jpg",
  },
  {
    name: "入門 監視 ーモダンなモニタリングのためのデザインパターン",
    status: "Finished",
    url: "https://www.oreilly.co.jp/books/9784873118642/",
    imageUrl: "https://ndlsearch.ndl.go.jp/thumbnail/9784873118642.jpg",
  },
  {
    name: "Go言語による分散サービス ー信頼性、拡張性、保守性の高いシステムの構築",
    status: "Finished",
    url: "https://www.oreilly.co.jp/books/9784873119977/",
    imageUrl: "https://ndlsearch.ndl.go.jp/thumbnail/9784873119977.jpg",
  },
  {
    name: "Prometheus実践ガイド クラウドネイティブな監視システムの構築",
    status: "Finished",
    url: "https://booth.pm/ja/items/3907516",
    imageUrl: "https://ndlsearch.ndl.go.jp/thumbnail/9784910313009.jpg",
  },
  {
    name: "［試して理解］Linuxのしくみ ー実験と図解で学ぶOS、仮想マシン、コンテナの基礎知識【増補改訂版】",
    status: "Finished",
    url: "https://gihyo.jp/book/2022/978-4-297-13148-7",
    imageUrl: "https://ndlsearch.ndl.go.jp/thumbnail/9784297131487.jpg",
  },
  {
    name: "Go言語プログラミングエッセンス",
    status: "Finished",
    url: "https://gihyo.jp/book/2023/978-4-297-13419-8",
    imageUrl:
      "https://image.gihyo.co.jp/assets/images/cover/2023/9784297134198.jpg",
  },
  {
    name: "システム設計の面接試験",
    status: "Finished",
    url: "https://www.socym.co.jp/book/1406",
    imageUrl: "https://ndlsearch.ndl.go.jp/thumbnail/9784802614061.jpg",
  },
  {
    name: "ディープラーニングを支える技術 ——「正解」を導くメカニズム［技術基礎］",
    status: "Finished",
    url: "https://gihyo.jp/book/2022/978-4-297-12560-8",
    imageUrl: "https://ndlsearch.ndl.go.jp/thumbnail/9784297125608.jpg",
  },

  {
    name: "Kubernetes完全ガイド 第2版",
    status: "Finished",
    url: "https://book.impress.co.jp/books/1119101148",
    imageUrl: "https://img.ips.co.jp/ij/19/1119101148/1119101148-240x.jpg",
  },
  {
    name: "Kubernetesの知識地図 ——現場での基礎から本番運用まで",
    status: "Almost Finished",
    url: "https://gihyo.jp/book/2023/978-4-297-13573-7",
    imageUrl: "https://ndlsearch.ndl.go.jp/thumbnail/9784297135737.jpg",
  },
  {
    name: "AWSではじめるクラウドセキュリティ: クラウドで学ぶセキュリティ設計/実装",
    status: "Almost Finished",
    url: "https://techiemedia.co.jp/",
    imageUrl: "https://ndlsearch.ndl.go.jp/thumbnail/9784910313030.jpg",
  },
  {
    name: "AWSの基本・仕組み・重要用語が全部わかる教科書",
    status: "Partially Read",
    url: "https://www.sbcr.jp/product/4815607852/",
    imageUrl: "https://ndlsearch.ndl.go.jp/thumbnail/9784815607852.jpg",
  },
  {
    name: "Goならわかるシステムプログラミング 第2版",
    status: "Partially Read",
    url: "https://www.lambdanote.com/products/go-2",
    imageUrl:
      "https://www.lambdanote.com/cdn/shop/products/web-asset-1_240x.jpg?v=1647933491",
  },
  {
    name: "クラウドネイティブで実現する マイクロサービス開発・運用 実践ガイド",
    status: "Partially Read",
    url: "https://gihyo.jp/book/2023/978-4-297-13783-0",
    imageUrl: "https://ndlsearch.ndl.go.jp/thumbnail/9784297137830.jpg",
  },
  {
    name: "しっかり学ぶ数理最適化　モデルからアルゴリズムまで",
    status: "Partially Read",
    url: "https://www.kspub.co.jp/book/detail/5212707.html",
    imageUrl: "https://ndlsearch.ndl.go.jp/thumbnail/9784065212707.jpg",
  },
  {
    name: "データ分析に必須の知識・考え方　統計学入門",
    status: "Partially Read",
    url: "https://www.socym.co.jp/book/1319",
    imageUrl: "https://ndlsearch.ndl.go.jp/thumbnail/9784802613194.jpg",
  },
  {
    name: "Vision Transformer入門",
    status: "Partially Read",
    url: "https://gihyo.jp/book/2022/978-4-297-13058-9",
    imageUrl: "https://ndlsearch.ndl.go.jp/thumbnail/9784297130589.jpg",
  },
  {
    name: "Go言語 100Tips ありがちなミスを把握し、実装を最適化する",
    status: "Partially Read",
    url: "https://book.impress.co.jp/books/1122101133",
    imageUrl: "https://img.ips.co.jp/ij/22/1122101133/1122101133-240x.jpg",
  },
];
