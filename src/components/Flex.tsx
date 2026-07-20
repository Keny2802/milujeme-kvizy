import {
    type AllHTMLAttributes,
    type FC,
    Fragment
} from "react";
import clsx from "clsx";

import Wrapper from "./Wrapper";
import type {
    LayoutVariantsType,
    HorizontalLayoutVariantsType,
    VerticalLayoutVariantsType,
    GapVariantsType,
    MappedLayoutVariantsType,
    MappedHorizontalLayoutVariantsType,
    MappedVerticalLayoutVariantsType,
    MappedGapVariantsType,
} from "@/types/Flex/FlexTypes";

type Props = AllHTMLAttributes<HTMLDivElement> & {
    layoutVariant?: LayoutVariantsType;
    horizontalVariant?: HorizontalLayoutVariantsType;
    verticalVariant?: VerticalLayoutVariantsType;
    gapVariant?: GapVariantsType;
    children?: React.ReactNode;
};

const Flex:FC<Props> = ({
    layoutVariant = "responsive",
    horizontalVariant = "justifyStart",
    verticalVariant = "itemsStart",
    gapVariant = "md",
    children,
    ...attrs
}) => {
    const layoutVariants:MappedLayoutVariantsType = {
        desktopOnly: "flex",
        mobileOnly: "flex flex-col",
        responsive: "flex flex-col md:flex-row",
        responsiveReverse: "flex flex-col-reverse lg:flex-row",
    };

    const horizontalLayoutVariants:MappedHorizontalLayoutVariantsType = {
        justifyStart: "justify-start",
        justifyEnd: "justify-end",
        justifyEndSafe: "justify-end-safe",
        justifyCenter: "justify-center",
        justifyCenterSafe: "justify-center-safe",
        justifyBetween: "justify-between",
        justifyAround: "justify-around",
        justifyEvenly: "justify-evenly",
        justifyStretch: "justify-stretch",
        justifyBaseline: "justify-baseline",
        justifyNormal: "justify-normal",
    };

    const verticalLayoutVariants:MappedVerticalLayoutVariantsType = {
        itemsStart: "items-start",
        itemsEnd: "items-end",
        itemsEndSafe: "items-end-safe",
        itemsCenter: "items-center",
        itemsCenterSafe: "items-center-safe",
        itemsBaseline: "items-baseline",
        itemsBaselineLast: "items-baseline-last",
        itemsStretch: "items-stretch",
    };

    const gapVariants:MappedGapVariantsType = {
        mini: "gap-mini",
        xs: "gap-xs",
        sm: "gap-sm",
        md: "gap-sm",
        lg: "gap-lg",
        xl: "gap-xl",
        twoXL: "gap-2xl",
        threeXL: "gap-3xl",
    };

  return (
    <Fragment>
        <Wrapper
        {...attrs}
        className={clsx(
            layoutVariants[layoutVariant],
            horizontalLayoutVariants[horizontalVariant],
            verticalLayoutVariants[verticalVariant],
            gapVariants[gapVariant],
            attrs.className
        )}>
            {children}
        </Wrapper>
    </Fragment>
  );
};

export default Flex;