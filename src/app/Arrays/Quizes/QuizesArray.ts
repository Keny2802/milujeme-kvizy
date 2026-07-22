import type { GenericMappingType } from "@/types/Generics/GenericMapping";

type QuizesVariantsType = "slug" | "metadataBase" | "title" | "description" | "openGraph";
type QuizesType = GenericMappingType<QuizesVariantsType>;

// :QuizesType[]
const QuizesArray = [
    {
        metadataBase: "https://milujemekvizy.cz/nabidka-kvizu/kviz-italske-cosa-nostry",
        slug: "/nabidka-kvizu/kviz-italske-cosa-nostry",
        title: "Kvíz Italské Cosa Nostry",
        description: "Zažijte až 120 dobrodružných a napínavých kvízových otázek v Italské mafii Cosa Nostra.",
        openGraph: {
            title: "Kvíz Italské Cosa Nostry | Milujeme Kvízy",
            description: "Zažijte až 120 dobrodružných a napínavých kvízových otázek v Italské mafii Cosa Nostra.",
            images: [
                {
                    url: "/nabidka-kvizu/mafie-v-italii.avif",
                    alt: "Italská mafie Cosa Nostra",
                    width: 1200,
                    height: 630,
                }
            ]
        },
        alternates: {
            canonical: "https://www.milujemekvizy.cz/nabidka-kvizu/kviz-italske-cosa-nostry",
        },
    },
    {
        metadataBase: "https://milujemekvizy.cz/nabidka-kvizu/kviz-2-svetova-valka",
        slug: "/nabidka-kvizu/kviz-2-svetova-valka",
        title: "Kvíz 2. světová válka",
        description: "Zažijte 100 náročných kvízových otázek 2. světovou válkou.",
        openGraph: {
            title: "Kvíz 2. světová válka | Milujeme Kvízy",
            description: "Zažijte 100 náročných kvízových otázek 2. světovou válkou.",
            images: [
                {
                    url: "/nabidka-kvizu/2-svetova-valka.avif",
                    alt: "2. světová válka",
                    width: 1200,
                    height: 630,
                }
            ]
        },
        alternates: {
            canonical: "https://www.milujemekvizy.cz/nabidka-kvizu/2-svetova-valka",
        },
    },
    {
        metadataBase: "https://milujemekvizy.cz/nabidka-kvizu/kviz-americko-italska-mafie",
        slug: "/nabidka-kvizu/kviz-americko-italska-mafie",
        title: "Kvíz Americko-Italská mafie",
        description: "Pusťte se do až 151 náročných, ale zábavných a napínavých kvízových otázek americko italských rodin Bonanno, Colombo, Gambino, Genovese a Luchesse.",
        openGraph: {
            title: "Kvíz Americko-Italská mafie | Milujeme Kvízy",
            description: "Pusťte se do až 151 náročných, ale zábavných a napínavých kvízových otázek americko italských rodin Bonanno, Colombo, Gambino, Genovese a Luchesse.",
            images: [
                {
                    url: "/nabidka-kvizu/kviz-americko-italska-mafie.avif",
                    alt: "Americko Italská mafie",
                    width: 1200,
                    height: 630,
                }
            ]
        },
        alternates: {
            canonical: "https://www.milujemekvizy.cz/nabidka-kvizu/kviz-americko-italska-mafie",
        },
    },
];

export default QuizesArray;