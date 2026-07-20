import PreviousQuizAnswer from "../PreviousQuizAnswer/PreviousQuizAnswer";

const KeyboardQuizAnswers = (
    e: KeyboardEvent,
    selectedAnswer: string
) => {
    const { ctrlKey, shiftKey, key } = e;

    if (selectedAnswer && shiftKey && key === "Enter") {
        PreviousQuizAnswer();
    };

    if (ctrlKey && key === "Enter") {
        nextQuizAnswer();
    };
};

export default KeyboardQuizAnswers;