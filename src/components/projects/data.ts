export type LinkType = {
    name: string
    url: string
}

export type DataType = {
    name: string
    date: string
    description: string
    skills: string[]
    links: LinkType[]
    images: string[]
    impressions: string
}

export const data: DataType[] = [
    {
        name: "Image Processing 100",
        date: "Under Development",
        description: "画像処理100本ノックのリアルタイムWebアプリ",
        skills: ["Docker", "Python", "FastAPI", "React", "TypeScript", "Next.js"],
        links: [
            {name: "GitHub", url: "https://github.com/Kitsuya0828/Image-Processing-100"},
            {name: "Webアプリ", url: "image-processing-100.vercel.app/"},
        ],
        images: [
            "/imgs/projects/ImageProcessing100_1.png",
            "/imgs/projects/ImageProcessing100_2.png",
        ],
        impressions: "どうせ画像処理100本ノックをやるなら、誰でも気軽に実行できれば便利だと思って開発中。〇〇100本ノックで共通して使えそう。"
    },
    {
        name: "VRooM",
        date: "November 2022",
        description: "3Dアバターが作業を見守ってくれるアプリ",
        skills: ["React", "TypeScript", "Next.js"],
        links: [
            {name: "GitHub", url: "https://github.com/jphacks/A_2207"},
            {name: "Webアプリ", url: "https://jphacks-2022-4839e.web.app/"},
            {name: "JPHACKS 2022", url: "https://jphacks.com/information/result-report2022/"}
        ],
        images: [
            "/imgs/projects/VRooM_1.jpeg",
        ],
        impressions: "JPHACKS2022で大学の先輩と開発したアプリ。あなたを励ます、好きなアバターをアップロードしてみてください。"
    },
    {
        name: "Space Invaders Python",
        date: "November 2022",
        description: "ドットから作った大人気シューティングゲーム",
        skills: ["Python"],
        links: [
            {name: "GitHub", url: "https://github.com/Kitsuya0828/Space-Invaders-Python"}
        ],
        images: [
            "/imgs/projects/SpaceInvadersPython_1.png",
            "/imgs/projects/SpaceInvadersPython_2.png",
        ],
        impressions: "ラズパイの学生実験中に開発したゲーム。なんとPythonの標準ライブラリのみでコマンドラインで遊べます。"
    },
    {
        name: "Rubik's Cube on Browser",
        date: "November 2022",
        description: "いつでもどこでも遊べるルービックキューブ",
        skills: ["React", "TypeScript"],
        links: [
            {name: "GitHub", url: "https://github.com/Kitsuya0828/Rubiks-Cube"},
            {name: "Webサイト(PC)", url: "https://azuma-rubiks-cube.netlify.app/"},
        ],
        images: [
            "/imgs/projects/RubiksCube_1.png",
        ],  
        impressions: "ブラウザ上でも滑らかなスピードキューブ体験を。開発途中なので、乞うご期待。"
    },
    {
        name: "Netflix Clone",
        date: "October 2022",
        description: "一見、ネトフリに見えて、ただ推しを紹介するだけのサイト",
        skills: ["React", "TypeScript"],
        links: [
            {name: "GitHub", url: "https://github.com/Kitsuya0828/React-Netflix-clone"},
            {name: "Webサイト", url: "https://react-netflix-clone-kitsuya0828.vercel.app/"},
        ],
        images: [
            "/imgs/projects/NetflixClone_1.png",
            "/imgs/projects/NetflixClone_2.png",
        ],  
        impressions: "初めてのReact制作物。友達に今期見てるアニメを紹介するときに重宝しています。"
    },
    {
        name: "PoiNe!",
        date: "September 2022",
        description: "新感覚モノマネ採点アプリ",
        skills: ["Python", "Streamlit"],
        links: [
            {name: "GitHub", url: "https://github.com/Kitsuya0828/Inpersonation-App"},
            {name: "YouTube", url: "https://youtu.be/9TJqbuCcNpg"},
            {name: "Webアプリ", url: "kitsuya0828-inpersonation-app-home-aaa1x7.streamlitapp.com/"},
            {name: "Digital Hack Day 2022", url: "https://hackday.yahoo.co.jp/"}
        ],
        images: [
            "/imgs/projects/PoiNe_2.jpeg",
            "/imgs/projects/PoiNe_1.png",
        ],  
        impressions: "お題を選んで録音すると、声の特徴量からモノマネを評価してくれます。ハッカソンで開発してボロ負けしました。"
    },
    {
        name: "Lecapy",
        date: "April 2022",
        description: "講義動画をスライドPDFに自動変換するアプリ",
        skills: ["Python", "Streamlit"],
        links: [
            {name: "GitHub", url: "https://github.com/Kitsuya0828/Lecture-Capture-PDF"},
            {name: "Qiita", url: "https://qiita.com/adumaru0828/items/3043d6a668cc7d4ae0e0"},
            {name: "YouTube", url: "https://www.youtube.com/watch?v=-df1Wrm1CQ4"},
            {name: "Webアプリ", url: "https://kitsuya0828-lecapy-app-ev7sde.streamlit.app/"}
        ],
        images: [
            "/imgs/projects/Lecapy_1.avif",
            "/imgs/projects/Lecapy_2.avif",
        ],  
        impressions: "講義スライドをアップロードしてくれない授業のために開発。ビデオから、一瞬で良さげなスライドに。"
    },
    {
        name: "Blicky",
        date: "November 2021",
        description: "手と目をトラッキングしてくれるバーチャルマウス",
        skills: ["Python"],
        links: [
            {name: "GitHub", url: "https://github.com/jphacks/F_2103"},
            {name: "YouTube", url: "https://www.youtube.com/watch?v=XIHMB315h9A"},
            {name: "JPHACKS 2022", url: "https://jphacks.com/information/result-report2021/"}
        ],
        images: [
            "/imgs/projects/Blicky_1.png",
            "/imgs/projects/Blicky_2.png",
            "/imgs/projects/Blicky_3.png",
            "/imgs/projects/Blicky_4.png",
        ],
        impressions: "JPHACKS2021で一人寂しく開発したアプリ。アイデアが評価されて、スポンサー賞をたくさん頂いた。"
    },
    {
        name: "SkiMee",
        date: "October 2021",
        description: "Zoom/Google Meet 自動退出アプリ",
        skills: ["Python"],
        links: [
            {name: "GitHub", url: "https://github.com/Kitsuya0828/SkiMee"},
            {name: "Googleサイト", url: "https://sites.google.com/view/skimee/home"},
            {name: "YouTube①", url: "https://www.youtube.com/watch?v=m62d0Yqtca4"},
            {name: "YouTube②", url: "https://www.youtube.com/watch?v=G6qdD7962H0"}
        ],
        images: [
            "/imgs/projects/SkiMee_1.png",
            "/imgs/projects/SkiMee_2.png",
        ],  
        impressions: "コロナ禍で急速に普及したオンライン会議。退屈な会議中に居眠りしても勝手に退出してくれるようなサービスを作りました。"
    },
]
