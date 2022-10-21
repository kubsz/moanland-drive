import React from 'react';
import { Container, Label, Textarea } from './styles';

interface PropsI {
	label: string;
	handleUpdate: any;
	placeholder: string;
}

const LabelledTextarea = ({ label, placeholder, handleUpdate }: PropsI) => {
	return (
		<Container>
			<Label>{label}</Label>
			<Textarea />
		</Container>
	);
};

export default LabelledTextarea;
