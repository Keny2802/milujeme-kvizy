import { type AllHTMLAttributes } from "react";

import type { GenericMappingType } from "../Generics/GenericMapping";

type CommandVariantsType = "previousQuestion" | "nextQuestion";
type CommandBackgroundVariantsType = "violet" | "black" | "white" | "none";
type MappedCommandVariantsType = GenericMappingType<CommandVariantsType>;
type MappedCommandBackgroundVariantsType = GenericMappingType<CommandBackgroundVariantsType>;

type CommandType = AllHTMLAttributes<HTMLDivElement> & {
    commandVariant?: CommandVariantsType;
    commandBackgroundVariant?: CommandBackgroundVariantsType;
    children?: React.ReactNode;
};

export type {
    MappedCommandVariantsType,
    MappedCommandBackgroundVariantsType,
};

export default CommandType;