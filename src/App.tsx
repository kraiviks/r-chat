import { Avatar } from './components';
import './App.scss';
import { useState } from 'react';
import { NavLink, Routes, Route } from 'react-router-dom';
import { ReactComponent as IconChat } from './assets/ico/chat.svg';
import { ReactComponent as IconCalendar } from './assets/ico/calendar.svg';
import { ReactComponent as IconContact } from './assets/ico/contact.svg';
import { ReactComponent as IconGrid } from './assets/ico/grid.svg';
import { ReactComponent as IconLogout } from './assets/ico/logout.svg';
import { ReactComponent as IconNotifications } from './assets/ico/notification.svg';
import { ReactComponent as IconSettings } from './assets/ico/settings.svg';
import { Chat } from './components/Chat/Chat';
import { Calendar } from './components/Calendar/Calendar';
import { Contact } from './components/Contact/Contact';
import { Settings } from './components/Settings/Settings';
import { Notifications } from './components/Notifications/Notifications';

function App() {
	const [user, setUser] = useState<string>("Kraiviks");
	return (
		<div className="App">
			<aside className="aside">
				<div className="user">
					<Avatar size='large' shadow>
						<img src="https://shapka-youtube.ru/wp-content/uploads/2021/02/avatarka-dlya-skaypa-dlya-parney.jpg" alt="" />
					</Avatar>
					<div className="account-box">
						<h2 className='user-title'>
							{user}
						</h2>
						<svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M4.75 7.125L9.5 11.875L14.25 7.125" stroke="#0D1C2E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
						</svg>
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
					<div className="logout">
						<IconLogout />log out
					</div>
				</div>

			</aside>
			<Routes>
				<Route path="/" element={<div>Home</div>} />
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
