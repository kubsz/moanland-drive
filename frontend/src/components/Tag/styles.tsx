import styled from 'styled-components';

interface TagContainerI {
	color: string;
	selected: boolean;
	small: boolean;
}
export const TagContainer = styled.span`
	padding: 5px 10px;
	font-size: 14px;
	border-radius: 2px;
	${({ color, selected }: TagContainerI) => {
		if (selected) return `background-color:${color};color:#fff;`;
		return `background-color:${color}1A;color:${color};`;
	}}
	${({ small }: TagContainerI) => (small ? 'font-size: 11px;padding: 3px 10px;' : 'font-size: 14px;padding: 5px 10px;')}
`;
