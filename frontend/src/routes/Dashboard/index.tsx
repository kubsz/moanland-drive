import axios from 'axios';
import React, { useEffect, useState } from 'react';

import Layout from 'src/components/Layout';
import MoanList from 'src/components/MoanList';
import Spinner from 'src/components/Spinner';
import TagFilter, { TagI } from 'src/components/TagFilter';
import useSWR from 'swr';

const fetcher = (url: string) => axios.get('http://localhost:1337/api' + url).then((res) => res.data);

const Dashboard = () => {
	const { data: moanResponse, error: moanError, isValidating: moanLoading } = useSWR('/moans?populate=*', fetcher);
	const [moans, setMoans] = useState([]);
	const [tags, setTags] = useState<TagI[]>([]);
	const [error, setError] = useState(false);

	const [selectedTags, setSelectedTags] = useState([]);

	const fetchTags = async () => {
		const res = await axios.get('http://localhost:1337/api/tags');
		setTags(res.data.data);
	};

	useEffect(() => {
		fetchTags();
	}, []);

	useEffect(() => {
		if (moanError) setError(true);
		if (moanResponse && !moanError) {
			setError(false);
			setMoans(moanResponse.data);
		}
	}, [moanResponse, moanError]);

	return (
		<Layout>
			{error === true ? (
				<h1>error</h1>
			) : (
				<>
					{!tags.length ? <Spinner /> : <TagFilter tags={tags} handleUpdate={(data: string[]) => setSelectedTags(data)} />}
					{moanLoading ? (
						<Spinner />
					) : (
						<MoanList moans={moans.filter((item) => item.tags.findIndex((tag: TagI) => selectedTags.indexOf(tag.slug) > -1))} />
					)}
				</>
			)}
		</Layout>
	);
};

export default Dashboard;
