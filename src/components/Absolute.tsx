import {
    type FC,
    Fragment
} from "react";
import clsx from "clsx";

import type {
    MappedDarkOverlayVariantsType,
    DarkOverlayType,
} from "@/types/DarkOverlay/DarkOverlayType";
import Wrapper from "./Wrapper";

const Absolute:FC<DarkOverlayType> = ({
    darkOverlayVariant = "insetZero",
    children,
    ...attrs
}) => {
    const darkOverlayVariants:MappedDarkOverlayVariantsType = {
        insetZero: "inset-0",
        topZero: "top-0",
        rightZero: "right-0",
        bottomZero: "bottom-0",
        leftZero: "left-0",
    };

    return (
        <Fragment>
            <Wrapper
            {...attrs}
            className={clsx(
                "absolute",
                darkOverlayVariants[darkOverlayVariant], attrs.className
            )}>
                {children}
            </Wrapper>
        </Fragment>
    );
};

export default Absolute;