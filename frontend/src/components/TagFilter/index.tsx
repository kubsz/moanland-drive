import React, { useState, useEffect } from 'react';
import Tag from '../Tag';
import { Container, Heading, List } from './styles';

export interface TagI {
	name: string;
	slug: string;
	color: string;
}

interface PropsI {
	tags: TagI[];
	handleUpdate: any;
}

const TagFilter = ({ tags, handleUpdate }: PropsI) => {
	const [selected, setSelected] = useState([]);

	const toggleId = (slug: string) => {
		const index = selected.indexOf(slug);

		if (index > -1) return setSelected(selected.filter((s) => s !== slug));
		setSelected([...selected, slug]);
	};

	useEffect(() => {
		handleUpdate(selected);
	}, [selected]);

	return (
		<Container>
			<Heading>Filter By Tags</Heading>
			<List>
				{tags.map((tag) => (
					<Tag key={tag.slug} {...tag} selected={selected.indexOf(tag.slug) > -1} onClick={() => toggleId(tag.slug)} />
				))}
			</List>
		</Container>
	);
};

export default TagFilter;
