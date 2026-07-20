import {
    type FC,
    Fragment
} from "react";
import { PhoneIcon, EnvelopeIcon, DocumentIcon } from "@heroicons/react/24/solid";

import type { DefaultType } from "@/types/DefaultType";
import Section from "@/components/Section";
import Flex from "@/components/Flex";
import Wrapper from "@/components/Wrapper";
import Text from "@/components/Text";
import List from "@/components/List";
import ListItem from "@/components/ListItem";
import Anchor from "@/components/Anchor";

export const contactArray = [
    { key: "tel", heading: "Telefonní číslo", href: "tel:+420737007626", title: "+420 737 007 626" },
    { key: "email", heading: "E-mail", href: "mailto:info@milujemekvizy.cz", title: "info@milujemekvizy.cz" },
    { key: "ico", heading: "IČO", title: "21 07 98 20" },
];

const Contact:FC<DefaultType> = ({
    ...attrs
}) => {
    return (
        <Fragment>
            <Section
            {...attrs}
            id="kontakt">
                <Flex
                verticalVariant="itemsCenter">
                    <Wrapper className="max-w-[calc(var(--spacing-3xl)*8)]">
                        <Flex
                        layoutVariant="mobileOnly"
                        horizontalVariant="justifyBetween">
                            <Flex
                            layoutVariant="mobileOnly"
                            horizontalVariant="justifyCenter">
                                <Text
                                textVariant="section"
                                className="uppercase">
                                    Kontakt
                                </Text>
                                <Text>
                                    Máte dotaz nebo s námi chcete spolupracovat? Neváhejte se nám ozvat.
                                </Text>
                            </Flex>
                        </Flex>
                    </Wrapper>
                </Flex>
                <Wrapper className="mt-lg md:mt-xl lg:mt-2xl">
                    <List>
                        <Flex
                        // horizontalVariant="justifyBetween"
                        gapVariant="lg">
                            {contactArray.map((item, idx) => {
                                const { key, heading, href, title } = item;
                                
                                return (
                                    <Fragment key={idx}>
                                        <Flex
                                        layoutVariant="desktopOnly"
                                        // verticalVariant="itemsCenter"
                                        >
                                            { key === "tel" && <PhoneIcon className="w-12 h-12 text-violet" /> }
                                            { key === "email" && <EnvelopeIcon className="w-12 h-12 text-violet" /> }
                                            { key === "ico" && <DocumentIcon className="w-12 h-12 text-violet" /> }
                                            <Flex
                                            layoutVariant="mobileOnly">
                                                <Text textVariant="card">{heading}</Text>
                                                {href ? (
                                                    <ListItem>
                                                        <Anchor href={href}>
                                                            <Text>
                                                                {title}
                                                            </Text>
                                                        </Anchor>
                                                    </ListItem>
                                                ) : (
                                                    <ListItem>
                                                        <Text>
                                                            {title}
                                                        </Text>
                                                    </ListItem>
                                                )}
                                            </Flex>
                                        </Flex>
                                    </Fragment>
                                );
                            })}
                        </Flex>
                    </List>
                </Wrapper>
            </Section>
        </Fragment>
    );
};

export default Contact;