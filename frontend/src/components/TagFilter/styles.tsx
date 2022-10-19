import styled from 'styled-components';

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	gap: 5px;
`;

export const Heading = styled.h3`
	font-size: 12px;
	text-transform: uppercase;
	letter-spacing: 1px;
	color: rgba(255, 255, 255, 0.7);
`;

export const List = styled.div`
	display: flex;
	gap: 10px;
	width: 100%;
	overflow-x: scroll;
	padding-bottom: 14px;
`;
