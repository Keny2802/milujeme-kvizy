"use client";

import { type FC, Fragment } from "react";
import { usePathname } from "next/navigation";
import clsx from "clsx";

import type LogoType from "@/types/Logo/LogoType";
import {
  DEFAULT_WIDTH_VALUE,
  DEFAULT_HEIGHT_VALUE,
} from "@/types/Logo/LogoType";
import Anchor from "./Anchor";
import Photo from "./Photo";

const Logo:FC<LogoType> = ({
  defaultValue,
  defaultWidth,
  width,
  height,
  ...attrs
}) => {
  const pathname = usePathname();
  const isHome = pathname === "/" ? "" : "/";

  return (
    <Fragment>
      <Anchor href={isHome}>
          <Photo
          {...attrs}
          {
            ...( width && height ? {
              width: width,
              height: height
            } : {
              width: DEFAULT_WIDTH_VALUE,
              height: DEFAULT_HEIGHT_VALUE
            } )
          }
          src="/logo/logo.png"
          alt="Milujeme Kvízy Logo"
          // loading="eager"
          className={clsx(
            attrs.className,
            "logo-component object-cover",
          )}
        />
      </Anchor>
    </Fragment>
  );
};

export default Logo;