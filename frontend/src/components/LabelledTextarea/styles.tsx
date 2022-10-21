import styled from 'styled-components';

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	gap: 10px;
`;

export const Label = styled.label`
	font-size: 14px;
	font-weight: 600;
	padding-left: 10px;
	color: rgba(255, 255, 255, 0.25);
`;

export const Textarea = styled.textarea`
	background-color: rgba(255, 255, 255, 0.1);
	border: 2px solid rgba(255, 255, 255, 0.05);
	border-radius: 3px;
	resize: none;
	padding: 10px;
	font-size: 14px;
	color: #fff;
	font-family: inherit;
	height: 100px;

	&:focus {
		outline: none;
	}
`;
