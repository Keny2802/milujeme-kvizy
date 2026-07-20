import { type FC, Fragment } from "react";

import type { DefaultType } from "@/types/DefaultType";
import Section from "./Section";
import HeaderItems from "@/app/Arrays/Header/HeaderArray";
import Flex from "./Flex";
import Logo from "./Logo";
import List from "./List";
import ListItem from "./ListItem";
import Anchor from "./Anchor";
import Text from "./Text";
import Year from "./Year";

const Footer:FC<DefaultType> = ({
    ...attrs
}) => {
    return (
        <Fragment>
            <Section
            {...attrs}
            backgroundVariant="violet">
                <Flex
                layoutVariant="mobileOnly"
                verticalVariant="itemsCenter"
                gapVariant="lg">
                    <Flex
                    layoutVariant="desktopOnly"
                    horizontalVariant="justifyBetween"
                    verticalVariant="itemsCenter"
                    className="w-full">
                        <Logo
                        width={150}
                        height={150}
                        />
                        <List>
                            <Flex
                            // layoutVariant="desktopOnly"
                            // gapVariant="xl"
                            >
                                {HeaderItems.map((item, idx) => {
                                    const { href, title } = item;

                                    return (
                                        <Fragment key={idx}>
                                            {href ? (
                                                <ListItem>
                                                    <Anchor href={href}>
                                                        <Text
                                                        textVariant="strongBodyText"
                                                        className="uppercase">
                                                            {title}
                                                        </Text>
                                                    </Anchor>
                                                </ListItem>
                                            ) : (
                                                <ListItem>
                                                    <Text
                                                    textVariant="strongBodyText"
                                                    className="uppercase">
                                                        {title}
                                                    </Text>
                                                </ListItem>
                                            )}
                                        </Fragment>
                                    );
                                })}
                            </Flex>
                        </List>
                    </Flex>
                    <Text className="text-center">
                        &copy; Milujeme Kvízy. 2026-{Year}. Všechna práva vyhrazena.
                    </Text>
                </Flex>
            </Section>
        </Fragment>
    );
};

export default Footer;