import type { AllHTMLAttributes } from "react";

type TimerType = AllHTMLAttributes<HTMLDivElement> & {
    initialCount?: number;
};

export default TimerType;