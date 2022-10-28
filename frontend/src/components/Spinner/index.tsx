import React from 'react';
import { HashLoader } from 'react-spinners';
import { SpinnerContainer } from './styles';

const Spinner = () => {
	return (
		<SpinnerContainer>
			<HashLoader color="#792adb" size={32} />
		</SpinnerContainer>
	);
};

export default Spinner;
