import React from 'react';
import MoanCard from '../MoanCard';

import { TagI } from '../TagFilter';
import { List } from './styles';

export interface MoanI {
	tags: TagI[];
	content: string;
	createdAt: number;
}

const MoanList = () => {
	const moans: MoanI[] = [
		{
			content: 'Kubs keeps leaving the cupboards open.',
			createdAt: Math.floor(Date.now() / 1000),
			tags: [
				{ label: 'Kubs', hexColor: '#F45D01', id: 'kubs' },
				{ label: 'Kitchen', hexColor: '#9DBEBB', id: 'kitchen' }
			]
		},
		{
			content: 'Dan often plays central cee, its ruining my peaceful night.',
			createdAt: Math.floor(Date.now() / 1000) - 10000,
			tags: [{ label: 'Dan', hexColor: '#A33B20', id: 'dan' }]
		},
		{
			content: "Boz goes to sleep too early, I can't play central cee late at night",
			createdAt: Math.floor(Date.now() / 1000) - 10000,
			tags: [{ label: 'Boz', hexColor: '#EEB902', id: 'boz' }]
		},
		{
			content: 'I can hear cam reading sleepy stories late at night.',
			createdAt: Math.floor(Date.now() / 1000) - 10000,
			tags: [{ label: 'Cam', hexColor: '#22ac3b', id: 'cam' }]
		},
		{
			content: 'Dan often plays central cee, its ruining my peaceful night.',
			createdAt: Math.floor(Date.now() / 1000) - 10000,
			tags: [{ label: 'Dan', hexColor: '#A33B20', id: 'dan' }]
		},
		{
			content: "Boz goes to sleep too early, I can't play central cee late at night",
			createdAt: Math.floor(Date.now() / 1000) - 10000,
			tags: [{ label: 'Boz', hexColor: '#EEB902', id: 'boz' }]
		},
		{
			content: 'I can hear cam reading sleepy stories late at night.',
			createdAt: Math.floor(Date.now() / 1000) - 10000,
			tags: [{ label: 'Cam', hexColor: '#22ac3b', id: 'cam' }]
		}
	];

	return (
		<List>
			{moans.map((moan) => (
				<MoanCard {...moan} />
			))}
		</List>
	);
};

export default MoanList;
