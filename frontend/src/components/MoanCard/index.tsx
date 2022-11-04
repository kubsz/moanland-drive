import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

import { MoanI } from '../MoanList';
import Tag from '../Tag';
import { CardContainer, Content, Header, HeaderItem, ItemIcon, ItemText, TagList } from './styles';

import { faCalendarDays, faTruckArrowRight } from '@fortawesome/free-solid-svg-icons';
import { strapiDate } from 'src/utils';

const MoanCard = ({ moan, createdAt, tags }: MoanI) => {
	const day = 60 * 60 * 24;
	return (
		<CardContainer>
			<Header>
				<HeaderItem>
					<ItemIcon>
						<FontAwesomeIcon size="xs" color="rgba(255,255,255,.5)" icon={faCalendarDays} />
					</ItemIcon>
					<ItemText>Moaned {strapiDate(createdAt, true)} ago</ItemText>
				</HeaderItem>
			</Header>
			<Content>{moan}</Content>
			{tags.length ? (
				<TagList>
					{tags.map((tag) => (
						<Tag key={tag.slug} {...tag} selected={false} small={true} />
					))}
				</TagList>
			) : null}
		</CardContainer>
	);
};

export default MoanCard;
