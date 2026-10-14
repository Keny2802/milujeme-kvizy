"use client";

import {
    type FC,
    Fragment,
    memo,
} from "react";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import { Smartphone } from "lucide-react";
import gsap from "gsap";

import type { DefaultType } from "@/types/DefaultType";
import Section from "@/components/Section";
import Flex from "@/components/Flex";
import Wrapper from "@/components/Wrapper";
import Text from "@/components/Text";
import Icon from "@/components/Icon/Icon";
import Box from "@/components/Box";
import Photo from "@/components/Photo";

type BenefitsProps = { title: string; subtitle: string; };

const benefits:BenefitsProps[] = [
    { title: "Různorodost kvízů", subtitle: "Hrajte od historických kvízů až po ty mafiánské.", },
    { title: "Vlastní progress neztratíte", subtitle: "Díky vytvoření vlastního účtu o své data nepřijdete.", },
    { title: "Nemáte čas se nudit", subtitle: "Připravujeme pro Vás týdenní výzvy, které Vás v mentálním pohybu.", },
];

gsap.registerPlugin(ScrollTrigger);

const TryUs:FC<DefaultType> = ({
    ...attrs
}) => {
  useGSAP(() => {
    const tl = gsap.timeline({
        scrollTrigger: {
            trigger: "#vyzkousejte-milujeme-kvizy",
            start: "top top",
            end: "bottom top",
            scrub: true,
            pin: true,
        },
    });

    tl.to(["#iphone-16-pro-max", "#iphone-16-pro-max-milujeme-kvizy"], {
        rotateY: "360deg",
        duration: 1,
        ease: "power1.inOut", 
    });
  }, []);  

  return (
    <Fragment>
        <Section
        {...attrs}
        id="vyzkousejte-milujeme-kvizy">
            <Flex
            verticalVariant="itemsCenter">
                <Flex
                layoutVariant="mobileOnly"
                horizontalVariant="justifyBetween"
                gapVariant="lg">
                    <Flex
                    layoutVariant="mobileOnly"
                    horizontalVariant="justifyCenter">
                        <Text textVariant="section" className="uppercase">Funkce <span className="text-violet">aplikace</span></Text>
                        <Text textVariant="subTitleText" className="text-gray">Milujeme Kvízy je nejen webová aplikace, ale i mobilní.</Text>
                    </Flex>
                    <Box maxWidth={1000} maxHeight={1000} className="rounded-2xl">
                        <Flex
                        horizontalVariant="justifyEvenly"
                        verticalVariant="itemsCenter"
                        className="w-full">
                            <Flex layoutVariant="mobileOnly">
                                <Flex
                                layoutVariant="mobileOnly">
                                    {/* <Box fillColor="violet" padding="xs" className="rounded-full">
                                        <Icon
                                        backgroundVariant="white"
                                        sizeVariant="threeXL"
                                        className="flex justify-center items-center">
                                            <Smartphone />
                                        </Icon>
                                    </Box> */}
                                    <Wrapper className="bg-violet flex justify-center items-center w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 rounded-full">
                                        <Icon
                                        backgroundVariant="white"
                                        sizeVariant="threeXL"
                                        className="flex justify-center items-center">
                                            <Smartphone />
                                        </Icon>
                                    </Wrapper>
                                    <Text textVariant="card">Webová <span className="text-violet">Aplikace</span></Text>
                                    <Text textVariant="subTitleText" className="text-gray">Dejte kvízům alespoň 5 minut a přesvědčte se, jak snadno Vás dokážou vtáhnout do hry.</Text>
                                </Flex>
                                <Flex
                                layoutVariant="mobileOnly">{benefits.map(({ title, subtitle, }, idx) => (
                                    <Flex key={idx} layoutVariant="desktopOnly" verticalVariant="itemsCenter">
                                        <Wrapper className="w-3 h-3 md:w-4 md:h-4 lg:w-5 lg:h-5 bg-violet rounded-full" />
                                        <Flex layoutVariant="mobileOnly" gapVariant="xs">
                                            <Text textVariant="strongBodyText">{title}</Text>
                                            <Text textVariant="bodyText" className="text-gray">{subtitle}</Text>
                                        </Flex>
                                    </Flex>
                                ))}</Flex>
                            </Flex>
                            <Wrapper className="relative max-w-125">
                                <Photo
                                width={750}
                                height={750}
                                src="/models/png/iphone-15-milujeme-kvizy.png"
                                alt="Iphone 16 PRO MAX"
                                id="iphone-16-pro-max"
                                />

                                <Wrapper className="w-8/12 h-full absolute bottom-1/4 left-1/2 -translate-x-1/2 translate-y-[38.5%] overflow-hidden">
                                    <Photo
                                    width={750}
                                    height={750}
                                    src="/models/png/iphone-16-pro-max-milujeme-kvizy-hero-section.png"
                                    alt="Milujeme Kvízy Iphone 16 PRO MAX"
                                    className="object-cover"
                                    id="iphone-16-pro-max-milujeme-kvizy"
                                    />
                                </Wrapper>
                            </Wrapper>
                        </Flex>
                    </Box>
                </Flex>
            </Flex>
        </Section>
    </Fragment>
  );
};

export default memo(TryUs);