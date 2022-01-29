import styles from './Avatar.module.scss';
import { AvatarProps } from './Avatar.props';
import cn from 'classnames';

export const Avatar = ({ children, size = 'middle', rounded = true, shadow, bg, className, ...props }: AvatarProps) => {
	return <div
		className={cn(styles.avatar, className, {
			[styles.small]: size === 'small',
			[styles.middle]: size === 'middle',
			[styles.large]: size === 'large',
			[styles.rounded]: rounded,
			[styles.shadow]: shadow,
		})}
		style={{ backgroundColor: bg }}
		{...props}
	>{children}</div>;
};
