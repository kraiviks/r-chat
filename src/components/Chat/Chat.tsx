import { Button } from '..';
import { UserInfo } from '../UserInfo/UserInfo';
import styles from './Chat.module.scss';
import cn from 'classnames';
import { ChatItem } from './ChatItem/ChatItem';
import { Message } from './Message/Message';
import { ReactComponent as IconMore } from '../../assets/ico/more-vertical.svg';
import { ReactComponent as IconLink } from '../../assets/ico/link.svg';
import { ReactComponent as IconSend } from '../../assets/ico/send.svg';
import { ReactComponent as IconFile } from '../../assets/ico/file.svg';
import { ReactComponent as IconFilm } from '../../assets/ico/film.svg';
import { ReactComponent as IconImage } from '../../assets/ico/image.svg';
import { ReactComponent as IconPlus } from '../../assets/ico/plus.svg';
import { useState } from 'react';
export const Chat = () => {
	const [plusBtn, setPlusBtn] = useState<boolean>(false);
	return <main>
		<section className='chats'>
			<ChatItem name='Kraiviks' time='5 min ago' avatar="https://shapka-youtube.ru/wp-content/uploads/2021/02/avatarka-dlya-skaypa-dlya-parney.jpg">asdsdasdas</ChatItem>
			<ChatItem name='Kraiviks' time='5 min ago' avatar="https://shapka-youtube.ru/wp-content/uploads/2021/02/avatarka-dlya-skaypa-dlya-parney.jpg">asdsdasdas</ChatItem>
			<ChatItem name='Kraiviks' time='5 min ago' avatar="https://shapka-youtube.ru/wp-content/uploads/2021/02/avatarka-dlya-skaypa-dlya-parney.jpg">asdsdasdas</ChatItem>
			<ChatItem name='Kraiviks' time='5 min ago' avatar="https://shapka-youtube.ru/wp-content/uploads/2021/02/avatarka-dlya-skaypa-dlya-parney.jpg">asdsdasdas</ChatItem>
			<ChatItem name='Kraiviks' time='5 min ago' avatar="https://shapka-youtube.ru/wp-content/uploads/2021/02/avatarka-dlya-skaypa-dlya-parney.jpg">asdsdasdas</ChatItem>
			<ChatItem name='Kraiviks' time='5 min ago' avatar="https://shapka-youtube.ru/wp-content/uploads/2021/02/avatarka-dlya-skaypa-dlya-parney.jpg">asdsdasdas</ChatItem>
			<ChatItem name='Kraiviks' time='5 min ago' avatar="https://shapka-youtube.ru/wp-content/uploads/2021/02/avatarka-dlya-skaypa-dlya-parney.jpg">asdsdasdas</ChatItem>
			<ChatItem name='Kraiviks' time='5 min ago' avatar="https://shapka-youtube.ru/wp-content/uploads/2021/02/avatarka-dlya-skaypa-dlya-parney.jpg">asdsdasdas</ChatItem>
			<ChatItem name='Kraiviks' time='5 min ago' avatar="https://shapka-youtube.ru/wp-content/uploads/2021/02/avatarka-dlya-skaypa-dlya-parney.jpg">asdsdasdas</ChatItem>

		</section>
		<section className={styles.messages_box}>
			<div className={styles.user_info}>
				<UserInfo name='Kraiviks' username='Kraivkis' avatar="https://shapka-youtube.ru/wp-content/uploads/2021/02/avatarka-dlya-skaypa-dlya-parney.jpg" />
				<div className={styles.user_info_btn}>
					<Button circle shadow>
						<IconLink />
					</Button>
					<Button circle shadow>
						<IconMore />
					</Button>
				</div>
			</div>
			<div className={styles.messages}>
				<Message>dasdasdsd</Message>
				<Message className={styles.user_m}>dasdasdsd</Message>
				<Message>dasdasdsd</Message>
				<Message className={styles.user_m}>dasdasdsd</Message>

			</div>
			<div className={styles.message_form}>
				<div className={cn(styles.btn_box, {
					[styles.btn_box_active]: plusBtn
				})}>
					<Button className={styles.btn_size_40} circle bg='linear-gradient(90.54deg, #60a9f6 0%, #2a8bf2 100%)'><IconFilm /></Button>
					<Button className={styles.btn_size_40} circle bg='linear-gradient(90.54deg, #60a9f6 0%, #2a8bf2 100%)'><IconImage /></Button>
					<Button className={styles.btn_size_40} circle bg='linear-gradient(90.54deg, #60a9f6 0%, #2a8bf2 100%)'><IconFile /></Button>
				</div>
				<Button className={styles.btn_size_40} circle bg='linear-gradient(90.54deg, #60a9f6 0%, #2a8bf2 100%)' onClick={() => setPlusBtn(!plusBtn)}><IconPlus /></Button>
				<form action="" className={styles.form}>
					<input type="text" name="input-message" id="input-message" size={60} placeholder='Type a message here' />
					<Button className={styles.btn_size_40} type='submit' circle bg='linear-gradient(90.54deg, #60a9f6 0%, #2a8bf2 100%)'><IconSend /></Button>
				</form>
			</div>
		</section>
	</main>;
};




