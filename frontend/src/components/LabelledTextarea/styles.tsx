import styled from 'styled-components';

export const Container = styled.div`
	display: flex;
	flex-direction: column;
`;

export const Label = styled.label`
	font-size: 14px;
	font-weight: 600;
	color: rgba(255, 255, 255, 0.4);
	margin-bottom: 10px;
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

	${({ error }: { error?: boolean }) => (error ? `border-color:rgba(166, 23, 23,.7);` : '')}

	&:focus {
		outline: none;
	}

	&::placeholder {
		color: rgba(255, 255, 255, 0.3);
	}
`;
