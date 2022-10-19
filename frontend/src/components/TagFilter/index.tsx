import React, { useState, useEffect } from 'react';
import Tag from '../Tag';
import { Container, Heading, List } from './styles';

export interface TagI {
	label: string;
	id: string;
	hexColor: string;
}

interface PropsI {
	tags: TagI[];
}

const TagFilter = ({ tags }: PropsI) => {
	const [selected, setSelected] = useState([]);

	const toggleId = (id: string) => {
		const index = selected.indexOf(id);

		if (index > -1) return setSelected(selected.filter((s) => s !== id));
		setSelected([...selected, id]);
	};

	useEffect(() => {
		console.log(selected);
	}, [selected]);

	return (
		<Container>
			<Heading>Filter By Tags</Heading>
			<List>
				{tags.map((tag) => (
					<Tag {...tag} selected={selected.indexOf(tag.id) > -1} onClick={() => toggleId(tag.id)} />
				))}
			</List>
		</Container>
	);
};

export default TagFilter;
