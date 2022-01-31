import { ReactNode } from "react";
import { HTMLAttributes } from "react";
export interface MessageProps extends HTMLAttributes<HTMLDivElement> {
	children: ReactNode;
	bg?: string;
	user: string;
}
