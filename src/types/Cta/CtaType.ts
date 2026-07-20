import type { AllHTMLAttributes } from "react";
import GenericMappingVariantType, {
    type GenericMappingType,
} from "../Generics/GenericMapping";

type BackgroundVariantsType = "violet" | "black" | "white" | "green" | "red" | "gray";
type BorderBackgroundVariantsType = "violet" | "black" | "white" | "none";
// type RequiredBackgroundVariantsType = { [ K in keyof Pick<MappedBackgroundVariantsType, "green" | "gray"> ]?: string; };
type VariantsType = "button" | "link";
type ButtonVariantsType = "button" | "submit" | "reset";

type MappedBackgroundVariantsType = GenericMappingType<BackgroundVariantsType>;
type MappedVariantsType = GenericMappingType<VariantsType>;
type MappedButtonVariantsType = GenericMappingType<ButtonVariantsType>;
type MappedBorderBackgroundVariantsType = GenericMappingType<BorderBackgroundVariantsType>;

// Generic type for mapping

type CtaType = AllHTMLAttributes<HTMLButtonElement | HTMLAnchorElement> & {
    backgroundVariant?: BackgroundVariantsType;
    borderBackgroundVariant?: BorderBackgroundVariantsType;
    linkBackgroundVariant?: boolean;
    variant?: VariantsType;
    buttonVariant?: ButtonVariantsType;
    href?: string;
    children: React.ReactNode;
};

export type {
    BackgroundVariantsType,
    BorderBackgroundVariantsType,
    // RequiredBackgroundVariantsType,
    VariantsType,
    ButtonVariantsType,
    MappedBackgroundVariantsType,
    MappedVariantsType,
    MappedButtonVariantsType,
    MappedBorderBackgroundVariantsType,
    CtaType,
};