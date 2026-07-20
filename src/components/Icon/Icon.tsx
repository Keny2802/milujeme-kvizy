import { type FC, Fragment } from "react";
import clsx from "clsx";

import Wrapper from "../Wrapper";
import type IconType from "@/types/Icon/IconType";
import type {
    MappedBackgroundVariantsType,
    MappedSizeVariantsType,
} from "@/types/Icon/IconType";

const Icon:FC<IconType> = ({
    backgroundVariant = "blackOne",
    sizeVariant = "md",
    children,
    ...attrs
}) => {
    const backgroundVariants:MappedBackgroundVariantsType = {
        violet: "text-violet",
        white: "text-white",
        black: "text-black",
        blackOne: "text-black-1",
    };

    const sizeVariants:MappedSizeVariantsType = {
        mini: "w-4 h-4",
        xs: "w-4 h-4 md:w-5 md:h-5",
        sm: "w-5 h-5 md:w-6 md:h-6",
        md: "w-6 h-6 md:w-7 md:h-7",
        lg: "w-7 h-7 md:w-8 md:h-8",
        xl: "w-8 h-8 md:w-9 md:h-9",
        twoXL: "w-9 h-9 md:w-10 md:h-10",
        threeXL: "w-10 h-10 md:w-12 md:h-12",
    };

    return (
        <Fragment>
            <Wrapper
            {...attrs}
            { ...( attrs.onClick && { onClick: attrs.onClick } ) }
            className={clsx(
                "icon-component cursor-pointer",
                backgroundVariants[backgroundVariant],
                sizeVariants[sizeVariant],
                attrs.className,
            )}>
                {children}
            </Wrapper>
        </Fragment>
    );
};

export default Icon;