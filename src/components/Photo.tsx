import {
  type FC,
  Fragment
} from "react";
import Image from "next/image";
import clsx from "clsx";

import type PhotoType from "@/types/Photo/PhotoType";

const Photo: FC<PhotoType> = ({
  width,
  height,
  fill,
  src,
  alt,
  draggable,
  ...attrs
}) => {
  return (
    <Fragment>
      <Image
        {...attrs}
        {
        ...(width && height)
          ? { width: width, height: height }
          : { fill: true }
        }
        src={src}
        alt={alt}
        draggable={false}
        className={clsx(
          attrs.className,
          "photo-component selection:select-none",
        )}
      />
    </Fragment>
  );
};

export default Photo;