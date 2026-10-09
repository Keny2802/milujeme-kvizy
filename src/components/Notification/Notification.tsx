import {
    type FC,
    Fragment,
} from "react";
import { AnimatePresence, motion } from "motion/react";
import { InformationCircleIcon } from "@heroicons/react/24/solid";
import clsx from "clsx";

import type NotificationType from "@/types/Notification/NotificationType";
import Flex from "../Flex";
import Icon from "../Icon/Icon";

const Notification:FC<NotificationType> = ({
    variantState = "correct",
    backgroundVariant = "green",
    selectedAnswer,
    children,
}) => {
    const BACKGROUND_VARIANTS = {
        green: "bg-green-500",
        red: "bg-red-500",
    };

    return (
        <Fragment>
            {selectedAnswer && (
                <AnimatePresence>
                    <motion.div
                    initial={{ opacity: 0, y: 0, scale: 0, }}
                    animate={{ opacity: 1, x: -20, scale: 1, }}
                    exit={{ opacity: 0, y: 0, scale: 0, }}
                    transition={{ type: "spring", duration: 0.6, ease: "easeInOut" }}
                    className={clsx(
                        backgroundVariant &&BACKGROUND_VARIANTS[backgroundVariant],
                        "p-sm md:p-md fixed left-16 bottom-5 text-white z-50 rounded-2xl transition-all duration-300 ease-in-out",
                    )}>
                        <Flex layoutVariant="desktopOnly" horizontalVariant="justifyCenter" verticalVariant="itemsCenter" gapVariant="xs">
                            <Icon backgroundVariant="white"> <InformationCircleIcon /> </Icon>
                            {variantState && children}
                        </Flex>
                    </motion.div>
                </AnimatePresence>
            )}
        </Fragment>
    );
};

export default Notification;