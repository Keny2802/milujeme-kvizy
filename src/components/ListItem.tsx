import {
  type FC,
  Fragment
} from "react";
import clsx from "clsx";

import type { DefaultType } from "@/types/DefaultType";

const ListItem: FC<DefaultType> = ({
  children,
  ...attrs
}) => {
  return (
    <Fragment>
      <li className={clsx(
        attrs.className,
        "list-item-component"
      )}>
        {children}
      </li>
    </Fragment>
  );
};

export default ListItem;