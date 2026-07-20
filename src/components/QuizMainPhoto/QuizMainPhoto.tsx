import {
    type AllHTMLAttributes,
    type FC,
    Fragment,
} from "react";
import clsx from "clsx";

import type { LayoutVariantsType } from "@/types/Flex/FlexTypes";
import Flex from "../Flex";
import Photo from "../Photo";

type QuizMainPhotoType = AllHTMLAttributes<HTMLImageElement> & {
    layoutVariant: LayoutVariantsType
    currentPage: any;
};

const QuizMainPhoto:FC<QuizMainPhotoType> = ({
    layoutVariant,
    currentPage,
    ...attrs
}) => {
    return (
        <Fragment>
            <Flex
                layoutVariant="mobileOnly"
                horizontalVariant="justifyCenter"
                verticalVariant="itemsCenter">
                    <Flex
                    layoutVariant="mobileOnly"
                    verticalVariant="itemsCenter"
                    gapVariant="lg">
                        <Photo
                        { ...(
                            layoutVariant === "responsive" ? {
                                width: 600,
                                height: 600,
                            } : {
                                width: 900,
                                height: 900,
                            }
                        ) }
                        src={currentPage?.src || ""}
                        alt={currentPage?.alt || ""}
                        className={clsx(
                            "quiz-main-photo-component",
                            "md:min-w-[calc(var(--spacing-3xl)*6)] md:max-w-[calc(var(--spacing-3xl)*10)] md:h-[calc(var(--spacing-3xl)*4)] md:min-h-[calc(var(--spacing-3xl)*8)] object-cover rounded-2xl",
                            attrs.className,
                        )}
                        />
                    </Flex>
                </Flex>
        </Fragment>
    );
};

export default QuizMainPhoto;