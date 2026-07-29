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
// icon komponenta

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
import ScoreContextProvider from "@/app/context/ScoreContext";
/*
- Timer
- Features lišta
- Icon komponenta
- Border komponenta
- Uložení do congrats page správných a špatných odpovědí
- Uložení aktuální otázky do localstorage
- Úpravy ze seznamu
*/

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

    // useEffect(() => {
    //     // localStorage.setItem("stored_quiz_question", JSON.stringify(currentQuiz[currentIndex].title));

    //     const setStoredNewQuiz = () => {
    //         // if (storedNewQuiz) {}
    //         // if (!localStorage.getItem("stored_quiz_question")) {
    //             // localStorage.setItem("stored_quiz_question", JSON.stringify(currentQuiz[currentIndex]));
    //         // };
    //         localStorage.setItem("stored_quiz_question", JSON.stringify(currentQuiz[currentIndex].title));
    //     };

    //     const getStoredNewQuiz = () => {
    //         localStorage.getItem("stored_quiz_question");
    //     };

    //     const newCurrentStoredQuiz = JSON.parse(JSON.stringify(localStorage.getItem("stored_quiz_question")));
    //     // const newCurrentStoredQuiz = localStorage.getItem("stored_quiz_question");
    //     setStoredQuiz(newCurrentStoredQuiz);

    //     window.addEventListener("beforeunload", getStoredNewQuiz);
    //     window.addEventListener("load", setStoredNewQuiz);

    //     return () => {
    //         window.removeEventListener("beforeunload", getStoredNewQuiz);
    //         window.removeEventListener("load", setStoredNewQuiz);
    //     };
    // }, [currentIndex]);

    const currentPage = QuizesCardArray.find((page) => {
        return page.href === currentPathName;
    });

    const italianCosaNostraPage = currentPage?.href === "/nabidka-kvizu/kviz-italske-cosa-nostry";
    const americanMafiaPage = currentPage?.href === "/nabidka-kvizu/kviz-americko-italska-mafie";
    const worldWarPage = currentPage?.href === "/nabidka-kvizu/kviz-2-svetova-valka";
    const currentQuiz = italianCosaNostraPage ? quizItalianCosaNostra : americanMafiaPage ? quizAmericanMafia : worldWarPage ? quizWorldWar : quizWorldWar;
    
    const mixedCurrentQuiz = useMemo(() => {
        if (!isShuffled) {
            // setToShuffled(true);
            return;
        };
        // else return Shuffled(currentQuiz);

        // return Shuffled(currentQuiz);
    }, [isShuffled]);
    // const mixedCurrentQuiz = Shuffled(currentQuiz);
    const quizAnswers = currentQuiz[currentIndex].answers;

    const mixedQuizAnswers = useMemo(() => {
        return Shuffled(quizAnswers);
    }, [currentIndex, isShuffled]); 
    // chyba renderuje se to když vypnu shuffle tak sice nezmění answers cta ale jejich pozice ano, vede k nežádanému re-renderu
    // po vypnutí shuffle feature by se mělo vrátit na předchozí current index kvízové otázky
    // Přidat icon komponentu, vyčistit kód, zrefaktorovat a rozřadit do komponent
    // Spočítat můj celý code base

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
        // setScore((prev: number) => selectedAnswer === correctAnswer ? prev + 1 : prev - 1);
        // setScore((prev: number) => selectedAnswer === correctAnswer ? prev + 1 : prev);
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
                    <ScoreContextProvider>
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
                                        <CheckCircleIcon className="w-8 h-8 text-green-500" />
                                        <Text>{correctAnswersCount}</Text>
                                    </Flex>
                                    <Wrapper className="w-0.5 h-6 bg-gray-300 rounded-full" />
                                    <Flex
                                    layoutVariant="desktopOnly"
                                    verticalVariant="itemsCenter"
                                    gapVariant="sm">
                                        <XCircleIcon className="w-8 h-8 text-red-500" />
                                        <Text>{inCorrectAnswersCount}</Text>
                                    </Flex>
                                </Flex>
                                <ProgressBar
                                value={correctAnswersCount}
                                quiz={currentQuiz}
                                />
                                <Text
                                textVariant="card"
                                className="uppercase">
                                    {/* { currentQuiz[currentIndex].title } */}
                                    {/* { isShuffled === true && mixedCurrentQuiz[currentIndex].title }
                                    { isShuffled === false && currentQuiz[currentIndex].title } */}
                                    { isShuffled && mixedCurrentQuiz[currentIndex]?.title }
                                    { !isShuffled && currentQuiz[currentIndex]?.title }
                                    {/* {storedQuiz} */}
                                </Text>
                                {/* <Text>{ currentQuiz[currentIndex]?.subheading }</Text> */}
                                <Text>
                                    { isShuffled && mixedCurrentQuiz[currentIndex]?.subheading }
                                    { !isShuffled && currentQuiz[currentIndex]?.subheading }
                                </Text>
                                <QuizCtas
                                // mixedQuizAnswers={mixedQuizAnswers}
                                mixedQuizAnswers={
                                    isShuffled && mixedCurrentQuiz[currentIndex].answers ||
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
                    </ScoreContextProvider>
                </Flex>
            </Section>
            <Quizes className="md:mt-[calc(var(--spacing-xl)*1.25)]" />
            <Contact />
            <Footer />
        </Fragment>
    );
};

export default Content;