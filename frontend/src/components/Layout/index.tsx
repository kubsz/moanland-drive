import { faArrowsToCircle, faCirclePlus, faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

import Nav, { ButtonConfigI } from '../Nav';

import { Container, Content } from './styles';

interface PropsI {
	children: React.ReactNode;
	heading: string;
	emoji: string;
}

const buttons: { [key: string]: ButtonConfigI } = {
	'/moan': { icon: faArrowsToCircle, path: '/' },
	'/': { icon: faPenToSquare, path: '/moan' }
};

const Layout = ({ children, heading, emoji }: PropsI) => {
	let { pathname } = useLocation();

	const [navButton, setNavButton] = useState(buttons['/moan']);

	useEffect(() => {
		setNavButton(buttons[pathname]);
	}, [pathname]);
	return (
		<Container>
			<Nav emoji={emoji} heading={heading} button={navButton} />
			<Content>{children}</Content>
		</Container>
	);
};
export default Layout;
