import type { GenericMappingType } from "../Generics/GenericMapping";

type LayoutVariantsType = "desktopOnly" | "mobileOnly" | "responsive" | "responsiveReverse";

type HorizontalLayoutVariantsType =
"justifyStart" | "justifyEnd"
| "justifyEndSafe" | "justifyCenter"
| "justifyCenterSafe" | "justifyBetween"
| "justifyAround" | "justifyEvenly"
| "justifyStretch" | "justifyBaseline"
| "justifyNormal";

type VerticalLayoutVariantsType =
"itemsStart" | "itemsEnd" |
"itemsEndSafe" | "itemsCenter" |
"itemsCenterSafe" | "itemsBaseline" |
"itemsBaselineLast" | "itemsStretch";

type GapVariantsType =
"mini" | "xs"
| "sm" | "md"
| "lg" | "xl"
| "twoXL" | "threeXL";

type MappedLayoutVariantsType = GenericMappingType<LayoutVariantsType>;
type MappedHorizontalLayoutVariantsType = GenericMappingType<HorizontalLayoutVariantsType>;
type MappedVerticalLayoutVariantsType = GenericMappingType<VerticalLayoutVariantsType>;
type MappedGapVariantsType = GenericMappingType<GapVariantsType>;

export type {
    LayoutVariantsType,
    HorizontalLayoutVariantsType,
    VerticalLayoutVariantsType,
    GapVariantsType,
    MappedLayoutVariantsType,
    MappedHorizontalLayoutVariantsType,
    MappedVerticalLayoutVariantsType,
    MappedGapVariantsType,
};