import styled from 'styled-components';

interface TagContainerI {
	hexColor: string;
	selected: boolean;
	small: boolean;
}
export const TagContainer = styled.span`
	padding: 5px 10px;
	font-size: 14px;
	border-radius: 2px;
	${({ hexColor, selected }: TagContainerI) => {
		if (selected) return `background-color:${hexColor};color:#fff;`;
		return `background-color:${hexColor}1A;color:${hexColor};`;
	}}
	${({ small }: TagContainerI) => (small ? 'font-size: 11px;padding: 3px 10px;' : 'font-size: 14px;padding: 5px 10px;')}
`;
