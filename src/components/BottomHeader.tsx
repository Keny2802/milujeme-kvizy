"use client";

import { type FC, useState, Fragment, memo, } from "react";
import { usePathname } from "next/navigation";
import { House, Brain, DoorOpen, Menu, Minus, } from "lucide-react";

import Wrapper from "./Wrapper";
import Flex from "./Flex";
import Icon from "./Icon/Icon";
import Anchor from "./Anchor";
import HashLess from "@/app/functions/HashLess/HashLess";
import Text from "./Text";
import MobileMenu from "./MobileMenu";

type BottomHeaderProps = {
  
};

type BottomHeaderArrayProps = { icon: any; href: string; title: string; };

const BottomHeader: FC<BottomHeaderProps> = ({

}) => {
  const pathname = usePathname();
  const [isMobileMenuVisible, setMobileMenuTovisible] = useState<boolean>(false);

  const isHome = pathname === "/" ? "/#hero" : "/";
  const bottomHeaderArray:BottomHeaderArrayProps[] = [
        { icon: House, href: isHome, title: "Domů", },
        { icon: Brain, href: "/#nabidka-kvizu", title: "Kvízy", },
        { icon: DoorOpen, href: "/prihlaseni", title: "Přihlášení", },
        { icon: Menu, href: "#menu", title: "Menu", },
    ];

  return (
    <Fragment>
        <Wrapper className="fixed md:hidden inset-x-0 bottom-0 z-50 bg-violet text-white border-t border-black w-full p-sm sm:p-xs">
            <Flex
            layoutVariant="desktopOnly"
            horizontalVariant="justifyEvenly"
            // justifyBetween
            >
                {bottomHeaderArray.map(({ icon: IconComponent, href, title, }, idx) => (
                    <Anchor
                    key={idx}
                    href={href}
                    { ...( href.startsWith("#") && { onClick: (e) => HashLess(e, href) } ) }>
                        <Flex
                        layoutVariant="mobileOnly"
                        verticalVariant="itemsCenter"
                        gapVariant="zero">
                            <Icon
                            backgroundVariant="white"
                            { ...( href === "#menu" && { onClick: () => setMobileMenuTovisible(prev => !prev) } ) }>
                                { href === "#menu" && isMobileMenuVisible && <Minus /> }
                                { href === "#menu" && !isMobileMenuVisible && <Menu /> }
                                { href !== "#menu" && <IconComponent /> }
                            </Icon>
                            <Text textVariant="strongBodyText">{title}</Text>
                        </Flex>
                    </Anchor>
                ))}
            </Flex>
        </Wrapper>
        <MobileMenu
        isMobileMenuVisible={isMobileMenuVisible}
        setMobileMenuTovisible={setMobileMenuTovisible}
        />
    </Fragment>
  );
};

export default memo(BottomHeader);