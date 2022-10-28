import React from 'react';
import { Btn } from './styles';

interface PropsI {
	children: any;
	onClick: any;
}

const Button = ({ children, onClick }: PropsI) => {
	return <Btn onClick={onClick}>{children}</Btn>;
};

export default Button;
