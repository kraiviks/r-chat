import React from 'react';
import styles from './Button.module.scss';
import cn from 'classnames';
import { ButtonProps } from './Button.props';

export const Button = ({ children, rounded = false, className, ...props }: ButtonProps) => {
	return <button
		className={cn(styles.btn, className, {
			[styles.flat]: !rounded,
			[styles.rounded]: rounded,
		})}
		{...props}
	>
		{children}
	</button>;
};
