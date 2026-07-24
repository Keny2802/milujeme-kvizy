"use client";

import {
    ReactNode,
    createContext,
    type FC,
    useState,
    useMemo,
    useCallback,
    useContext,
    Fragment,
} from "react";

interface ScoreContextType {
    score: number;
    setScore: (type: number) => void;
};

const ScoreContext = createContext<ScoreContextType | undefined>(undefined);

interface ScoreProviderType {
    children: ReactNode;
};


export const ScoreContextProvider = ({ children }: ScoreProviderType) => {
    const [score, setScore] = useState<number>(0);

    const scoreValue = useMemo(() => ({ score, setScore }), [ score, setScore ]);

    return (
       <Fragment>
            <ScoreContext.Provider value={{ score: scoreValue.score, setScore: scoreValue.setScore }}>
                {children}
            </ScoreContext.Provider>
       </Fragment>
    );
};

export const useScore = ():ScoreContextType => {
    const context = useContext(ScoreContext);

    if (context === undefined) throw new Error("Context has to bee within Context Provider.");

    return context;
};

export default ScoreContextProvider;