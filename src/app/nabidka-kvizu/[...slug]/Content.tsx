"use client";

import {
    type FC,
    useState,
    useEffect,
    useMemo,
    Fragment,
} from "react";
import { CheckCircleIcon, XCircleIcon } from "@heroicons/react/24/solid";
import { usePathname, useRouter } from "next/navigation";

import type { DefaultType } from "@/types/DefaultType";
import type { LayoutVariantsType } from "@/types/Flex/FlexTypes";

import Shuffled from "@/app/functions/Shuffled/Shuffled";
import QuizesCardArray from "@/app/Arrays/QuizesCardArray/QuizesCardArray";
import quizItalianCosaNostra from "@/app/json-quizes/quizItalianCosaNostra.json";
import quizAmericanMafia from "@/app/json-quizes/quizAmericanMafia.json";
import quizWorldWar from "@/app/json-quizes/quizWorldWar.json";

import Header from "@/components/Header";
import Section from "@/components/Section";
import Flex from "@/components/Flex";
import QuizMainPhoto from "@/components/QuizMainPhoto/QuizMainPhoto";
import Text from "@/components/Text";
import QuizCtas from "@/components/QuizCtas/QuizCtas";
import QuizFeatureList from "@/components/QuizFeatureList/QuizFeatureList";
import ProgressBar from "@/components/ProgressBar/ProgressBar";
import Quizes from "@/sections/Quizes";
import Wrapper from "@/components/Wrapper";
import Contact from "@/sections/Contact";
import Footer from "@/components/Footer";
import QuizControllers from "@/components/QuizControllers";
import Icon from "@/components/Icon/Icon";
import Notification from "@/components/Notification/Notification";

