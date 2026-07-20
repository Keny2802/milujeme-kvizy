"use client";

import {
  type FC,
  useState,
  useEffect,
  Fragment
} from "react";
import {
  motion,
  useScroll,
  useMotionValueEvent,
} from "motion/react";
import { MinusIcon, PlusIcon, Bars3Icon } from "@heroicons/react/24/solid";
import clsx from "clsx";

import type { DefaultType } from "@/types/DefaultType";
import { DEFAULT_WIDTH_VALUE, DEFAULT_HEIGHT_VALUE } from "@/types/Logo/LogoType";
import HeaderItems from "@/app/Arrays/Header/HeaderArray";
import Shuffled from "@/app/functions/Shuffled/Shuffled";
import quizHrefs from "@/app/Arrays/QuizHrefs/QuizHrefs";

import Flex from "./Flex";
import Logo from "./Logo";
import List from "./List";
import ListItem from "./ListItem";
import Anchor from "./Anchor";
import Text from "./Text";
import Cta from "./Cta";
import Wrapper from "./Wrapper";
import MobileMenu from "./MobileMenu";
import HashLess from "@/app/functions/HashLess/HashLess";

const shuffledQuizHrefs = Shuffled(quizHrefs);
const randomizeIndex = Math.floor(Math.random() * 1);

const Header: FC<DefaultType> = ({
  ...attrs
}) => {
  const [isHidden, setHidden] = useState<boolean>(false);
  const [isScrolling, setToScrolling] = useState<boolean>(false);
  const [randomIndex, setRandomIndex] = useState<number>(0);
  const [isMobileMenuVisible, setMobileMenuTovisible] = useState<boolean>(false);
  const [isHeaderHidden, setHeaderToHidden] = useState<boolean>(false);
  const { scrollY } = useScroll();

  // const randomHref = "";

  useMotionValueEvent(scrollY, "change", (current) => {
    const previous = scrollY.getPrevious() ?? 0;

    if (previous > current && current > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    };
  });

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
      <Flex
      {...attrs}
      layoutVariant="desktopOnly"
      horizontalVariant="justifyCenter"
      className="w-full">
        <motion.header
        // {...attrs}
        animate={{
          y: isHidden ? -140 : 0,
          opacity: isHidden ? 0 : 1,
        }}
        className={clsx(
          "fixed top-0 bg-violet md:mt-md lg:mt-lg p-xs z-50 md:rounded-4xl",
          "transition-all ease-in-out duration-300",
          isHeaderHidden ? "w-auto" : "w-full md:w-11/12",
        )}
        transition={{
          duration: 0.3,
          ease: "easeInOut"
        }}>
          <Flex
            layoutVariant="desktopOnly"
            horizontalVariant="justifyBetween"
            verticalVariant="itemsCenter">
            <Logo
            { ...( isScrolling ? {
              width: DEFAULT_WIDTH_VALUE,
              height: DEFAULT_HEIGHT_VALUE
            } : {
              width: 150,
              height: 150,
            } ) }
            className={clsx(
              "mx-sm md:mx-0 transition-all ease-in-out duration-300",
              isHeaderHidden ? "hidden" : "static",
            )}
            />
            <List className={clsx(
              isHeaderHidden ? "hidden" : "hidden md:flex",
            )}>
              <Flex
              layoutVariant="desktopOnly"
              gapVariant="xl">
                {HeaderItems.map((item, idx) => {
                  const { href, title, } = item;

                  return (
                    <Fragment key={idx}>
                      <ListItem>
                        <Anchor
                        href={href}
                        className="text-white"
                        onClick={(e) => HashLess(e, href)}
                        >
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
              </Flex>
            </List>
            <Cta
            href={shuffledQuizHrefs[randomIndex].toString()}
            onClick={() => setRandomIndex(randomizeIndex)}
            backgroundVariant="black"
            borderBackgroundVariant="none"
            className={clsx(
              "uppercase",
              isHeaderHidden ? "hidden" : "hidden md:inline-block",
            )}>
              <Text>
                Hrát náhodně
              </Text>
            </Cta>
            <Wrapper className="mr-sm md:m-0 inline-block md:hidden">
                {isMobileMenuVisible ? (
                <MinusIcon
                onClick={() => setMobileMenuTovisible(false)}
                className="w-8 h-8 md:w-10 md:h-10 text-white cursor-pointer" />
              ) : (
                <Bars3Icon
                onClick={() => setMobileMenuTovisible(true)}
                className="w-8 h-8 md:w-10 md:h-10 text-white cursor-pointer" />
              )}
            </Wrapper>
            {
              isHeaderHidden ? (
                <PlusIcon
                onClick={() => setHeaderToHidden(false)}
                className="w-8 h-8 md:w-10 md:h-10 z-50 text-white cursor-pointer mr-sm" />
              ) : (
                <MinusIcon
                onClick={() => setHeaderToHidden(true)}
                className="w-8 h-8 md:w-10 md:h-10 z-50 text-white cursor-pointer" />
              )
            }
          </Flex>
        </motion.header>
      </Flex>
      <MobileMenu
      isMobileMenuVisible={isMobileMenuVisible}
      setMobileMenuTovisible={setMobileMenuTovisible}
      />
    </Fragment>
  );
};

export default Header;