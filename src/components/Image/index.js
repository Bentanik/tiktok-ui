import classNames from "classnames";
import { useState, forwardRef } from "react";
import images from "~/assets/images";
import styles from "./Image.module.scss";

function Image({ src, alt, className, ...props }, ref) {
  const [fallBack, setFallBack] = useState("");
  const handleError = () => {
    setFallBack(images.noImage);
  };

  return (
    <img
      className={classNames(styles.wrapper, className)}
      ref={ref}
      src={fallBack || src}
      alt={alt}
      {...props}
      onError={handleError}
    />
  );
}

export default forwardRef(Image);
