"use client";

import { type FC, Fragment } from "react";
import { useRouter } from "next/navigation";
import { LinkProps } from "react-router-dom";
import clsx from "clsx";

import type { DefaultType } from "@/types/DefaultType";
// import ScoreContext, { useScoreContext } from "@/components/ScoreContext";
import Section from "@/components/Section";
import Flex from "@/components/Flex";
import Photo from "@/components/Photo";
import Text from "@/components/Text";
import Cta from "@/components/Cta";
import ScoreContextProvider, { useScore } from "../context/ScoreContext";

const ctaArray = [
    { href: "/#nabidka-kvizu", title: "Přejít na všechny kvízy", },
    { title: "Hrát znovu", },
];

const Page:FC<DefaultType> = ({
    ...attrs
}) => {
    // const { currentScore } = useScoreContext();
    const router = useRouter();
    // const { score } = useScore();
    
    return (
        <Fragment>
            <Section
            {...attrs}
            className={clsx(
                attrs.className
            )}>
                <Flex
                layoutVariant="mobileOnly"
                horizontalVariant="justifyCenter"
                verticalVariant="itemsCenter">
                    <Photo
                    width={300}
                    height={300}
                    src="/gratulace/gratulace.svg"
                    alt="Gratulace za schopnost dokončení celého kvízu"
                    loading="eager"
                    />
                    <Text
                    textVariant="section"
                    className="uppercase">
                        Velká gratulace
                    </Text>
                    <Text className="text-gray-500">
                        Dokážeš tento kvíz ještě jednou zopakovat? 
                    </Text>
                    <Flex>
                        {ctaArray.map((cta, idx) => {
                            const { href, title } = cta;

                            return (
                                href ? (
                                    <Cta
                                    key={idx}
                                    backgroundVariant="black"
                                    borderBackgroundVariant="violet"
                                    href={href}>
                                        <Text
                                        textVariant="strongBodyText"
                                        className="uppercase">
                                            {title}
                                        </Text>
                                    </Cta>
                                ) : (
                                    <Cta
                                    key={idx}
                                    variant="button"
                                    onClick={() => router.back()}>
                                        <Text
                                        textVariant="strongBodyText"
                                        className="uppercase">
                                            {title}
                                        </Text>
                                    </Cta>
                                )
                            );
                        })}
                    </Flex>
                </Flex>
            </Section>
        </Fragment>
    );
};

export default Page;