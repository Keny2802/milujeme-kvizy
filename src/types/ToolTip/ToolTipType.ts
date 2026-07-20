import type{ AllHTMLAttributes } from "react";
import type { GapVariantsType } from "../Flex/FlexTypes";
import { GenericMappingType } from "../Generics/GenericMapping";

type SideVariantsType = "left" | "right";
type MappedSideVariantsType = GenericMappingType<SideVariantsType>;

type ToolTipType = AllHTMLAttributes<HTMLDivElement> & {
    parent: React.ReactNode;
    parentClassName?: string;
    sideVariant?: SideVariantsType;
    text: string | React.ReactNode;
    gapVariant?: GapVariantsType;
    children?: React.ReactNode;
};

export type {
    SideVariantsType,
    MappedSideVariantsType,
};

export default ToolTipType;