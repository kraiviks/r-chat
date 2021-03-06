import { ButtonHTMLAttributes, ReactNode } from "react";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	children: ReactNode;
	rounded?: boolean;
	circle?: boolean;
	shadow?: boolean;
	bg?: string;
}
