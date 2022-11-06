import React, { useEffect, useState } from 'react';
import { Container, Label, Textarea } from './styles';

interface PropsI {
	label: string;
	handleUpdate: any;
	placeholder: string;
	error?: boolean;
	defaultValue?: string;
}

const LabelledTextarea = ({ label, placeholder, handleUpdate, error, defaultValue = '' }: PropsI) => {
	return (
		<Container>
			<Label>{label}</Label>
			<Textarea value={defaultValue} error={error} placeholder={placeholder} onChange={(e) => handleUpdate(e.target.value)} />
		</Container>
	);
};

export default LabelledTextarea;
