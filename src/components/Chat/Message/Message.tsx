import styles from './Message.module.scss'
import { MessageProps } from './Message.props';
import cn from 'classnames';
import { Avatar } from '../..';
export const Message = ({ children, className, user, ...props }: MessageProps) => {
	return <div
		className={cn(styles.messageItem, className, {
		})}
		{...props}
	>
		<Avatar size='small'>
			<img src="https://shapka-youtube.ru/wp-content/uploads/2021/02/avatarka-dlya-skaypa-dlya-parney.jpg" alt={user} />
		</Avatar>

		<div className={styles.message} data-user><h5>{user}</h5>{children}</div>
	</div>;
};
