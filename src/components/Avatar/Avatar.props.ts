import { ReactNode } from "react";
import { HTMLAttributes } from "react";

export interface AvatarProps extends HTMLAttributes<HTMLDivElement> {
	children: ReactNode;
	size?: "small" | "middle" | "large";
	rounded?: boolean;
	shadow?: boolean;
	bg?: string;
}
