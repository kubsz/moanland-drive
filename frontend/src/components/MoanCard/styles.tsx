import styled from 'styled-components';

export const CardContainer = styled.div`
	display: flex;
	flex-direction: column;
	background-image: linear-gradient(to bottom left, rgba(255, 255, 255, 0.09), rgba(255, 255, 255, 0.05));
	padding: 15px;
	border-radius: 3px;
	box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
`;

export const Header = styled.div`
	display: flex;
	margin-bottom: 10px;
	padding-bottom: 10px;
	border-bottom: 1px solid rgba(255, 255, 255, 0.03);
`;
export const HeaderItem = styled.div`
	display: flex;
	gap: 5px;
`;

export const ItemIcon = styled.span`
	font-size: 14px;
	margin-top: -2px;
`;

export const ItemText = styled.span`
	font-size: 10px;
	color: rgba(255, 255, 255, 0.6);
`;

export const Content = styled.p`
	font-size: 14px;
	color: rgba(255, 255, 255, 0.7);
	margin: 0;
`;

export const TagList = styled.ul`
	display: flex;
	flex-flow: row wrap;
	padding: 0;
	gap: 10px;
	margin-top: 10px;
`;
