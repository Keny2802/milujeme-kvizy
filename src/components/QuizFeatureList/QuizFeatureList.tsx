import {
    type FC,
    Fragment
} from "react";
import {
    InformationCircleIcon,
    ViewColumnsIcon,
    TableCellsIcon,
} from "@heroicons/react/24/solid";
import type { LayoutVariantsType } from "@/types/Flex/FlexTypes";
import clsx from "clsx";

import Flex from "../Flex";
import ToolTip from "../ToolTip";
import Icon from "../Icon/Icon";
import Text from "../Text";


type QuizFeatureListType = {
    isCorrectAnswerVisible: boolean;
    setScore: (type: any) => void;
    setCorrectAnswerVisible: (type: boolean) => void;
    correctAnswer: string;
    layoutVariant: LayoutVariantsType;
    setLayoutVariant: (type: LayoutVariantsType) => void;
};

const QuizFeatureList:FC<QuizFeatureListType> = ({
        isCorrectAnswerVisible,
        setScore,
        setCorrectAnswerVisible,
        correctAnswer,
        layoutVariant = "responsive",
        setLayoutVariant
    }) => {

        const SetCorrectAnswer = () => {
            if (isCorrectAnswerVisible) {
                setScore((prev: number) => prev === 0 ? 0 : prev - 1);
            };

            setCorrectAnswerVisible(true);
        };

    return (
        <Fragment>
            <Flex
            layoutVariant="desktopOnly"
            verticalVariant="itemsCenter"
            className="pl-sm md:pl-0 md:pt-lg">
                <Flex
                layoutVariant="desktopOnly"
                verticalVariant="itemsCenter">
                    <ToolTip
                    parent={
                        <Icon
                        backgroundVariant={isCorrectAnswerVisible ? "violet" : "blackOne"}
                        onClick={SetCorrectAnswer}
                        className={clsx(
                            "transition-colors duration-300 ease-in-out"
                        )}>
                            <InformationCircleIcon />
                        </Icon>
                    }
                    text="Zobrazit správnou odpověď"
                    />
                    {isCorrectAnswerVisible && ( <Text>Správna odpověď: {correctAnswer}</Text> )}
                </Flex>
                <ToolTip
                parent={
                    layoutVariant === "responsive" ? (
                        <Icon
                        backgroundVariant={layoutVariant === "responsive" ? "violet" : "blackOne"}
                        onClick={() => setLayoutVariant("mobileOnly")}
                        className={clsx(
                            "transition-colors duration-300 ease-in-out"
                        )}><ViewColumnsIcon /></Icon>
                    ) : (
                        <Icon
                        onClick={() => setLayoutVariant("responsive")}
                        className={clsx(
                            "transition-colors duration-300 ease-in-out"
                        )}><TableCellsIcon /></Icon>
                    )
                }
                className="hidden md:inline-block"
                text="Změna rozložení vzhledu"
                />
            </Flex>
        </Fragment>
    );
};

export default QuizFeatureList;