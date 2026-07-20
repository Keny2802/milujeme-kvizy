import type { AllHTMLAttributes } from "react";
import type { GenericMappingType } from "../Generics/GenericMapping";

type BackgroundVariantsType = "violet" | "black" | "white" | "gray" | "green" | "red";
type MappedBackgroundVariantsType = GenericMappingType<BackgroundVariantsType>;

type ProgressBarType = AllHTMLAttributes<HTMLDivElement> & {
    value: number;
    quiz: any[];
    backgroundVariant?: BackgroundVariantsType;
    className?: string;
    progressBarClassName?: string;
};

export type {
    BackgroundVariantsType,
    MappedBackgroundVariantsType,
};

export default ProgressBarType;