import type { AllHTMLAttributes } from "react";
import type { GenericMappingType } from "../Generics/GenericMapping";

type BackgroundVariantsType = "violet" | "white" | "black" | "blackOne";
type SizeVariantsType = "mini" | "xs" | "sm" | "md" | "lg" | "xl" | "twoXL"  | "threeXL";

type MappedBackgroundVariantsType = GenericMappingType<BackgroundVariantsType>;
type MappedSizeVariantsType = GenericMappingType<SizeVariantsType>;

type IconType = AllHTMLAttributes<HTMLDivElement | null> & {
    backgroundVariant?: BackgroundVariantsType;
    sizeVariant?: SizeVariantsType;
    children: React.ReactNode;
};

export type {
    BackgroundVariantsType,
    SizeVariantsType,
    MappedBackgroundVariantsType,
    MappedSizeVariantsType,
};

export default IconType;