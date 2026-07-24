import type { FC } from "react";
import clsx from "clsx";

import type {
  MappedTextVariantsType,
  MappedFontVariants,
  TextType,
} from "@/types/Text/TextType";

const Text: FC<TextType> = ({
  textVariant = "bodyText",
  fontVariant = "spaceGrotesk",
  children,
  ...attrs
}) => {
  const TextVariants: MappedTextVariantsType = {
    hero: "text-4xl md:text-6xl font-black",
    section: "text-4xl md:text-5xl font-extrabold",
    card: "text-2xl md:text-3xl font-bold",
    // bodyText -> lg:text-[calc(var(--spacing-sm)/1.09)]
    bodyText: "text-lg md:text-[calc(var(--spacing-sm)/1.09)]",
    // strongBodyText -> lg:text-[calc(var(--spacing-sm)/1.09)]
    strongBodyText: "text-base md:text-lg lg:text-[calc(var(--spacing-sm)/1.09)] font-medium",
    small: "text-sm md:text-[15px]",
  };

  const fontVariants:MappedFontVariants = {
    spaceGrotesk: "--font-space-grotesk",
    Inter: "--font-inter",
  };

  if (textVariant === "hero") {
    return (
      <h1
      {...attrs}
      className={clsx(TextVariants[textVariant], attrs.className)}>{children}</h1>
    );
  } else if (textVariant === "section") {
    return (
      <h2
      {...attrs}
      className={clsx(TextVariants[textVariant], attrs.className)}>{children}</h2>
    );
  } else if (textVariant === "card") {
    return (
      <h3
      {...attrs}
      className={clsx(TextVariants[textVariant], attrs.className)}>{children}</h3>
    );
  } else if (textVariant === "bodyText") {
    return (
      <p 
      {...attrs}
      className={clsx(TextVariants[textVariant], attrs.className)}>{children}</p>
    );
  } else if (textVariant === "strongBodyText") {
    return (
      <strong 
      {...attrs}
      className={clsx(TextVariants[textVariant], attrs.className)}>{children}</strong>
    );
  } else if (textVariant === "small") {
    return (
      <p 
      {...attrs}
      className={clsx(TextVariants[textVariant], attrs.className)}>{children}</p>
    );
  };
};

export default Text;