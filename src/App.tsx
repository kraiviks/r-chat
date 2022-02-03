import { Avatar } from './components';
import styles from './App.module.scss';
import cn from 'classnames';
import { useEffect, useState } from 'react';
import { NavLink, Routes, Route } from 'react-router-dom';
import { ReactComponent as IconChat } from './assets/ico/chat.svg';
import { ReactComponent as IconCalendar } from './assets/ico/calendar.svg';
import { ReactComponent as IconContact } from './assets/ico/contact.svg';
import { ReactComponent as IconGrid } from './assets/ico/grid.svg';
import { ReactComponent as IconLogout } from './assets/ico/logout.svg';
import { ReactComponent as IconNotifications } from './assets/ico/notification.svg';
import { ReactComponent as IconSettings } from './assets/ico/settings.svg';
import { ReactComponent as IconLogin } from './assets/ico/login.svg';
import { ReactComponent as IconMenu } from './assets/ico/menu.svg';

import { Chat } from './components/Chat/Chat';
import { Calendar } from './components/Calendar/Calendar';
import { Contact } from './components/Contact/Contact';
import { Settings } from './components/Settings/Settings';
import { Notifications } from './components/Notifications/Notifications';
import { Home } from './components/Home/Home';
import { GoogleAuthProvider, getAuth, signInWithPopup, onAuthStateChanged, signOut, reauthenticateWithCredential } from "firebase/auth";



function App() {
	const provider = new GoogleAuthProvider();
	provider.setCustomParameters({
		prompt: 'select_account'
	});
	const auth = getAuth();
	const [user, setUser] = useState<any>();

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
	const signInWithGoogle = async () => {

		if (!user) {
			await signInWithPopup(auth, provider)
				.then((result) => {

				}).catch((error) => {
					console.log(error);
				});


		}
	}

	const GsignOut = () => {
		signOut(auth).then(() => {
			// Sign-out successful.
			setUser(false)
			window.location.reload();
		}).catch((error) => {
			// An error happened.
		});
	}

	const [menuAside, setMenuAside] = useState<boolean>(false);

	const toggleAside = () => {
		if (menuAside) {
			setMenuAside(!menuAside)
		}
	}

	return (
		<div className={styles.App}>
			<aside className={cn(styles.aside, {
				[styles.active_aside]: menuAside
			})}>
				<div className={styles.user}>
					<Avatar size='large' shadow>
						<img src={user ? user.photoURL : 'https://shapka-youtube.ru/wp-content/uploads/2021/02/avatarka-dlya-skaypa-dlya-parney.jpg'} alt={user ? user.displayName : 'guest'} />
					</Avatar>
					<div className={styles.account_box}>
						<h2 className={styles.user_title}>
							{user ? user.displayName : 'Guest'}
						</h2>
					</div>
				</div>
				<div className={styles.nav}>
					<div className={styles.nav_list}>
						<NavLink to='/'>
							<IconGrid />home
						</NavLink>
						<NavLink to='/chat'>
							<IconChat />chat
						</NavLink>
						{/* <NavLink to='/contact'>
							<IconContact />contact
						</NavLink>
						<NavLink to='/notifications'>
							<IconNotifications />notifications
						</NavLink>
						<NavLink to='/calendar'>
							<IconCalendar />calendar
						</NavLink>
						<NavLink to='/settings'>
							<IconSettings />settings
						</NavLink> */}
					</div>
					{user ?
						<div className={styles.logout} onClick={GsignOut}>
							<IconLogout /><span>log out</span>
						</div>
						:
						<div className={styles.login} onClick={() => signInWithGoogle()}>
							<IconLogin /><span>log in</span>
						</div>
					}
				</div>

			</aside>
			<main onClick={toggleAside}>
				<div className={styles.mobile_button} onClick={() => setMenuAside(!menuAside)
				}><IconMenu /></div>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/chat" element={<Chat />} />
					{/* <Route path="/contact" element={<Contact />} />
				<Route path="/notifications" element={<Notifications />} />
				<Route path="/calendar" element={<Calendar />} />
				<Route path="/settings" element={<Settings />} /> */}
					<Route path="*" element={<div>Not found</div>} />
				</Routes>
			</main >
		</div >
	);
}

export default App;

