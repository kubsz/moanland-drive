import axios from 'axios';
import React, { useEffect, useState } from 'react';

import Layout from 'src/components/Layout';
import MoanList from 'src/components/MoanList';
import TagFilter, { TagI } from 'src/components/TagFilter';
import useSWR from 'swr';

const fetcher = (url: string) => axios.get(url).then((res) => res.data);

const Dashboard = () => {
	const { data: moan_response, error: moan_error } = useSWR('http://localhost:1337/api/moans?populate=*', fetcher);
	const { data: tag_response, error: tag_error } = useSWR('http://localhost:1337/api/tags', fetcher);
	const [moans, setMoans] = useState([]);
	const [tags, setTags] = useState<TagI[]>([]);

	const [selectedTags, setSelectedTags] = useState([]);

	useEffect(() => {
		if (moan_response) setMoans(moan_response.data);
	}, [moan_response]);
	useEffect(() => {
		if (tag_response) setTags(tag_response.data);
	}, [tag_response]);

	return (
		<Layout>
			{tags.length ? <TagFilter tags={tags} handleUpdate={(data: string[]) => setSelectedTags(data)} /> : null}
			{moans.length ? (
				<MoanList moans={moans.filter((item) => item.tags.findIndex((tag: TagI) => selectedTags.indexOf(tag.slug) > -1))} />
			) : null}
		</Layout>
	);
};

export default Dashboard;
