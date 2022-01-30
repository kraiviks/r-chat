import React from 'react';
import styles from './Button.module.scss';
import cn from 'classnames';
import { ButtonProps } from './Button.props';

export const Button = ({ children, rounded = false, circle = false, shadow = false, bg, className, ...props }: ButtonProps) => {
	return <button
		className={cn(styles.btn, className, {
			[styles.flat]: !rounded,
			[styles.rounded]: rounded,
			[styles.circle]: circle,
			[styles.shadow]: shadow,
			[styles.fillColor]: bg
		})}
		{...props}
		style={{ background: bg }}
	>
		{children}
	</button>;
};
