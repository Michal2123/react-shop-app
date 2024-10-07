import React, { ReactNode } from "react";

interface Props {
  children?: ReactNode;
  type: "submit" | "button";
  onClick: React.MouseEventHandler<HTMLAnchorElement>;
}

const CustomToggle = React.forwardRef<HTMLAnchorElement, Props>(
  ({ children, onClick }, ref) => (
    <a
      href="a"
      ref={ref}
      onClick={(e) => {
        e.preventDefault();
        onClick(e);
      }}
    >
      {children}
    </a>
  )
);

export default CustomToggle;
