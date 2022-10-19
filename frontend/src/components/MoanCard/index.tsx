import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

import { MoanI } from '../MoanList';
import Tag from '../Tag';
import { CardContainer, Content, Header, HeaderItem, ItemIcon, ItemText, TagList } from './styles';

import { faCalendarDays } from '@fortawesome/free-solid-svg-icons';

const MoanCard = ({ content, createdAt, tags }: MoanI) => {
	const day = 60 * 60 * 24;
	return (
		<CardContainer>
			<Header>
				<HeaderItem>
					{/* <ItemIcon>
						<FontAwesomeIcon size="xs" color="rgba(255,255,255,.5)" icon={faCalendarDays} />
					</ItemIcon> */}
					<ItemText>Moaned 3 hours ago</ItemText>
				</HeaderItem>
			</Header>
			<Content>{content}</Content>
			<TagList>
				{tags.map((tag) => (
					<Tag {...tag} selected={false} small={true} />
				))}
			</TagList>
		</CardContainer>
	);
};

export default MoanCard;
