"use client";

import {
    type FC,
    useState,
    useEffect,
    Fragment,
} from "react";

import QuizesCardArray from "@/app/Arrays/QuizesCardArray/QuizesCardArray";

import type { DefaultType } from "@/types/DefaultType";
import Section from "@/components/Section";
import Flex from "@/components/Flex";
import Wrapper from "@/components/Wrapper";
import Text from "@/components/Text";
import Photo from "@/components/Photo";
import Absolute from "@/components/Absolute";
import Cta from "@/components/Cta";
import Grid from "@/components/Grid";

const Quizes:FC<DefaultType> = ({
    ...attrs
}) => {
    const [isResizing, setToResize] = useState<boolean>(false);

    useEffect(() => {
        const setToResizing = () => {
            if (window.innerWidth >= 768) {
                setToResize(true);
            } else {
                setToResize(false);
            };
        };

        window.addEventListener("resize", setToResizing);

        return () => window.addEventListener("resize", setToResizing);
    }, [isResizing]);

    return (
        <Fragment>
            <Section
            {...attrs}
            id="nabidka-kvizu">
                <Flex
                verticalVariant="itemsCenter">
                    <Wrapper className="md:max-w-[calc(var(--spacing-3xl)*8)]">
                        <Flex
                        layoutVariant="mobileOnly"
                        horizontalVariant="justifyBetween">
                            <Flex
                            layoutVariant="mobileOnly"
                            horizontalVariant="justifyCenter">
                                <Text
                                textVariant="section"
                                className="uppercase">
                                    Kompletní kvízy k hraní
                                </Text>
                                <Text>
                                    Můžete si namáhat hlavu u kvízů středověku až po
                                    {" "}
                                    <Text textVariant="strongBodyText">napínavé a akční kvízy 30. až 80. let 20. století americko-italské mafie</Text>.
                                </Text>
                            </Flex>
                        </Flex>
                    </Wrapper>
                </Flex>
                <Wrapper className="max-w-full mt-lg md:mt-xl lg:mt-2xl">
                    <Grid gapVariant="lg">
                        {QuizesCardArray.map((item, idx) => {
                            const { src, alt, title, subheading, href } = item;

                            return (
                                <Wrapper
                                key={idx}
                                className="group relative overflow-hidden max-w-full md:w-max h-full cursor-pointer">
                                    <Photo
                                    width={600}
                                    height={600}
                                    src={src}
                                    alt={alt}
                                    className="max-w-full h-[calc(var(--spacing-3xl)*2.5)] min-h-[calc(var(--spacing-3xl)*4)] object-cover rounded-2xl"
                                    />
                                    <Absolute className="h-full md:translate-y-full p-xs md:p-sm md:h-3/4 md:top-3/12 mb-lg bg-black/50 text-white rounded-2xl md:rounded-b-2xl transition-transform duration-500 ease-in-out md:group-hover:translate-y-0">
                                        <Flex
                                        layoutVariant="mobileOnly"
                                        horizontalVariant={!isResizing ? "justifyCenter" : "justifyStart"}
                                        // verticalVariant={!isResizing ? "itemsCenter" : "itemsStart"}
                                        gapVariant="xs"
                                        className="h-full">
                                            <Text textVariant="card">
                                                {title}
                                        </Text>
                                            <Text>
                                                {subheading}
                                            </Text>
                                            <Cta
                                            href={href}
                                            borderBackgroundVariant="none"
                                            className="uppercase">
                                                <Text>
                                                    Hrát nyní
                                                </Text>
                                            </Cta>
                                        </Flex>
                                    </Absolute>
                                </Wrapper>
                            );
                        })}
                    </Grid>
                </Wrapper>
            </Section>
        </Fragment>
    );
};

export default Quizes;