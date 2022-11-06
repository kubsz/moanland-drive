import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

import { MoanI } from '../MoanList';
import Tag from '../Tag';
import { CardContainer, Content, Header, HeaderItem, ItemIcon, ItemText, TagList, EditButton } from './styles';

import { faCalendarDays, faPencil } from '@fortawesome/free-solid-svg-icons';
import { strapiDate } from 'src/utils';
import { useNavigate } from 'react-router-dom';

const MoanCard = ({ id, moan, createdAt, tags, editable }: MoanI & { editable: boolean }) => {
	let navigate = useNavigate();
	return (
		<CardContainer>
			<Header>
				<HeaderItem>
					<ItemIcon>
						<FontAwesomeIcon size="xs" color="rgba(255,255,255,.5)" icon={faCalendarDays} />
					</ItemIcon>
					<ItemText>Moaned {strapiDate(createdAt, true)} ago</ItemText>
				</HeaderItem>
				{editable && (
					<EditButton onClick={() => navigate('/moan', { state: { id, moan, tags: tags.map((tag) => tag.id) } })}>
						<FontAwesomeIcon size="sm" color="rgba(255,255,255,.5)" icon={faPencil} />
					</EditButton>
				)}
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
