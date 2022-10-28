import React, { useState, useEffect } from 'react';
import { Label } from '../LabelledTextarea/styles';
import Tag from '../Tag';
import { Container, Heading, List } from './styles';

export interface TagI {
	name: string;
	slug: string;
	color: string;
	id: number;
}

interface PropsI {
	tags: TagI[];
	handleUpdate: any;
	alternateLabel?: boolean;
}

const TagFilter = ({ tags, handleUpdate, alternateLabel }: PropsI) => {
	const [selected, setSelected] = useState([]);

	const toggleId = (id: number) => {
		const index = selected.indexOf(id);

		if (index > -1) return setSelected(selected.filter((s) => s !== id));
		setSelected([...selected, id]);
	};

	useEffect(() => {
		handleUpdate(selected);
	}, [selected]);

	return (
		<Container>
			{alternateLabel ? <Label>Add Tags</Label> : <Heading>Filter By Tags</Heading>}
			<List>
				{tags.map((tag) => (
					<Tag key={tag.slug} {...tag} selected={selected.indexOf(tag.id) > -1} onClick={() => toggleId(tag.id)} />
				))}
			</List>
		</Container>
	);
};

export default TagFilter;
