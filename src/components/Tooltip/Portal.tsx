import { FC, ReactNode, useEffect } from "react";
import { createPortal } from "react-dom";

const el = document.createElement("div");

type PortalProps = {
  children: ReactNode;
};

const Portal: FC<PortalProps> = ({ children }) => {
  useEffect(() => {
    const body = document.querySelector("body");
    if (!body) {
      return;
    }
    body.prepend(el);

    return () => {
      if (body.contains(el)) {
        body.removeChild(el);
      }
    };
  }, []);

  return createPortal(children, el);
};

export default Portal
