import axios from 'axios';
import { stringify } from 'qs';
import React, { useEffect, useState } from 'react';

import Layout from 'src/components/Layout';
import MoanList from 'src/components/MoanList';
import Spinner from 'src/components/Spinner';
import TagFilter, { TagI } from 'src/components/TagFilter';
import useSWR from 'swr';

const fetcher = (url: string) => axios.get(process.env.REACT_APP_API_URL + url).then((res) => res.data);

const moanParams = stringify(
	{
		populate: '*',
		sort: ['createdAt:desc']
	},
	{ encodeValuesOnly: true }
);

const Dashboard = () => {
	const { data: moanResponse, error: moanError } = useSWR(`/moans?${moanParams}`, fetcher);
	const [moans, setMoans] = useState([]);
	const [tags, setTags] = useState<TagI[]>([]);
	const [error, setError] = useState(false);
	const [moanLoading, setMoanLoading] = useState(true);

	const [selectedTags, setSelectedTags] = useState([]);

	const fetchTags = async () => {
		const res = await axios.get(`${process.env.REACT_APP_API_URL}/tags`);
		setTags(res.data.data);
	};

	useEffect(() => {
		fetchTags();
	}, []);

	useEffect(() => {
		if (moanError) setError(true);
		if (moanResponse && !moanError) {
			setError(false);
			setMoanLoading(false);
			setMoans(moanResponse.data);
		}
	}, [moanResponse, moanError]);

	return (
		<Layout>
			{error === true ? (
				<h1>unexpected error occurred</h1>
			) : (
				<>
					<TagFilter tags={tags} handleUpdate={(data: string[]) => setSelectedTags(data)} />
					<MoanList
						moanLoading={moanLoading}
						selectedTags={selectedTags.map((x) => tags.find((tag) => tag.id === x))}
						moans={
							selectedTags.length
								? moans.filter((item) => item.tags.findIndex((tag: TagI) => selectedTags.indexOf(tag.id) === -1))
								: moans
						}
					/>
				</>
			)}
		</Layout>
	);
};

export default Dashboard;