const Content: FC<DefaultType> = ({ ...attrs }) => {
    const currentPathName = usePathname();
    const router = useRouter();

    const [currentIndex, setCurrentIndex] = useState<number>(0);
    // const [currentIndex, setCurrentIndex] = useState<number>(83);
    const [score, setScore] = useState<number>(currentIndex);
    const [selectedAnswer, setSelectedAnswer] = useState<string>("");
    const [isCorrectAnswerVisible, setCorrectAnswerVisible] = useState<boolean>(false);
    const [isShuffled, setToShuffled] = useState<boolean>(false);
    const [layoutVariant, setLayoutVariant] = useState<LayoutVariantsType>("responsive");
    const [correctAnswersCount, setCorrectAnswersCount] = useState<number>(0);
    const [inCorrectAnswersCount, setInCorrectAnswersCount] = useState<number>(0);
    const [storedQuiz, setStoredQuiz] = useState<any>();
    const LS_KEY = "stored_quiz_question";

    useEffect(() => {
        const storedNewQuizQuestion = JSON.parse(JSON.stringify(localStorage.getItem(LS_KEY)));

        if (storedNewQuizQuestion) setStoredQuiz(storedNewQuizQuestion);
    }, [currentIndex]);

    useEffect(() => {
        localStorage.setItem(LS_KEY, JSON.stringify(currentQuiz[currentIndex]));
    }, [currentIndex]);

    const currentPage = QuizesCardArray.find((page) => {
        return page.href === currentPathName;
    });

    const italianCosaNostraPage = currentPage?.href === "/nabidka-kvizu/kviz-italske-cosa-nostry";
    const americanMafiaPage = currentPage?.href === "/nabidka-kvizu/kviz-americko-italska-mafie";
    const worldWarPage = currentPage?.href === "/nabidka-kvizu/kviz-2-svetova-valka";
    const currentQuiz = italianCosaNostraPage ? quizItalianCosaNostra : americanMafiaPage ? quizAmericanMafia : worldWarPage ? quizWorldWar : quizWorldWar;
    
    const mixedCurrentQuiz = useMemo(() => {
        if (!isShuffled) return;

        return Shuffled(currentQuiz);
    }, [isShuffled]);
    // const mixedCurrentQuiz = Shuffled(currentQuiz);
    const quizAnswers = currentQuiz[currentIndex].answers;

    const mixedQuizAnswers = useMemo(() => {
        return Shuffled(quizAnswers);
    }, [currentIndex, isShuffled]);

    const correctAnswer = currentQuiz[currentIndex].correct_answer;

    const PreviousQuizAnswer = () => {
        setCurrentIndex((prev: number) => prev === 0 ? 0 : prev - 1);
    };

    const NextQuizAnswer = () => {
        if (currentIndex === currentQuiz.length - 1) {
            router.push("/gratulace");
            return;
        };

        if (isCorrectAnswerVisible) {
            setScore((prev: number) => prev === 0 ? 0 : prev - 1);
        };

        setCurrentIndex((prev: number) => prev === currentQuiz.length - 1 ? 0 : prev + 1);
        setCorrectAnswersCount((prev: number) => selectedAnswer === correctAnswer ? prev + 1 : prev);
        setInCorrectAnswersCount((prev: number) => selectedAnswer !== correctAnswer ? prev + 1 : prev);
        setSelectedAnswer("");
        setCorrectAnswerVisible(false);
    };

    return (
        <Fragment>
            <Header />
            <Section
            {...attrs}
            paddingVariant="sm"
            className="mt-[calc(var(--spacing-lg)*3)] md:mt-[calc(var(--spacing-xl)*3)] w-full">
                <Flex
                layoutVariant={layoutVariant}
                horizontalVariant="justifyCenter"
                verticalVariant="itemsCenter"
                className="min-w-full md:p-lg md:pt-0">
                    <QuizMainPhoto
                    layoutVariant={layoutVariant}
                    currentPage={currentPage}
                    className="p-xs md:p-0 rounded-3xl"
                    />
                    <Wrapper className="mt-sm md:mt-md lg:mt-lg w-full md:min-w-[calc(var(--spacing-3xl)*6)] md:max-w-[calc(var(--spacing-3xl)*10)]">
                        <Flex
                        layoutVariant="mobileOnly"
                        gapVariant="sm"
                        className="p-sm md:p-0">
                            <Flex
                            layoutVariant="desktopOnly"
                            verticalVariant="itemsCenter"
                            className="w-full">
                                <Text
                                textVariant="card"
                                className="whitespace-nowrap">{currentIndex} / {currentQuiz.length}</Text>
                                <Wrapper className="w-0.5 h-6 bg-gray-300 rounded-full" />
                                <Flex
                                layoutVariant="desktopOnly"
                                verticalVariant="itemsCenter"
                                gapVariant="sm">
                                    <Icon backgroundVariant="green500"> <CheckCircleIcon /> </Icon>
                                    <Text>{correctAnswersCount}</Text>
                                </Flex>
                                <Wrapper className="w-0.5 h-6 bg-gray-300 rounded-full" />
                                <Flex
                                layoutVariant="desktopOnly"
                                verticalVariant="itemsCenter"
                                gapVariant="sm">
                                    <Icon backgroundVariant="red500"> <XCircleIcon /> </Icon>
                                    <Text>{inCorrectAnswersCount}</Text>
                                </Flex>
                            </Flex>
                            <ProgressBar
                            value={correctAnswersCount}
                            inCorrectAnswersCount={inCorrectAnswersCount}
                            correctAnswer={correctAnswer}
                            selectedAnswer={selectedAnswer}
                            { ...(
                                correctAnswersCount === +1 && { BACKGROUND_VARIANT: "green" }
                                || inCorrectAnswersCount === +1 && { BACKGROUND_VARIANT: "red" }
                            ) }
                            quiz={currentQuiz}
                            />
                            <Text
                            textVariant="card"
                            className="uppercase">
                                { isShuffled && mixedCurrentQuiz && mixedCurrentQuiz[currentIndex]?.title }
                                { !isShuffled && currentQuiz[currentIndex]?.title }
                            </Text>
                            <Text>
                                { isShuffled && mixedCurrentQuiz && mixedCurrentQuiz[currentIndex]?.subheading }
                                { !isShuffled && currentQuiz[currentIndex]?.subheading }
                            </Text>
                            <QuizCtas
                            mixedQuizAnswers={
                                isShuffled && mixedCurrentQuiz &&mixedCurrentQuiz[currentIndex].answers ||
                                !isShuffled && mixedQuizAnswers
                            }
                            selectedAnswer={selectedAnswer}
                            setSelectedAnswer={setSelectedAnswer}
                            />
                        </Flex>
                        <Flex
                        layoutVariant="mobileOnly"
                        gapVariant="mini">
                            <QuizFeatureList
                            setScore={setScore}
                            isCorrectAnswerVisible={isCorrectAnswerVisible}
                            setCorrectAnswerVisible={setCorrectAnswerVisible}
                            correctAnswer={correctAnswer}
                            isShuffled={isShuffled}
                            setToShuffled={setToShuffled}
                            layoutVariant={layoutVariant}
                            setLayoutVariant={setLayoutVariant}
                            />
                            <QuizControllers
                            currentIndex={currentIndex}
                            selectedAnswer={selectedAnswer}
                            PreviousQuizAnswer={PreviousQuizAnswer}
                            NextQuizAnswer={NextQuizAnswer}
                            />
                        </Flex>
                    </Wrapper>
                </Flex>
            </Section>
            <Quizes className="md:mt-[calc(var(--spacing-xl)*1.25)]" />
            <Contact />
            <Footer />
            <Notification
            selectedAnswer={selectedAnswer}
            {
                ...( correctAnswer === selectedAnswer && {
                    variantState: "correct",
                    backgroundVariant: "green",
                } || correctAnswer !== selectedAnswer && {
                    variantState: "incorrect",
                    backgroundVariant: "red",
                } || selectedAnswer === "" && {
                    variantState: null,
                    backgroundVariant: null,
                })
            }
            >
                { correctAnswer === selectedAnswer ? <Text>Správná odpověď</Text> : <Text>Špatná odpověď</Text> }
                {/* { inCorrectAnswersCount && ( <Text>Špatná odpověď</Text> ) } */}
            </Notification>
        </Fragment>
    );
};

export default Content;