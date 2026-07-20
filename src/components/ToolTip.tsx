// jak zvolím onclick jako prop tak globálně jako na event jako prop

import { type FC, Fragment } from "react";
import { InformationCircleIcon } from "@heroicons/react/24/solid";
import { motion } from "motion/react";
import clsx from "clsx";

import type ToolTipType from "@/types/ToolTip/ToolTipType";
import type { MappedSideVariantsType } from "@/types/ToolTip/ToolTipType";
import Wrapper from "./Wrapper";
import Flex from "./Flex";
import Icon from "./Icon/Icon";
import Text from "./Text";

const ToolTip:FC<ToolTipType> = ({
    parent,
    parentClassName = "",
    sideVariant = "left",
    gapVariant = "sm",
    text,
    children,
    ...attrs
}) => {
    const sideVariants:MappedSideVariantsType = {
        left: "left-auto",
        right: "right-full",
    };

    return (
        <Fragment>
            <Wrapper
            {...attrs}
            aria-describedby="toolTip"
            className={clsx(
                "tool-tip-component",
                "relative group",
                attrs.className,
            )}>
                <Wrapper
                className={clsx(
                    "tool-tip-parent-subcomponent",
                    "z-50 cursor-pointer",
                    parentClassName,
                )}>{parent}</Wrapper>
                {/* mb-mini md:mb-xs */}
                <Wrapper
                role="tooltip"
                className={
                    clsx(
                        "absolute",
                        `${sideVariants[sideVariant]}`,
                        "bottom-full",
                        "min-w-max max-w-3xs bg-black text-white p-xs pointer-events-none rounded-2xl opacity-0 transition-opacity delay-100 duration-500 ease-in-out group-hover:mb-xs group-hover:opacity-100",
                    )
                }
                id="toolTip">
                    <Flex
                    // layoutVariant="mobileOnly"
                    verticalVariant="itemsCenter"
                    gapVariant={gapVariant}>
                        <Icon backgroundVariant="violet"><InformationCircleIcon /></Icon>
                        <Text>{text}</Text>
                        {children && children}
                    </Flex>
                </Wrapper>
            </Wrapper>
        </Fragment>
    );
};

export default ToolTip;