import { type FC, Fragment } from "react";
import clsx from "clsx";

import GridType, {
    MappedGridVariantsType,
    MappedGapVariantsType,
} from "@/types/Grid/GridType";
import Wrapper from "./Wrapper";

const Grid:FC<GridType> = ({
    gridVariant = "two",
    gapVariant = "md",
    children,
    ...attrs
}) => {
    const gridVariants:MappedGridVariantsType = {
        mobileOnly: "grid-cols-1",
        mobileTwo: "grid-cols-2",
        two: "grid-cols-1 md:grid-cols-2",
        three: "grid-cols-1 md:grid-cols-2 lg:grid-cols-3",
        four: "grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4",
        five: "grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5",
        six: "grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6",
    };

    const gapVariants:MappedGapVariantsType = {
        mini: "gap-mini",
        xs: "gap-mini md:gap-xs",
        sm: "gap-xs md:gap-sm",
        md: "gap-sm md:gap-md",
        lg: "gap-md md:gap-lg",
        xl: "gap-lg md:gap-xl",
        twoXL: "gap-xl md:gap-2xl",
        threeXL: "gap-2xl md:gap-3xl",
    };

    return (
        <Fragment>
            <Wrapper
            {...attrs}
            className={clsx(
                "grid",
                gridVariants[gridVariant],
                gapVariants[gapVariant],
                attrs.className,
            )}>
                {children}
            </Wrapper>
        </Fragment>
    );
};

export default Grid;