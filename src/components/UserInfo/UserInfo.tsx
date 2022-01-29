import styles from './UserInfo.module.scss';
import { Avatar } from '..';
import { UserInfoProps } from './UserInfoProps';

export const UserInfo = ({ avatar, name, username }: UserInfoProps) => {
	return <div className={styles.userInfo}>
		<Avatar size='middle'>
			<img src={avatar} alt={name} />
		</Avatar>
		<div className={styles.info}>
			<div className={styles.userName}>{username}</div>
			<div className={styles.lastOnline}>last online 5 minutes ago</div>
		</div>

	</div>
};
