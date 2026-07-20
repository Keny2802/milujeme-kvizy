import type { AllHTMLAttributes } from "react";
import type { GenericMappingType } from "../Generics/GenericMapping";

type PaddingVariantsType =
"mini" | "xs" |
"sm" | "md"
| "lg" | "xl"
| "twoXL" | "threeXL";
type BackgroundVariantsType = "violet" | "white" | "black" | "blackOne";
type MappedPaddingVariantsType = GenericMappingType<PaddingVariantsType>;
type MappedBackgroundVariantsType = GenericMappingType<BackgroundVariantsType>

type SectionType = AllHTMLAttributes<HTMLDivElement> & {
    backgroundVariant?: BackgroundVariantsType;
    paddingVariant?: PaddingVariantsType;
    children: React.ReactNode;
};

export type {
    BackgroundVariantsType,
    PaddingVariantsType,
    MappedPaddingVariantsType,
    MappedBackgroundVariantsType,
    SectionType,
};