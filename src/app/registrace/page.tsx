"use client";

import { useState, Fragment, } from "react";
import { useMediaQuery } from "react-responsive";
import { UsersIcon, EnvelopeIcon, KeyIcon, LockOpenIcon, } from "@heroicons/react/24/solid";
import Link from "next/link";

import Header from "@/components/Header";
import Section from "@/components/Section";
import Flex from "@/components/Flex";
import RegisterPageArray from "../Arrays/RegisterPage/RegisterPageArray";
import Icon from "@/components/Icon/Icon";
import Text from "@/components/Text";
import Cta from "@/components/Cta";
import Photo from "@/components/Photo";
import Contact from "@/sections/Contact";
import Footer from "@/components/Footer";
import BottomHeader from "@/components/BottomHeader";
import Grid from "@/components/Grid";

const Page = () => {
    const [visiblePassword, setPasswordVisible] = useState<boolean>(false);
    const smallerScreens = useMediaQuery({ query: "(max-width: 1280px)" });

    return (
        <Fragment>
            {/* <Header /> */}
            <Section
            paddingVariant="zero"
            backgroundVariant={smallerScreens ? "white" : "violet"}>
                <Flex horizontalVariant="justifyEvenly" verticalVariant="itemsCenter" gapVariant="xl">
                    <Section>
                        <Flex layoutVariant="mobileOnly" gapVariant="lg">
                            <Flex layoutVariant="mobileOnly" gapVariant="sm" className="w-full">
                                <Flex layoutVariant="desktopOnly">
                                    <Link href="/registrace" className="text-violet"><Text>Registrace</Text></Link>
                                    <Text className="text-gray-600 dark:text-gray-400">|</Text>
                                    <Link href="/prihlaseni" className="text-black"><Text>Přihlášení</Text></Link>
                                </Flex>
                                <Text textVariant="section" className="text-balance">Vítej u nás v Milujeme Kvízy.</Text>
                                <Text className="text-gray-600 dark:text-gray-400">Registruj se a buď nedílnou součástí naší Milujeme Kvízy komunity.</Text>
                            </Flex>
                            <Flex layoutVariant="mobileOnly" gapVariant="sm" className="w-full">
                                {/* <Grid className="w-full"> */}
                                    {RegisterPageArray.map((input, inputIndex) => (
                                        <Flex
                                        key={inputIndex}
                                        className="relative w-full">
                                            <input
                                            { ...(visiblePassword && input.type === "password" ? { type: "text" } : { type: "password" }) }
                                            { ...( input.type !== "password" && { type: input.type } ) }
                                            placeholder={input.placeholder}
                                            className="p-xs sm:p-sm md:p-[calc(var(--spacing-md)/1.75)] border border-slate-800/20 dark:border-gray-400 md:min-w-[calc(var(--spacing-3xl)*6)] w-full md:max-w-full rounded-xl focus-visible:outline-violet"
                                            id={input.id} />
                                            <Icon
                                            backgroundVariant="gray"
                                            className="absolute top-1/2 right-5 -translate-y-1/2"
                                            { ...( input.type === "password" && { onClick: () => setPasswordVisible(prev => !prev), } ) }>
                                                {input.type === "text" && (<UsersIcon />)}
                                                {input.type === "email" && (<EnvelopeIcon />)}
                                                {input.type === "password" && ( visiblePassword ? <LockOpenIcon /> : <KeyIcon /> )}
                                            </Icon>
                                        </Flex>
                                    ))}
                                {/* </Grid> */}
                                <Cta variant="button" buttonVariant="submit" className="min-w-full">
                                    <Text className="uppercase">Registrovat se</Text>
                                </Cta>
                            </Flex>
                        </Flex>
                    </Section>
                    <Photo
                    width={800}
                    height={800}
                    src="/nabidka-kvizu/mafie-v-italii.avif"
                    alt="Přihlásit se - Milujeme Kvízy"
                    className="hidden lg:inline-block max-w-[80%] rounded-l-3xl"
                    // md:ml-sm lg:inline-block
                    />
                </Flex>
            </Section>
            <Contact />
            <Footer />
            <BottomHeader />
        </Fragment>
    );
};

export default Page;