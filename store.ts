import { create } from "zustand";

type ScoreType = {
    score: number;
    setScore: (score: number | ((prev: number) => number)) => void;
};

const useScore = create<ScoreType>()((set) => ({
    score: 0,
    setScore: (score) => set((state: any) => ({
        score: typeof score === "function" ? score(state.score) : score
    })),
}));

export default useScore;