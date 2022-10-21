import React from 'react';
import MoanCard from '../MoanCard';

import { TagI } from '../TagFilter';
import { List } from './styles';

export interface MoanI {
	tags: TagI[];
	moan: string;
	createdAt: number;
}

const MoanList = ({ moans }: { moans: MoanI[] }) => {
	console.log(moans);
	return (
		<List>
			{moans.map((moan, i) => (
				<MoanCard key={i} {...moan} />
			))}
		</List>
	);
};

export default MoanList;
