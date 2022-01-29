import { useState } from 'react';
import { Avatar } from '../..';
import styles from './ChatItem.module.scss';
import { ChatItemProps } from './ChatItem.props';
import cn from 'classnames';

export const ChatItem = ({ children, name, time, avatar, className, ...props }: ChatItemProps) => {
	const [username, setUserName] = useState<string>('Kraiviks');
	return <div
		className={cn(styles.chatItem)}
		{...props}
	>
		<div className={styles.info}>
			<div className={styles.userInfoChatItem}>
				<Avatar size='middle'>
					<img src={avatar} alt={name} />
				</Avatar>
				<div className={styles.userNameChatItem}>{username}</div>
			</div>
			<span className={styles.timeInfo}>time</span>
		</div>

		<div className={styles.userMessage}>
			{children}
		</div>
	</div >;
};
