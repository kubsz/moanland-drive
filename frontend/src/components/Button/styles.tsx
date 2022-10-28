import styled from 'styled-components';

export const Btn = styled.button`
	background-color: rgba(90, 6, 194, 0.3);
	border: 2px solid rgba(90, 6, 194, 0.3);
	color: #792adb;
	font-family: inherit;
	font-weight: 700;
	font-size: 14px;
	padding: 10px;
	border-radius: 4px;
	transition: 0.1s ease;
	width: 100%;
	cursor: pointer;
	&:active,
	&:hover {
		background-color: rgba(90, 6, 194, 1);
		color: rgba(255, 255, 255, 0.9);
	}
`;
