import React, { type AllHTMLAttributes } from "react";
import type { GenericMappingType } from "../Generics/GenericMapping";

type GridVariantsType = "mobileOnly" | "mobileTwo" | "two" | "three" | "four" | "five" | "six";
type GapVariantsType = "mini" | "xs" | "sm" | "md" | "lg" | "xl" | "twoXL" | "threeXL";

type MappedGridVariantsType = GenericMappingType<GridVariantsType>;
type MappedGapVariantsType = GenericMappingType<GapVariantsType>;

type GridType = AllHTMLAttributes<HTMLDivElement> & {
    gridVariant?: GridVariantsType;
    gapVariant?: GapVariantsType;
    children: React.ReactNode;
};

export type {
    GridVariantsType,
    MappedGridVariantsType,
    MappedGapVariantsType,
};

export default GridType;