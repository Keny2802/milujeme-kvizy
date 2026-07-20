import {
    type AllHTMLAttributes,
    type FC,
    Fragment
} from "react";
import clsx from "clsx";

type Props = AllHTMLAttributes<HTMLDivElement> & {
    children?: React.ReactNode;
};

const Wrapper:FC<Props> = ({
    children,
    ...attrs
}) => {
    return (
        <Fragment>
            <div
            {...attrs}
            className={clsx(attrs.className)}>
                {children}
            </div>
        </Fragment>
    );
};

export default Wrapper;