import {
    type ImgHTMLAttributes
} from "react";

type FillType = {
    fill?: boolean;
};

type PhotoType = ImgHTMLAttributes<HTMLImageElement> & {
    width?: number;
    height?: number;
    src: string;
    alt: string;
} & FillType;

export default PhotoType;