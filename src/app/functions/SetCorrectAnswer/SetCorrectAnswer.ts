import { type FC } from "react";

import type correctAnswerType from "@/types/CorrectAnswer/CorrectAnswerType";

const SetCorrectAnswer = ({
    isCorrectAnswerVisible,
    setScore,
    setCorrectAnswerVisible,
}: correctAnswerType) => {
    if (isCorrectAnswerVisible) {
        setScore((prev: number) => prev === 0 ? 0 : prev - 1);
    };

    setCorrectAnswerVisible(true);
};

export default SetCorrectAnswer;