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
        name: "VRooM",
        date: "November 2022",
        description: "3Dアバターが作業を見守ってくれるアプリ",
        skills: ["React", "TypeScript", "Next.js"],
        links: [
            {name: "GitHub", url: "https://github.com/jphacks/A_2207"},
            {name: "Webアプリ", url: "https://jphacks-2022-4839e.web.app/"}
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
