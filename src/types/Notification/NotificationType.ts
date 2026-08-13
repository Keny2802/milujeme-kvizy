import type { BackgroundVariantsType } from "../Cta/CtaType";

type NotificationVariantsStates = "correct" | "incorrect";
type NotificationBackgroundVariantsType = "green" | "red";
type OmittedBackgroundVariantsType = "violet" | "black" | "white" | "gray";

type NotificationType = {
    variantState?: NotificationVariantsStates | null;
    // backgroundVariant?: Omit<BackgroundVariantsType, OmittedBackgroundVariantsType>;
    selectedAnswer: string;
    backgroundVariant?: NotificationBackgroundVariantsType | null;
    children: React.ReactNode;
};

export type {
    NotificationVariantsStates,
    OmittedBackgroundVariantsType,
};

export default NotificationType;