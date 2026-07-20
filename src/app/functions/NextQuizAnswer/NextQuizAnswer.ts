"use client";

const NextQuizAnswer = (
    useRouter: any,
    currentIndex: number,
    isCorrectAnswerVisible: boolean,
    quiz: any[],
    currentQuiz: any[],
    setScore: (type: any) => void,
    setCurrentIndex: (type: any) => void,
    selectedAnswer: string,
    setSelectedAnswer: (type: string) => void,
    correctAnswer: string,
    setCorrectAnswerVisible: (type: boolean) => void,
) => {
    const router = useRouter();

    if (currentIndex === currentQuiz.length - 1) {
        router.push("/gratulace");
    };

    if (isCorrectAnswerVisible) {
        setScore((prev: number) => prev === 0 ? 0 : prev - 1);
    };

    setCurrentIndex((prev: number) => prev === currentQuiz.length - 1 ? 0 : prev + 1);
    setSelectedAnswer("");
    setScore((prev: number) => selectedAnswer === correctAnswer ? prev + 1 : prev - 1);
    setCorrectAnswerVisible(false);
};

export default NextQuizAnswer;