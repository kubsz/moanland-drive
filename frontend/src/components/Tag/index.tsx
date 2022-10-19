import React from 'react';

import { TagI } from '../TagFilter';
import { TagContainer } from './styles';

interface PropsI extends TagI {
	onClick?: any;
	selected?: boolean;
	small?: boolean;
}

const Tag = ({ label, id, hexColor, onClick, selected, small = false }: PropsI) => {
	return (
		<TagContainer small={small} selected={selected} hexColor={hexColor} onClick={() => onClick && onClick(id)}>
			{label}
		</TagContainer>
	);
};

export default Tag;
