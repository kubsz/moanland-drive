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

export const SelectedTagContainer = styled.div`
	display: flex;
	flex-flow: row wrap;
	justify-content: center;
	gap: 15px;
`;

export const MoanSkeleton = styled.div`
	background-color: rgba(255, 255, 255, 0.1);
	padding: 13px 25px;
	height: 128px;

	--translate: 1000%;
	--rotate: 20deg;

	&::before {
		filter: blur(30px);
		width: 10%;
	}
`;
