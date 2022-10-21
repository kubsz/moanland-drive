import React from 'react';

import { TagI } from '../TagFilter';
import { TagContainer } from './styles';

interface PropsI extends TagI {
	onClick?: any;
	selected?: boolean;
	small?: boolean;
}

const Tag = ({ name, slug, color, onClick, selected, small = false }: PropsI) => {
	return (
		<TagContainer small={small} selected={selected} color={color} onClick={() => onClick && onClick(slug)}>
			{name}
		</TagContainer>
	);
};

export default Tag;
