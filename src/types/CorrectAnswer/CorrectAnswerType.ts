type correctAnswerType = {
    isCorrectAnswerVisible: boolean;
    score?: number;
    setScore: (type: any) => void;
    setCorrectAnswerVisible: (type: boolean) => void;
};

export default correctAnswerType;