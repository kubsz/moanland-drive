import React, { useEffect, useState } from 'react';

import axios from 'axios';
import { useLocation, useNavigate } from 'react-router-dom';

import LabelledTextarea from 'src/components/LabelledTextarea';
import Layout from 'src/components/Layout';
import TagFilter from 'src/components/TagFilter';
import Button from 'src/components/Button';
import { Form, ButtonContainer } from './styles';

const CreateMoan = () => {
	const { state: edit } = useLocation();
	let navigate = useNavigate();

	const [tags, setTags] = useState([]);
	const [moan, setMoan] = useState(edit ? edit.moan : '');
	const [selectedTagIds, setSelectedTagIds] = useState(edit ? edit.tags : []);
	const [error, setError] = useState(false);

	useEffect(() => {
		(async () => {
			const res = await axios.get(`${process.env.REACT_APP_API_URL}/tags`);
			setTags(res.data.data);
		})();
	}, []);

	const handleSubmit = async () => {
		if (moan.length < 3) return setError(true);

		let res;

		if (edit) {
			res = await axios.put(`${process.env.REACT_APP_API_URL}/moans/${edit.id}`, { data: { moan, tags: selectedTagIds } });
		} else {
			res = await axios.post(`${process.env.REACT_APP_API_URL}/moans`, { data: { moan, tags: selectedTagIds } });
		}

		navigate('/', { state: { editable: res.data.data.id } });
	};

	return (
		<Layout emoji="✍️" heading="Start Moaning">
			<Form>
				<LabelledTextarea
					error={error}
					label="Moan"
					placeholder="Write moan here..."
					defaultValue={moan}
					handleUpdate={(moan: string) => setMoan(moan)}
				/>
				<TagFilter
					alternateLabel={true}
					tags={tags}
					selectedTagIds={selectedTagIds}
					handleUpdate={(selected: number[]) => setSelectedTagIds(selected)}
				/>
			</Form>
			<ButtonContainer>
				<Button onClick={handleSubmit}>Submit Moan</Button>
			</ButtonContainer>
		</Layout>
	);
};

export default CreateMoan;
