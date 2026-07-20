import {
  type FC,
  Fragment
} from "react";
import clsx from "clsx";

import type { DefaultType } from "@/types/DefaultType";

const List: FC<DefaultType> = ({
  children,
  ...attrs
}) => {
  return (
    <Fragment>
      <ul className={clsx(attrs.className)}>
        {children}
      </ul>
    </Fragment>
  );
};

export default List;