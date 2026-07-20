import type { AllHTMLAttributes } from "react";

type MobileMenuType = AllHTMLAttributes<HTMLDivElement> & {
    isMobileMenuVisible: boolean;
    setMobileMenuTovisible: (type: boolean) => void;
    children?: React.ReactNode
};

export default MobileMenuType;