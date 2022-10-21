import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlus } from '@fortawesome/free-solid-svg-icons';

import { NavContainer, Main, Heading, Emoji, Side } from './styles';
import { Link } from 'react-router-dom';

export interface ButtonConfigI {
	icon: any;
	path: string;
}
interface PropsI {
	heading: string;
	emoji: string;
	button: ButtonConfigI;
}

const Nav = ({ heading, emoji, button }: PropsI) => {
	return (
		<NavContainer>
			<Main>
				<Heading>
					<Emoji>{emoji}</Emoji>
					{heading}
				</Heading>
			</Main>
			<Side>
				<Link to={button.path}>
					<FontAwesomeIcon size="lg" color="rgba(255,255,255,.5)" icon={button.icon} />
				</Link>
			</Side>
		</NavContainer>
	);
};

export default Nav;
