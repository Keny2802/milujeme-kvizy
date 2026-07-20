import {
  type AllHTMLAttributes,
  type FC,
  Fragment
} from "react";
import Link from "next/link";

import type { DefaultType } from "@/types/DefaultType";

type AnchorType = AllHTMLAttributes<HTMLAnchorElement> & {
  href: string;
  children?: React.ReactNode;
};

const Anchor: FC<AnchorType> = ({
  href,
  children,
  ...attrs
}) => {
  return (
    <Fragment>
      <Link
        {...attrs}
        {...(href ? { href: href } : { href: "" })}>
        {children}
      </Link>
    </Fragment>
  );
};

export default Anchor;