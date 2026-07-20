import { type AllHTMLAttributes } from "react";

type AllowedHTMLTAGSType =
HTMLDivElement | HTMLHeadingElement
| HTMLParagraphElement | HTMLButtonElement
| HTMLAnchorElement;

export type DefaultType = AllHTMLAttributes<AllowedHTMLTAGSType> & {
    href?: string;
    children?: React.ReactNode;
};