import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlus } from '@fortawesome/free-solid-svg-icons';

import { NavContainer, Main, Heading, Emoji, Side } from './styles';

interface PropsI {
	heading: string;
	emoji: string;
}

const Nav = ({ heading, emoji }: PropsI) => {
	return (
		<NavContainer>
			<Main>
				<Heading>
					<Emoji>{emoji}</Emoji>
					{heading}
				</Heading>
			</Main>
			<Side>
				<FontAwesomeIcon size="xl" color="rgba(255,255,255,.5)" icon={faCirclePlus} />
			</Side>
		</NavContainer>
	);
};

export default Nav;
