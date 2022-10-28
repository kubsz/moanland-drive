import { faFaceSmileWink } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import MoanCard from '../MoanCard';

import { TagI } from '../TagFilter';
import { Empty, EmptyIcon, EmptyText, List } from './styles';

export interface MoanI {
	tags: TagI[];
	moan: string;
	createdAt: string;
}

const MoanList = ({ moans }: { moans: MoanI[] }) => {
	return (
		<List>
			{!moans.length ? (
				<Empty>
					<EmptyIcon>
						<FontAwesomeIcon size="2xl" color="rgba(255,255,255,.7)" icon={faFaceSmileWink} />
					</EmptyIcon>
					<EmptyText>Suprisingly, even Dan hasn't posted a moan yet!</EmptyText>
				</Empty>
			) : null}
			{moans.map((moan, i) => (
				<MoanCard key={i} {...moan} />
			))}
		</List>
	);
};

export default MoanList;
