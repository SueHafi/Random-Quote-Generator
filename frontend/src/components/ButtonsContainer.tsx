import "./ButtonsContainer.css";
import { ReactNode } from "react";

type ButtonsContainerProps = {
    children: ReactNode;
    className: string;
}

export default function ButtonsContainer({children, className}: ButtonsContainerProps) {
  return (
    <div className={`button-container ${className}`}>
        {children}
    </div>
  );
}
