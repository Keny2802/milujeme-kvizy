"use client";

import { useState, Fragment, } from "react";
import { EnvelopeIcon, KeyIcon, LockOpenIcon, } from "@heroicons/react/24/solid";
import Link from "next/link";

import Header from "@/components/Header";
import Section from "@/components/Section";
import Flex from "@/components/Flex";
import LoginPageArray from "../Arrays/LoginPage/LoginPageArray";
import Icon from "@/components/Icon/Icon";
import Text from "@/components/Text";
import Cta from "@/components/Cta";
import Photo from "@/components/Photo";
import Contact from "@/sections/Contact";
import Footer from "@/components/Footer";
import BottomHeader from "@/components/BottomHeader";

const Page = () => {
    const [visiblePassword, setPasswordVisible] = useState<boolean>(false);

    return (
        <Fragment>
            {/* <Header /> */}
            <Section
            paddingVariant="zero"
            backgroundVariant="violet"
            // className="mt-[calc(var(--spacing-lg)*3)] md:mt-[calc(var(--spacing-xl)*3)]"
            >
                <Flex horizontalVariant="justifyEvenly" verticalVariant="itemsCenter" gapVariant="xl">
                    <Section>
                        <Flex layoutVariant="mobileOnly" gapVariant="lg">
                            <Flex layoutVariant="mobileOnly" gapVariant="sm" className="max-w-[calc(var(--spacing-3xl)*6.25)]">
                                <Flex layoutVariant="desktopOnly">
                                    <Link href="/prihlaseni" className="text-violet"><Text>Přihlášení</Text></Link>
                                    <Text className="text-gray-600 dark:text-gray-400">|</Text>
                                    <Link href="/registrace" className="text-black"><Text>Registrace</Text></Link>
                                </Flex>
                                <Text textVariant="section">Vítej zpátky v Milujeme Kvízy.</Text>
                                <Text className="text-gray-600 dark:text-gray-400">Přihlas a buď znovu nedílnou součástí Milujeme Kvízy komunity.</Text>
                            </Flex>
                            <Flex layoutVariant="mobileOnly" gapVariant="sm" className="w-full">
                                {LoginPageArray.map((input, inputIndex) => (
                                    <Flex
                                    key={inputIndex}
                                    className="relative">
                                        <input
                                        { ...(visiblePassword && input.type === "password" ? { type: "text" } : { type: "password" }) }
                                        { ...( input.type !== "password" && { type: input.type } ) }
                                        placeholder={input.placeholder}
                                        className="p-xs sm:p-sm md:p-[calc(var(--spacing-md)/1.75)] border border-slate-800/20 dark:border-gray-400 md:min-w-[calc(var(--spacing-3xl)*6)] min-w-full md:max-w-full rounded-xl focus-visible:outline-violet"
                                        id={input.id} />
                                        <Icon
                                        backgroundVariant="gray"
                                        className="absolute top-5 right-5"
                                        { ...( input.type === "password" && { onClick: () => setPasswordVisible(prev => !prev), } ) }>
                                            {input.type === "email" && (<EnvelopeIcon />)}
                                            {input.type === "password" && ( visiblePassword ? <LockOpenIcon /> : <KeyIcon /> )}
                                        </Icon>
                                    </Flex>
                                ))}
                                <Cta variant="button" buttonVariant="submit" className="md:min-w-[calc(var(--spacing-3xl)*6)] max-w-full">
                                    <Text className="uppercase">
                                        Přihlásit se
                                    </Text>
                                </Cta>
                            </Flex>
                            <Text className="text-gray-600 dark:text-gray-400">
                                Nemáte ještě účet?
                                {" "}
                                <Link href="/registrace" className="text-violet">Registrujte se.</Link>
                            </Text>
                        </Flex>
                    </Section>
                    <Photo
                    width={800}
                    height={800}
                    src="/nabidka-kvizu/mafie-v-italii.avif"
                    alt="Přihlásit se - Milujeme Kvízy"
                    className="max-w-[80%] rounded-l-3xl"
                    // md:ml-sm
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