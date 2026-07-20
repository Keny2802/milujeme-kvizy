import type { GenericMappingType } from "@/types/Generics/GenericMapping";

type QuizesVariantsType = "slug" | "metadataBase" | "title" | "description";
type QuizesType = GenericMappingType<QuizesVariantsType>;

const QuizesArray:QuizesType[] = [
    {
        metadataBase: "https://milujemekvizy.cz/nabidka-kvizu/kviz-italske-cosa-nostry",
        slug: "/nabidka-kvizu/kviz-italske-cosa-nostry",
        title: "Kvíz Italské Cosa Nostry",
        description: "Zažijte až 120 dobrodružných a napínavých kvízových otázek v Italské mafii Cosa Nostra.",
    },
    {
        metadataBase: "https://milujemekvizy.cz/nabidka-kvizu/kviz-2-svetova-valka",
        slug: "/nabidka-kvizu/kviz-2-svetova-valka",
        title: "Kvíz 2. světová válka",
        description: "Zažijte 100 náročných kvízových otázek 2. světovou válkou.",
    },
    {
        metadataBase: "https://milujemekvizy.cz/nabidka-kvizu/kviz-americko-italska-mafie",
        slug: "/nabidka-kvizu/kviz-americko-italska-mafie",
        title: "Kvíz Americko-Italská mafie",
        description: "Pusťte se do až 151 náročných, ale zábavných a napínavých kvízových otázek americko italských rodin Bonanno, Colombo, Gambino, Genovese a Luchesse.",
    },
];

export default QuizesArray;