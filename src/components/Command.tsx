import { type FC, Fragment } from "react";
import { Command as Cmd, ArrowBigUp } from "lucide-react";

import CommandType, {
    MappedCommandBackgroundVariantsType
} from "@/types/Command/CommandType";
import clsx from "clsx";

import Wrapper from "./Wrapper";
import Flex from "./Flex";
import Text from "./Text";

const Command:FC<CommandType> = ({
    commandVariant = "nextQuestion",
    commandBackgroundVariant = "black",
    children,
    ...attrs
}) => {
    const commandBackgroundVariants:MappedCommandBackgroundVariantsType = {
        violet: "bg-violet text-white",
        black: "bg-black-1 text-white",
        white: "bg-white text-black border border-white/25",
        none: "bg-none",
    };

    return (
        <Fragment>
            <Wrapper
            {...attrs}
            className={clsx(
                commandBackgroundVariants[commandBackgroundVariant],
                // "p-mini rounded-md",
                attrs.className
            )}>
                <Flex
                layoutVariant="desktopOnly"
                verticalVariant="itemsCenter"
                gapVariant="mini">
                    {/* <Cmd className="w-6 h-6" /> */}
                    { commandVariant === "previousQuestion" && <ArrowBigUp className="w-6 h-6"/> }
                    { commandVariant === "nextQuestion" && <Text>Ctrl</Text> }
                    <Text>Enter</Text>
                </Flex>
            </Wrapper>
        </Fragment>
    );
};

export default Command;