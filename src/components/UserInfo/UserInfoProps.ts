import { HTMLAttributes } from "react";

export interface UserInfoProps extends HTMLAttributes<HTMLDivElement> {
	name: string;
	username: string;
	avatar: string;
}
