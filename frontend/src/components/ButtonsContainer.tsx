import "./ButtonsContainer.css";
import { ReactNode } from "react";

type ButtonsContainerProps = {
    children: ReactNode;
}

export default function ButtonsContainer({children}: ButtonsContainerProps) {
  return (
    <div className="button-container">
        {children}
    </div>
  );
}
