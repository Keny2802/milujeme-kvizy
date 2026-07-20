import {
    type FC,
    Fragment,
} from "react";
import {
    ArrowLeftIcon,
    ArrowRightIcon,
} from "@heroicons/react/24/solid";

import Flex from "./Flex";
import ToolTip from "./ToolTip";
import Cta from "./Cta";
import Icon from "./Icon/Icon";

type QuizControllersType = {
    currentIndex: number;
    selectedAnswer: string;
    PreviousQuizAnswer: any;
    NextQuizAnswer: any;
};

const QuizControllers:FC<QuizControllersType> = ({
    currentIndex = 0,
    selectedAnswer,
    PreviousQuizAnswer,
    NextQuizAnswer
}) => {
    return (
        <Fragment>
            <Flex
            layoutVariant="desktopOnly"
            horizontalVariant="justifyBetween"
            className="w-full mt-sm md:mt-[calc(var(--spacing-lg)*1.01)] p-sm md:p-0">
                <ToolTip
                parent={
                    <Cta
                    variant="button"
                    { ...(
                        currentIndex === 0 ? {
                            disabled: true,
                            backgroundVariant: "gray"
                        } : {
                            disabled: false
                        }
                    ) }
                    onClick={PreviousQuizAnswer}>
                        <Icon
                        { ...( selectedAnswer ? { backgroundVariant: "white" } : { backgroundVariant: "black" } ) }> <ArrowLeftIcon /> </Icon>
                    </Cta>
                }
                text="Zobrazit předchozí otázku" />
                <ToolTip
                parent={
                    <Cta
                    variant="button"
                    { ...(
                        selectedAnswer ? {
                            backgroundVariant: "violet",
                            disabled: false,
                        } : {
                            backgroundVariant: "gray",
                            disabled: true,
                        }
                    ) }
                    onClick={NextQuizAnswer}>
                        <Icon
                        { ...( selectedAnswer ? { backgroundVariant: "white" } : { backgroundVariant: "black" } ) }> <ArrowRightIcon /> </Icon>
                    </Cta>
                }
                sideVariant="right"
                text="Zobrazit další otázku"
                />
            </Flex>
        </Fragment>
    );
};

export default QuizControllers;