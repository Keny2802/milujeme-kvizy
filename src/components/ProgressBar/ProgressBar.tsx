import {
    type FC,
    Fragment
} from "react";
import {
    motion
} from "motion/react";
import clsx from "clsx";

import type { MappedBackgroundVariantsType } from "@/types/ProgressBar/ProgressBarType";
import type ProgressBarType from "@/types/ProgressBar/ProgressBarType";

import Wrapper from "../Wrapper";

const ProgressBar:FC<ProgressBarType> = ({
    value,
    inCorrectAnswersCount,
    correctAnswer,
    selectedAnswer,
    backgroundVariant = "gray",
    BACKGROUND_VARIANT = "green",
    quiz,
    className = "",
    progressBarClassName = "",
    ...attrs
}) => {

    const MIN_PROGRESS_VALUE = 0;
    const MAX_PROGRESS_VALUE = 100;

    const BACKGROUND_VARIANTS:MappedBackgroundVariantsType = {
        violet: "bg-violet",
        black: "bg-black",
        white: "bg-white",
        gray: "bg-gray-200",
        green: "bg-green-500",
        red: "bg-red-500",
    };

    const SPRING = {
        type: "spring" as const,
        damping: 10,
        mass: 0.75,
        stifness: 100,
        duration: 0.3,
    };

    return (
        <Fragment>
            <Wrapper
            {...attrs}
            className={clsx(
                "w-full",
                className
            )}>
                <Wrapper className={clsx(
                    BACKGROUND_VARIANTS[backgroundVariant],
                    "w-full h-8 relative overflow-hidden border border-gray-300 rounded-3xl"
                )}>
                    <motion.div
                    initial={{ width: MIN_PROGRESS_VALUE }}
                    animate={{ width: `${Math.max(MIN_PROGRESS_VALUE, Math.min(MAX_PROGRESS_VALUE, value))}%` }}
                    className={clsx(
                        `w-full h-full`,
                        // value <= 50 && BACKGROUND_VARIANTS["violet"],
                        // value >= 50 && BACKGROUND_VARIANTS["green"],

                        // inCorrectAnswersCount && BACKGROUND_VARIANTS["red"],
                        // value === value++ && BACKGROUND_VARIANTS["green"],
                        // value-- && BACKGROUND_VARIANTS["red"],
                        
                        // correctAnswer && BACKGROUND_VARIANTS["green"],
                        
                        // correctAnswer && BACKGROUND_VARIANTS[BACKGROUND_VARIANT],

                        BACKGROUND_VARIANTS[BACKGROUND_VARIANT],

                        // selectedAnswer !== correctAnswer && BACKGROUND_VARIANTS["red"],
                        // value === value-- && BACKGROUND_VARIANTS["red"],
                        // correctAnswer && BACKGROUND_VARIANTS["green"],
                        // !correctAnswer && BACKGROUND_VARIANTS["red"],

                        // correctAnswer && BACKGROUND_VARIANTS["red"],
                        // selectedAnswer !== correctAnswer && BACKGROUND_VARIANTS["red"],
                        progressBarClassName,
                    )}
                    transition={SPRING} />
                </Wrapper>
            </Wrapper>
        </Fragment>
    );
};

export default ProgressBar;