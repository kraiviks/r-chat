import { Avatar } from './components';
import './App.scss';
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
		}).catch((error) => {
			// An error happened.
		});
	}
	return (
		<div className="App">
			<aside className="aside">
				<div className="user">
					<Avatar size='large' shadow>
						<img src="https://shapka-youtube.ru/wp-content/uploads/2021/02/avatarka-dlya-skaypa-dlya-parney.jpg" alt="" />
					</Avatar>
					<div className="account-box">
						<h2 className='user-title'>
							{user ? user.displayName : null}
						</h2>
					</div>
				</div>
				<div className="nav">
					<div className="nav-list">
						<NavLink to='/'>
							<IconGrid />home
						</NavLink>
						<NavLink to='/chat'>
							<IconChat />chat
						</NavLink>
						<NavLink to='/contact'>
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
						</NavLink>
					</div>
					{user ?
						<div className="logout" onClick={GsignOut}>
							<IconLogout />log out
						</div>
						:
						<div className="login" onClick={() => signInWithGoogle()}>
							<IconLogin /><span>log in</span>
						</div>
					}
				</div>

			</aside>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/chat" element={<Chat />} />
				<Route path="/contact" element={<Contact />} />
				<Route path="/notifications" element={<Notifications />} />
				<Route path="/calendar" element={<Calendar />} />
				<Route path="/settings" element={<Settings />} />
				<Route path="*" element={<div>Not found</div>} />
			</Routes>
		</div>
	);
}

export default App;

