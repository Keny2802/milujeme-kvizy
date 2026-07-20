import { type FC, Fragment } from "react";
import clsx from "clsx";

import type {
    MappedBackgroundVariantsType,
    MappedPaddingVariantsType,
    SectionType
} from "@/types/Section/SectionType";
import Wrapper from "./Wrapper";

const Section:FC<SectionType> = ({
    backgroundVariant = "white",
    paddingVariant = "xl",
    children,
    ...attrs
}) => {
    const backgroundVariants:MappedBackgroundVariantsType = {
        violet: "bg-violet text-white",
        white: "bg-white text-black",
        black: "bg-black text-white",
        blackOne: "bg-black-1 text-white",  
    };

    const paddingVariants:MappedPaddingVariantsType = {
        mini: "p-mini",
        xs: "p-xs",
        sm: "p-mini md:p-xs lg:p-sm",
        md: "p-sm md:p-md",
        lg: "p-sm md:p-md lg:p-lg",
        xl: "p-md md:p-lg lg:p-xl",
        twoXL: "p-lg md:p-xl md:p-2xl",
        threeXL: "p-xl md:p-2xl md:p-3xl",
    };

    return (
        <Fragment>
            <Wrapper
            {...attrs}
            className={clsx(
                backgroundVariants[backgroundVariant],
                paddingVariants[paddingVariant],
                attrs.className
            )}>
                {children}
            </Wrapper>
        </Fragment>
    );
};

export default Section;