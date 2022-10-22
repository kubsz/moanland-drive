import React, { useEffect, useState } from 'react';

import axios from 'axios';

import LabelledTextarea from 'src/components/LabelledTextarea';
import Layout from 'src/components/Layout';
import TagFilter from 'src/components/TagFilter';

const CreateMoan = () => {
	const [tags, setTags] = useState([]);

	useEffect(() => {
		(async () => {
			const res = await axios.get('http://localhost:1337/api/tags');
			setTags(res.data.data);
		})();
	}, []);

	return (
		<Layout>
			<LabelledTextarea label="Moan" placeholder="Write moan here..." handleUpdate={(moan: string) => console.log(moan)} />
			<TagFilter tags={tags} handleUpdate={(test: any) => test} />
		</Layout>
	);
};

export default CreateMoan;
