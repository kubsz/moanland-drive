import React, { useState, useEffect } from 'react';
import { Label } from '../LabelledTextarea/styles';
import Tag from '../Tag';
import { Container, Heading, List, SkeletonTag } from './styles';

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
	selectedTagIds?: number[];
}

const TagFilter = ({ tags, handleUpdate, alternateLabel, selectedTagIds = [] }: PropsI) => {
	const [selected, setSelected] = useState(selectedTagIds);

	const toggleId = (id: number) => {
		const index = selected.indexOf(id);

		if (index > -1) return setSelected(selected.filter((s) => s !== id));
		setSelected([...selected, id]);
	};

	useEffect(() => {
		handleUpdate(selected);
	}, [selected, handleUpdate]);

	return (
		<Container>
			{alternateLabel ? <Label>Add Tags</Label> : <Heading>Filter By Tags</Heading>}
			<List>
				{tags.length
					? tags.map((tag) => (
							<Tag key={tag.slug} {...tag} selected={selected.indexOf(tag.id) > -1} onClick={() => toggleId(tag.id)} />
					  ))
					: Array.from(Array(10).keys()).map((i) => <SkeletonTag key={i} className="skeleton" />)}
			</List>
		</Container>
	);
};

export default TagFilter;
