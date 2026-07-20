"use client";

import {
    type FC,
    useState,
    useEffect,
    Fragment,
} from "react";

import type TimerType from "@/types/Timer/TimerType";
import Wrapper from "./Wrapper";
import Text from "./Text";

const Timer:FC<TimerType> = ({
    initialCount = 0,
    ...attrs
}) => {
    // const [hours, setHours] = useState<number>(initialCount);
    const [minutes, setMinutes] = useState<number>(initialCount);
    const [seconds, setSeconds] = useState<number>(initialCount);
    const now = new Date().getTime();

    useEffect(() => {
        const interval = setInterval(() => {
            
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    const setFormatTime = (time: number) => {
        if (time < 10) {
            return `0${time}`;
        };

        return time.toString();
    };

    // const initialTime = (time: number) => {
    //     const minute = time / 60;
    //     setMinutes(minute)
    // };

    // const remainingTime = (time: number) => {};

    const addToDate = () => {
        // const minute = Math.floor((now % (1000 * 60 * 60)) / (1000 * 60));
        // setMinutes(minute);
    };

    return (
        <Fragment>
            <Wrapper
            {...attrs}>
                <Text textVariant="strongBodyText">
                    {setFormatTime(minutes)} : {setFormatTime(seconds)}
                </Text>
            </Wrapper>
        </Fragment>
    );
};

export default Timer;