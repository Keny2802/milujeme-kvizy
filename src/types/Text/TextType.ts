import type { AllHTMLAttributes } from "react";
import type { GenericMappingType } from "../Generics/GenericMapping";

type TextVariants =
"hero" | "section"
| "card" | "bodyText"
| "strongBodyText" | "small";

type FontVariants = "spaceGrotesk" | "Inter";
type MappedFontVariants = GenericMappingType<FontVariants>;
type MappedTextVariantsType = GenericMappingType<TextVariants>;

type TextType = AllHTMLAttributes<HTMLHeadingElement | HTMLParagraphElement> & {
    textVariant?: TextVariants;
    fontVariant?: FontVariants;
    children: React.ReactNode;
};

export type {
    FontVariants,
    MappedFontVariants,
    MappedTextVariantsType,
    TextType,
};