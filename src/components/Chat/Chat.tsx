import { Button } from '..';
import { UserInfo } from '../UserInfo/UserInfo';
import styles from './Chat.module.scss';
import cn from 'classnames';
import { Message } from './Message/Message';
import { ReactComponent as IconMore } from '../../assets/ico/more-vertical.svg';
import { ReactComponent as IconLink } from '../../assets/ico/link.svg';
import { ReactComponent as IconSend } from '../../assets/ico/send.svg';
import { ReactComponent as IconFile } from '../../assets/ico/file.svg';
import { ReactComponent as IconFilm } from '../../assets/ico/film.svg';
import { ReactComponent as IconImage } from '../../assets/ico/image.svg';
import { ReactComponent as IconPlus } from '../../assets/ico/plus.svg';
import { useEffect, useState, useRef } from 'react';

import { getFirestore, collection, addDoc, query, onSnapshot, orderBy } from "firebase/firestore";
import { getAuth, onAuthStateChanged } from 'firebase/auth';



export const Chat = () => {
	const auth = getAuth();
	const [user, setUser] = useState<any>();
	const [guest, setGuest] = useState<any>({
		displayName: 'Guest',
		uid: 'guest'
	});

	useEffect(() => {

		onAuthStateChanged(auth, (user) => {
			if (user) {
				// User is signed in, see docs for a list of available properties
				// https://firebase.google.com/docs/reference/js/firebase.User
				setUser(auth.currentUser)
				// ...
			} else {
				// User is signed out
				// ...
			}
		});
	})
	const db = getFirestore();
	const [plusBtn, setPlusBtn] = useState<boolean>(false);
	const [messages, setMessages] = useState<any[]>();
	const [newMessage, setNewMessage] = useState<string>();

	useEffect(() => {
		if (db) {
			const q = query(collection(db, "messages"), orderBy('createAt'))
			const unsub = onSnapshot(q, (snapshot) => {
				const data = snapshot.docs.map(doc => ({
					...doc.data(),
					id: doc.id,
				}));
				setMessages(data)
			});

			return unsub;
		}
	}, [db])

	const inputMessage = (e: any) => {
		setNewMessage(e.target.value);
	}

	const pushMessage = async (e: any) => {
		e.preventDefault();
		if (newMessage !== '') {
			await addDoc(collection(db, "messages"), {
				username: user.displayName,
				uid: user.uid,
				text: newMessage,
				createAt: new Date,

			});
			setNewMessage(e.target.value = "");
		}
	}

	const pushMessageGuest = async (e: any) => {
		e.preventDefault();
		if (newMessage !== '') {
			await addDoc(collection(db, "messages"), {
				username: guest.displayName,
				uid: guest.uid,
				text: newMessage,
				createAt: new Date,
			});
			setNewMessage(e.target.value = "");
		}
	}


	//AutoScroll
	const scrollTarget = useRef() as React.MutableRefObject<HTMLInputElement>;

	useEffect(() => {
		scrollTarget.current.scrollIntoView({ behavior: 'smooth' });
	}, [messages, pushMessage,
		pushMessageGuest])

	return <section className={styles.messages_box}>
		<div className={styles.user_info}>
			<UserInfo name={user ? user.displayName : 'Guest'} username={user ? user.displayName : 'Guest'} avatar={user ? user.photoURL : 'https://shapka-youtube.ru/wp-content/uploads/2021/02/avatarka-dlya-skaypa-dlya-parney.jpg'} />
		</div>
		<div className={styles.messages}>
			{messages ? messages.map((item: any) => {
				return <Message photo={user && item.uid === user.uid ? user.photoURL : null} user={item.username} className={(user && item.uid === user.uid && item.uid !== guest.uid) || (!user && item.uid === guest.uid) ? styles.user_m : ''} key={item.id}>{item.text}</Message>
			}) : null}
			<div ref={scrollTarget} ></div>
		</div>
		<div className={styles.message_form}>
			<form action="" className={styles.form} >
				<input type="text" name="input-message" id="input-message" placeholder='Type a message here' value={newMessage || ''} onChange={inputMessage} />
				<Button className={styles.btn_size_35} type='submit' circle bg='linear-gradient(90.54deg, #60a9f6 0%, #2a8bf2 100%)' onClick={user ? pushMessage : pushMessageGuest}><IconSend /></Button>
			</form>
		</div>
	</section>;
};




