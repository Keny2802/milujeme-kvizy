"use client";

import { createContext, useContext, type FC, Fragment, useState } from "react";

import type { DefaultType } from "@/types/DefaultType";
import Text from "./Text";

type ScoreContextType = {
    currentScore: number;
    setCurrentScore?: (num: number) => void;
};

const scoreContext = createContext<ScoreContextType | undefined>(undefined);