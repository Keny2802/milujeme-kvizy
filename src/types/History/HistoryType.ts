type HistoryUnionType = "correct" | "incorrect";

type HistoryType = {
    isOpen: boolean;
    historyType?: HistoryUnionType;
    historyCount: number;
    historyList: any[],
    setHistoryModalOpen: (type: boolean) => void;
    setToHistoryList: (type: any[]) => void; 
};

export type {
    HistoryUnionType,
};

export default HistoryType;