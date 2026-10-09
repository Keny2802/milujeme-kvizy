"use client";

import { type FC, Fragment, } from "react";
import { XMarkIcon, InformationCircleIcon, } from "@heroicons/react/24/solid";
import { AnimatePresence, motion } from "motion/react";
import clsx from "clsx";

import type HistoryType from "@/types/History/HistoryType";
import Flex from "../Flex";
import Icon from "../Icon/Icon";
import Text from "../Text";
import List from "../List";
import ListItem from "../ListItem";

const History:FC<HistoryType> = ({
    isOpen,
    historyList,
    historyType,
    historyCount,
    setHistoryModalOpen,
    setToHistoryList,
}) => {
    return (
        <Fragment>
            {isOpen && (
                <AnimatePresence>
                    <motion.div
                    initial={{ opacity: 0, }}
                    animate={{ opacity: 1, }}
                    exit={{ opacity: 0, }}
                    onClick={() => setHistoryModalOpen(false)}
                    className="bg-slate-900/20 backdrop-blur-md p-xs sm:p-sm md:p-md lg:p-lg xl:p-xl fixed inset-0 z-50 grid place-items-center overflow-hidden cursor-pointer">
                        <motion.div
                        initial={{ scale: 0, rotate: "50deg", }}
                        animate={{ scale: 1, rotate: "0deg", }}
                        exit={{ scale: 0, rotate: "0deg", }}
                        onClick={(e) => e.stopPropagation()}
                        className={clsx(
                            historyType === "correct" ? "bg-green-500" : "bg-red-500",
                            // max-h-[calc(var(--spacing-3xl)*6)]
                            "text-white p-sm md:p-md lg:p-lg w-full max-w-[calc(var(--spacing-3xl)*5)] md:max-w-[calc(var(--spacing-3xl)*8)] rounded-xl",
                        )}>
                            <Flex layoutVariant="mobileOnly" gapVariant="md">
                                <Icon
                                sizeVariant="xl"
                                backgroundVariant="white"
                                className="ml-auto"
                                onClick={() => setHistoryModalOpen(false)}>
                                    <XMarkIcon />
                                </Icon>
                                <Flex layoutVariant="mobileOnly" gapVariant="xs">
                                    <Icon backgroundVariant="white" sizeVariant="threeXL"> <InformationCircleIcon /> </Icon>
                                    <Text textVariant="card" className="uppercase">
                                        {historyType === "correct" ? "Historie správných odpovědí" : "Historie špatných odpovědí"}
                                    </Text>
                                    {historyCount !== 0 && ( <Text>Podívejte se jak jste si zatím vedli.</Text> )}
                                </Flex>
                                {historyCount !== 0 && (
                                    <List className="w-full border-t border-white/25">
                                        <Flex layoutVariant="mobileOnly" gapVariant="zero" className="max-h-[calc(var(--spacing-3xl)*3)] overflow-y-auto">
                                            {historyList.map((historyItem, historyIndex) => (
                                                <ListItem className="border-b border-white/25 p-xs md:p-sm w-full">
                                                    <Flex layoutVariant="desktopOnly" horizontalVariant="justifyBetween" verticalVariant="itemsCenter" className="w-full">
                                                        <Flex layoutVariant="desktopOnly" verticalVariant="itemsCenter" gapVariant="sm">
                                                            <Text textVariant="card">{historyIndex + 1}.</Text>
                                                            <Text className="line-clamp-1">{historyItem.title}</Text>
                                                        </Flex>
                                                        <Icon backgroundVariant="white" sizeVariant="xl"> <InformationCircleIcon /> </Icon>
                                                    </Flex>
                                                </ListItem>
                                            ))}
                                        </Flex>
                                    </List>
                                )}
                                {historyCount === 0 && (
                                    <Text>{historyType === "correct"
                                        ? "Zatím historie správných odpovědí, je bohužel prázná."
                                        : "Zatím historie špatných odpovědí, je bohužel prázná."
                                    }</Text>
                                )}
                            </Flex>
                        </motion.div>
                    </motion.div>
                </AnimatePresence>
            )}
        </Fragment>
    );
};

export default History;