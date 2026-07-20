"use client";

import {
    type FC,
    useState,
    useEffect,
    Fragment
} from "react";
import { DEFAULT_WIDTH_VALUE, DEFAULT_HEIGHT_VALUE } from "@/types/Logo/LogoType";
import clsx from "clsx";

import type MobileMenuType from "@/types/MobileMenu/MobileMenuType";
import HeaderItems from "@/app/Arrays/Header/HeaderArray";
import HashLess from "@/app/functions/HashLess/HashLess";
import quizHrefs from "@/app/Arrays/QuizHrefs/QuizHrefs";
import Wrapper from "./Wrapper";
import Flex from "./Flex";
import Logo from "./Logo";
import List from "./List";
import ListItem from "./ListItem";
import Anchor from "./Anchor";
import Text from "./Text";
import Cta from "./Cta";
import Year from "./Year";

const MobileMenu:FC<MobileMenuType> = ({
    isMobileMenuVisible,
    setMobileMenuTovisible,
    ...attrs
}) => {
    const [isScrolling, setToScrolling] = useState<boolean>(false);
    const [randomIndex, setRandomIndex] = useState<number>(0);
    const randomizeIndex = Math.floor(Math.random() * 1);

    useEffect(() => {
        const setToScroll = () => {
          if (window.scrollY >= 20) {
            setToScrolling(true);
          } else {
            setToScrolling(false);
          };
        };
    
        window.addEventListener("scroll", setToScroll);
        
        return () => window.removeEventListener("scroll", setToScroll);
      }, [isScrolling]);

    return (
        <Fragment>
            <Wrapper
            {...attrs}
            className={clsx(
                attrs.className,
                isMobileMenuVisible ? "translate-x-0 md:-translate-x-full" : "-translate-x-full",
                "mobile-menu-component bg-violet max-w-80 h-screen fixed inset-0 z-60 transition-transform duration-300 ease-in-out",
            )}>
                <Flex
                layoutVariant="mobileOnly"
                horizontalVariant="justifyBetween"
                className="h-full p-sm md:p-md lg:p-lg text-white">
                    <Logo
                    { ...( isScrolling ? {
                    width: DEFAULT_WIDTH_VALUE,
                    height: DEFAULT_HEIGHT_VALUE
                    } : {
                    width: 150,
                    height: 150,
                    } ) }
                    className="transition-all ease-in-out duration-300"
                    />
                    <List className="w-full">
                        <Flex
                        layoutVariant="mobileOnly">
                            {HeaderItems.map((item, idx) => {
                                const { href, title } = item;

                                return (
                                    <Fragment key={idx}>
                                        <ListItem className="p-xs md:p-mini border-b border-white/25 w-full">
                                            <Anchor
                                            href={href}
                                            onClick={(e) => {
                                                setMobileMenuTovisible(false);
                                                HashLess(e, href);
                                            }}>
                                                <Text
                                                textVariant="strongBodyText"
                                                className="uppercase">
                                                    {title}
                                                </Text>
                                            </Anchor>
                                        </ListItem>
                                    </Fragment>
                                );
                            })}
                            <Cta
                            href={quizHrefs[randomIndex].toString()}
                            onClick={() => {
                                setRandomIndex(randomizeIndex);
                                setMobileMenuTovisible(false);
                            }}
                            backgroundVariant="black"
                            borderBackgroundVariant="none"
                            className="uppercase w-full">
                                <Text>
                                    Hrát náhodně
                                </Text>
                            </Cta>
                        </Flex>
                    </List>
                    <Text className="text-center">
                        &copy; Milujeme Kvízy. 2026-{Year}. Všechna práva vyhrazena.
                    </Text>
                </Flex>
            </Wrapper>
        </Fragment>
    );
};

export default MobileMenu;