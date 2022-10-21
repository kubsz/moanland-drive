import { faArrowsToCircle, faCirclePlus, faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

import Nav, { ButtonConfigI } from '../Nav';

import { Container, Content } from './styles';

interface PropsI {
	children: React.ReactNode;
}

const buttons: { [key: string]: ButtonConfigI } = {
	'/moan': { icon: faArrowsToCircle, path: '/' },
	'/': { icon: faPenToSquare, path: '/moan' }
};

const Layout = ({ children }: PropsI) => {
	let { pathname } = useLocation();

	const [navButton, setNavButton] = useState(buttons['/moan']);

	useEffect(() => {
		setNavButton(buttons[pathname]);
	}, [pathname]);
	return (
		<Container>
			<Nav emoji="🏡" heading="Moanland Drive" button={navButton} />
			<Content>{children}</Content>
		</Container>
	);
};
export default Layout;
