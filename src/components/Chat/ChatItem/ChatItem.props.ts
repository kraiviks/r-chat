import { ReactNode } from "react";
import { HTMLAttributes } from "react";
export interface ChatItemProps extends HTMLAttributes<HTMLDivElement> {
	children?: ReactNode;
	avatar?: string;
	name: string;
	time?: string;
}
