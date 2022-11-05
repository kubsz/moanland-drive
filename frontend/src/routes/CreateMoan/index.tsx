import React, { useEffect, useState } from 'react';

import axios from 'axios';
import { useNavigate } from 'react-router-dom';

import LabelledTextarea from 'src/components/LabelledTextarea';
import Layout from 'src/components/Layout';
import TagFilter from 'src/components/TagFilter';
import Button from 'src/components/Button';
import { Form, ButtonContainer } from './styles';

const CreateMoan = () => {
	let navigate = useNavigate();

	const [tags, setTags] = useState([]);
	const [moan, setMoan] = useState('');
	const [selectedTagIds, setSelectedTagIds] = useState([]);
	const [error, setError] = useState(false);

	useEffect(() => {
		// document.body.style.height = window.innerHeight + 'px';
		(async () => {
			const res = await axios.get(`${process.env.REACT_APP_API_URL}/tags`);
			setTags(res.data.data);
		})();
	}, []);

	const handleSubmit = async () => {
		if (moan.length < 3) return setError(true);

		try {
			await axios.post(`${process.env.REACT_APP_API_URL}/moans`, { data: { moan, tags: selectedTagIds } });
			navigate('/');
		} catch (error) {}
	};

	return (
		<Layout emoji="✍️" heading="Start Moaning">
			<Form>
				<LabelledTextarea
					error={error}
					label="Moan"
					placeholder="Write moan here..."
					handleUpdate={(moan: string) => setMoan(moan)}
				/>
				<TagFilter alternateLabel={true} tags={tags} handleUpdate={(selected: number[]) => setSelectedTagIds(selected)} />
			</Form>
			<ButtonContainer>
				<Button onClick={handleSubmit}>Submit Moan</Button>
			</ButtonContainer>
		</Layout>
	);
};

export default CreateMoan;
