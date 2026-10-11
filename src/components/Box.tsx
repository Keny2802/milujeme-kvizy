import { type AllHTMLAttributes, type FC, Fragment, } from "react";
import clsx from "clsx";

import type { GenericMappingType } from "@/types/Generics/GenericMapping";
import Wrapper from "./Wrapper";

type PaddingVariants =
"zero" | "mini" | "xs"| "sm" |
"md"| "lg" | "xl" | "twoXL"
| "threeXL";
type BorderWidthVariants = 0 | 1 | 2 | 4 | 8;
type ColorVariants =
"violet" | "white" | "black"
| "blackOne" | "gray" | "grayDarkMode";

type MappedPaddingVariants = GenericMappingType<PaddingVariants>;
type MappedColorVariants = GenericMappingType<ColorVariants>;

type BoxProps = AllHTMLAttributes<HTMLDivElement> & {
    padding?: PaddingVariants;
    fillColor?: ColorVariants;
    // border
    minWidth?: number;
    minHeight?: number;
    maxWidth?: number;
    maxHeight?: number;
    borderWidth?: BorderWidthVariants | number;
    borderColor?: ColorVariants;
    children: React.ReactNode;
};

const Box:FC<BoxProps> = ({
    fillColor = "white",
    padding = "lg",
    minWidth = 250,
    minHeight = 250,
    maxWidth = 1000,
    maxHeight = 500,
    borderWidth = 1,
    borderColor = "gray",
    children,
    ...attrs
}) => {
  const paddingVariants:MappedPaddingVariants = {
    zero: "p-0",
    mini: "p-mini",
    xs: "p-xs",
    sm: "p-mini md:p-xs lg:p-sm",
    md: "p-sm md:p-md",
    lg: "p-sm md:p-md lg:p-lg",
    xl: "p-md md:p-lg lg:p-xl",
    twoXL: "p-lg md:p-xl md:p-2xl",
    threeXL: "p-xl md:p-2xl md:p-3xl",
  };
  
  const colorVariants:MappedColorVariants = {
    violet: "violet",
    white: "white",
    black: "black",
    blackOne: "black-1",
    gray: "gray",
    grayDarkMode: "gray-dark-mode",
  };

  return (
    <Fragment>
        <Wrapper
        {...attrs}
        className={clsx(
            "box",
            `bg-${colorVariants[fillColor]}`,
            paddingVariants[padding],
            `${borderWidth === 1 ? "border" : `border-[${borderWidth}]`} border-${colorVariants[borderColor]}`,
            minWidth && `w-full md:min-w-[${minWidth}px]`,
            maxWidth && `w-full md:max-w-[${maxWidth}px]`,
            minHeight && `h-full md:min-h-[${minHeight}px]`,
            maxHeight && `h-full md:max-h-[${maxHeight}px]`,
            attrs.className,
        )}
        // style={{
        //     minWidth: minWidth,
        //     minHeight: minHeight,
        //     // maxWidth: maxWidth,
        //     // maxHeight: maxHeight,
        // }}
        >
            {children}
        </Wrapper>
    </Fragment>
  );
};

export default Box;