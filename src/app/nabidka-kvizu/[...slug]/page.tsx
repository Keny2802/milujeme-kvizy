import {
    Fragment
} from "react";
import { Metadata } from "next";

import Content from "./Content";
import QuizesArray from "@/app/Arrays/Quizes/QuizesArray";

type Props = {
    params: Promise<{ slug: string }>;
};

export const generateMetadata = async ({ params }: Props):Promise<Metadata> => {
    const currentSlug = (await params).slug;

    const currentPage = QuizesArray.find((page) => {
        const pageSlug = page.slug;

        return `/nabidka-kvizu/${currentSlug}` === pageSlug;
    });

    return {
        metadataBase: currentPage?.metadataBase,
        title: currentPage?.title,
        description: currentPage?.description,
        openGraph: {
            title: currentPage?.openGraph.title,
            description: currentPage?.openGraph.description,
            images: currentPage?.openGraph.images,
        },
        alternates: {
            canonical: currentPage?.alternates.canonical,
        },
    };
};

const Page = () => {
    return (
        <Fragment>
            <Content />
        </Fragment>
    );
};

export default Page;