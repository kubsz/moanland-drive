import styled from 'styled-components';

export const List = styled.ul`
	display: flex;
	flex-direction: column;
	gap: 20px;
	padding: 0;
	flex: 1;
	overflow-y: scroll;
`;

export const Empty = styled.div`
	display: flex;
	flex-direction: column;
	padding: 30px 15px;
	align-items: center;
`;

export const EmptyIcon = styled.div`
	color: rgba(255, 255, 255, 0.3);
	font-size: 26px;
`;

export const EmptyText = styled.p`
	font-size: 20px;
	color: rgba(255, 255, 255, 0.5);
	text-align: center;
`;
