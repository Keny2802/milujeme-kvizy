import { type FC, Fragment } from "react";

import Grid from "../Grid";
import ToolTip from "../ToolTip";
import Cta from "../Cta";
import Text from "../Text";

type QuizCtasType = {
    mixedQuizAnswers: any[];
    selectedAnswer: string;
    setSelectedAnswer: (type: string) => void;
};

const QuizCtas:FC<QuizCtasType> = ({
    mixedQuizAnswers,
    selectedAnswer,
    setSelectedAnswer,
}) => {
    return (
        <Fragment>
            <Grid
            gridVariant="two"
            className="w-full p-mini md:p-0 items-center">
                { mixedQuizAnswers.map((answer, idx) => {
                    return (
                        <ToolTip
                        key={idx}
                        parent={
                            <Cta
                            key={idx}
                            variant="button"
                            className="min-w-full md:min-h-24 md:max-h-32"
                            {
                                ...(
                                    idx === 0 && { backgroundVariant: "violet", borderBackgroundVariant: "black" }
                                    || idx === 1 && { backgroundVariant: "black", borderBackgroundVariant: "violet" }
                                    || idx === 2 && { backgroundVariant: "white", borderBackgroundVariant: "black" }
                                )
                            }
                            {
                                ...(
                                    idx === 0 && selectedAnswer === answer && { backgroundVariant: "green" }
                                    || idx === 1 && selectedAnswer === answer && { backgroundVariant: "green" }
                                    || idx === 2 && selectedAnswer === answer && { backgroundVariant: "green" }
                                    || idx === 3 && selectedAnswer === answer && { backgroundVariant: "green" }
                                )
                            }
                            onClick={() => {
                                setSelectedAnswer(answer);
                            }}>
                                <Text>{idx + 1}) {answer}</Text>
                            </Cta>
                        }
                        text={`Zvolit ${idx + 1}. možnost`}
                        className="w-full"
                        />
                    );
                })
                }
            </Grid>
        </Fragment>
    );
};

export default QuizCtas;