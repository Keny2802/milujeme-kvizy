import { cardArray } from "@/sections/Quizes";

type Props = {
    params: Promise<{ slug: string }>;
};

const AmericanMafiaPage = async ({ params }: Props) => {
    const currentPathName = (await params).slug;

    const currentPage = cardArray.find((page) => {
        return page.href === currentPathName;
    });

    const americanMafiaPage = currentPage?.href === "/nabidka-kvizu/kviz-americko-italska-mafie";
};

export default AmericanMafiaPage;