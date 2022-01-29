import { Button } from '..';
import { UserInfo } from '../UserInfo/UserInfo';
import './Chat.scss';
import { ChatItem } from './ChatItem/ChatItem';
import { Message } from './Message/Message';
import { ReactComponent as IconMore } from '../../assets/ico/more-vertical.svg';
import { ReactComponent as IconLink } from '../../assets/ico/link.svg';

export const Chat = () => {
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
		<section className='messages-box'>
			<div className='user-info'>
				<UserInfo name='Kraiviks' username='Kraivkis' avatar="https://shapka-youtube.ru/wp-content/uploads/2021/02/avatarka-dlya-skaypa-dlya-parney.jpg" />
				<div className="user-info_btn">
					<Button circle shadow>
						<IconLink />
					</Button>
					<Button circle shadow>
						<IconMore />
					</Button>
				</div>
			</div>
			<div className="messages">
				<Message>dasdasdsd</Message>
				<Message className='user-m'>dasdasdsd</Message>
				<Message>dasdasdsd</Message>
				<Message className="user-m">dasdasdsd</Message>

			</div>
			<div className="message-form"></div>
		</section>
	</main>;
};
