import React, { useEffect, useState } from 'react';
import { Container, Label, Textarea } from './styles';

interface PropsI {
	label: string;
	handleUpdate: any;
	placeholder: string;
	error?: boolean;
}

const LabelledTextarea = ({ label, placeholder, handleUpdate, error }: PropsI) => {
	return (
		<Container>
			<Label>{label}</Label>
			<Textarea error={error} placeholder={placeholder} onChange={(e) => handleUpdate(e.target.value)} />
		</Container>
	);
};

export default LabelledTextarea;
