import type { AllHTMLAttributes } from "react";

const DEFAULT_WIDTH_VALUE = 100;
const DEFAULT_HEIGHT_VALUE = 100;

type LogoMeasurementsType = {
    width?: number;
    height?: number;
};

type LogoType = AllHTMLAttributes<HTMLImageElement> & {
    defaultWidth?: typeof DEFAULT_WIDTH_VALUE;
    defaultHeight?: typeof DEFAULT_HEIGHT_VALUE;
} & LogoMeasurementsType;

export {
    DEFAULT_WIDTH_VALUE,
    DEFAULT_HEIGHT_VALUE,
};

export type {
    LogoMeasurementsType,
};

export default LogoType;