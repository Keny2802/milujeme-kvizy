const PreviousQuizAnswer = (setCurrentIndex: (type: any) => void) => {
    setCurrentIndex((prev: number) => prev === 0 ? 0 : prev - 1);
};

export default PreviousQuizAnswer;