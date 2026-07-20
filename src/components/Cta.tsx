import type { FC } from "react";
import clsx from "clsx";

import type {
  MappedBackgroundVariantsType,
  MappedBorderBackgroundVariantsType,
  // RequiredBackgroundVariantsType,
  CtaType,
} from "@/types/Cta/CtaType";
import Anchor from "./Anchor";

const Cta: FC<CtaType> = ({
  backgroundVariant = "violet",
  borderBackgroundVariant = "black",
  linkBackgroundVariant = true,
  variant = "link",
  buttonVariant = "button",
  href,
  children,
  ...attrs
}) => {
  // w-full md:max-w-[calc(var(--spacing-3xl)*3)]
  const backgroundVariants:MappedBackgroundVariantsType = {
    violet: "bg-violet text-white p-xs md:p-sm text-center cursor-pointer border-2 translate-x-[4px] translate-y-[4px] rounded-4xl",
    black: "bg-black text-white p-xs md:p-sm text-center cursor-pointer border-2 translate-x-[4px] translate-y-[4px] rounded-4xl",
    white: "bg-white text-black p-xs md:p-sm text-center cursor-pointer border-2 translate-x-[4px] translate-y-[4px] rounded-4xl",
    green: "bg-green-500 text-white p-xs md:p-sm text-center cursor-pointer border-2 translate-x-[4px] translate-y-[4px] rounded-4xl",
    red: "bg-red-500 text-white p-xs md:p-sm text-center cursor-pointer border-2 translate-x-[4px] translate-y-[4px] rounded-4xl",
    // gray: "bg-gray-500 text-black p-xs md:p-sm text-center cursor-pointer border-2 translate-x-[4px] translate-y-[4px] rounded-4xl",
    gray: "bg-gray-200 text-black p-xs md:p-sm text-center cursor-pointer border-2 translate-x-[4px] translate-y-[4px] rounded-4xl",
  };

  const borderBackgroundVariants:MappedBorderBackgroundVariantsType = {
    violet: "border-2 border-violet shadow-[6px_6px_0px_var(--color-violet)] transtion-all duration-300 ease-in-out focus:outline-none hover:translate-x-[6px] hover:translate-y-[6px] hover:shadow-[8px_8px_0px_var(--color-violet)]",
    black: "border-2 border-black shadow-[6px_6px_0px_var(--color-black)] transtion-all duration-300 ease-in-out focus:outline-none hover:translate-x-[6px] hover:translate-y-[6px] hover:shadow-[8px_8px_0px_var(--color-black)]",
    white: "border-2 border-white shadow-[6px_6px_0px_var(--color-white)] transtion-all duration-300 ease-in-out focus:outline-none hover:translate-x-[6px] hover:translate-y-[6px] hover:shadow-[8px_8px_0px_var(--color-white)]",
    none: "border-none",
  };

  if (variant === "button") {
    return (
      <button
      {...attrs}
      type={buttonVariant}
      disabled={attrs.disabled}
      onClick={attrs.onClick}
      className={clsx(
      "cta-button-component",
      "w-full md:max-w-max",
      backgroundVariants[backgroundVariant],
      borderBackgroundVariants[borderBackgroundVariant],
      attrs.className)}>
        {children}
      </button>
    );
  } else if (variant === "link") {
    return (
      <Anchor
      {...attrs}
      { ...(href ? { href: href } : { href: "" } )}
      { ...( attrs.onClick && { onClick: attrs.onClick } ) }
      className={clsx(
      "cta-link-component",
      "w-full md:max-w-max",
      linkBackgroundVariant && backgroundVariants[backgroundVariant],
      borderBackgroundVariants[borderBackgroundVariant],
      attrs.className
    )}>
        {children}
      </Anchor>
    );
  };
};

export default Cta;