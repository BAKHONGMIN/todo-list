import React, { ReactNode } from "react";
import { createPortal } from "react-dom";

interface Props {
  selector?: string;
  children: ReactNode;
}

function Portal({ children, selector }: Props) {
  const rootElement = selector && document.querySelector(selector);

  return <>{rootElement ? createPortal(children, rootElement) : children}</>;
}

export default Portal;
