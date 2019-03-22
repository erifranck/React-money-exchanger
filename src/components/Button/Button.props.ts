import {ReactNode} from "react";

export interface ButtonProps {
    className: string;
    children: ReactNode;
    primary?: boolean;
    disabled?: boolean;
    uppercase?: boolean;
}

export interface LinkProps {
    className: string;
    children: ReactNode;
    href: string;
    primary?: boolean;
    uppercase?: boolean;
}
