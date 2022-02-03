import styles from './Message.module.scss'
import { MessageProps } from './Message.props';
import cn from 'classnames';
import { Avatar } from '../..';

const imgUrl = 'https://shapka-youtube.ru/wp-content/uploads/2021/02/avatarka-dlya-skaypa-dlya-parney.jpg';
export const Message = ({ children, className, user, photo, ...props }: MessageProps) => {
	return <div
		className={cn(styles.messageItem, className, {
		})}
		{...props}
	>
		<Avatar size='small'>
			<img src={photo ? photo : imgUrl} alt={user} />
		</Avatar>

		<div className={styles.message} data-user><h5>{user}</h5>{children}</div>
	</div>;
};
