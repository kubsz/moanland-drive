import React from 'react';

import Layout from './components/Layout';
import MoanList from './components/MoanList';
import TagFilter, { TagI } from './components/TagFilter';
import './scss/main.scss';

const App = () => {
	const tags = [
		{ label: 'Dan', hexColor: '#A33B20', id: 'dan' },
		{ label: 'Cam', hexColor: '#4A4E69', id: 'cam' },
		{ label: 'Boz', hexColor: '#EEB902', id: 'boz' },
		{ label: 'Lyla', hexColor: '#6BF178', id: 'lyla' },
		{ label: 'Kubs', hexColor: '#F45D01', id: 'kubs' },
		{ label: 'Kitchen', hexColor: '#9DBEBB', id: 'kitchen' },
		{ label: 'Suggestion', hexColor: '#12664F', id: 'suggestion' }
	];

	return (
		<Layout>
			<TagFilter tags={tags} />
			<MoanList />
		</Layout>
	);
};

export default App;
