import {
    type FC,
    Fragment
} from "react";

import type { DefaultType } from "@/types/DefaultType";
import Section from "@/components/Section";
import Wrapper from "@/components/Wrapper";
import Flex from "@/components/Flex";
import Text from "@/components/Text";
import Cta from "@/components/Cta";
import Photo from "@/components/Photo";

const ctaArray = [
    { backgroundVariant: "black", href: "/nabidka-kvizu#denni-souteze", title: "Denní soutěže" },
    { backgroundVariant: "violet", href: "#nabidka-kvizu", title: "Nabídka kvízů" },
];

const Hero:FC<DefaultType> = ({
    ...attrs
}) => {
    return (
        <Fragment>
            <Section
            {...attrs}
            id="domu">
                <Flex
                layoutVariant="responsiveReverse"
                verticalVariant="itemsCenter">
                    <Wrapper className="max-w-[calc(var(--spacing-3xl)*8)]">
                        <Flex
                        layoutVariant="mobileOnly"
                        horizontalVariant="justifyCenter">
                            <Text
                            textVariant="hero"
                            className="uppercase line-through">
                                hrajte kvízy ještě dnes
                            </Text>
                            <Text className="lg:text-[calc(var(--spacing-sm)/1.09)]">
                                Zabavte se velkolepými kvízy od středověku přes
                                {" "}
                                <Text textVariant="strongBodyText">2. světovou válku</Text> až po <Text textVariant="strongBodyText">americko-italskou mafii</Text>.
                            </Text>
                            <Flex
                            // layoutVariant="desktopOnly"
                            className="w-full">
                                {ctaArray.map((item, idx) => {
                                    const { backgroundVariant, href, title } = item;

                                    return (
                                        <Cta
                                        key={idx}
                                        { ...( backgroundVariant === "black" ?
                                            { backgroundVariant: "black" } :
                                            { backgroundVariant: "violet" } )
                                        }
                                        { ...( idx === 0 && {  borderBackgroundVariant: "violet" } ) }
                                        href={href}>
                                            <Text
                                            textVariant="strongBodyText"
                                            className="uppercase">
                                                {title}
                                            </Text>
                                        </Cta>
                                    );
                                })}
                            </Flex>
                        </Flex>
                    </Wrapper>
                    <Photo
                    src="/logo/logo.png"
                    alt="Hero foto Milujeme Kvízy - mafiánští gangsteři z 30. let 20. století"
                    width={800}
                    height={800}
                    loading="eager"
                    className="object-cover"
                    />
                </Flex>
            </Section>
        </Fragment>
    );
};

export default Hero;