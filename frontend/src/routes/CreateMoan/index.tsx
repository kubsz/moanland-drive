import React from 'react';
import LabelledTextarea from 'src/components/LabelledTextarea';
import Layout from 'src/components/Layout';

const CreateMoan = () => {
	return (
		<Layout>
			<LabelledTextarea label="Moan" placeholder="Write moan here..." handleUpdate={(moan: string) => console.log(moan)} />
		</Layout>
	);
};

export default CreateMoan;
