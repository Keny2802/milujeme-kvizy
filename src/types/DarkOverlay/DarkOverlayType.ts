import type { AllHTMLAttributes } from "react";
import type { GenericMappingType } from "../Generics/GenericMapping";

type DarkOverlayVariantsType = "insetZero" | "topZero" | "rightZero" | "bottomZero" | "leftZero";
type MappedDarkOverlayVariantsType = GenericMappingType<DarkOverlayVariantsType>;

type DarkOverlayType = AllHTMLAttributes<HTMLDivElement> & {
    darkOverlayVariant?: DarkOverlayVariantsType;
    children?: React.ReactNode;
};

export type {
    DarkOverlayVariantsType,
    MappedDarkOverlayVariantsType,
    DarkOverlayType,
};