import { faFaceSmileWink } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import MoanCard from '../MoanCard';
import Tag from '../Tag';

import { TagI } from '../TagFilter';
import { Empty, EmptyIcon, EmptyText, List, SelectedTagContainer, MoanSkeleton } from './styles';

export interface MoanI {
	tags: TagI[];
	moan: string;
	createdAt: string;
}

const MoanList = ({ moans, selectedTags, moanLoading }: { moans: MoanI[]; selectedTags: TagI[]; moanLoading: boolean }) => {
	return (
		<List>
			{moanLoading ? Array.from(Array(10).keys()).map((i) => <MoanSkeleton className="skeleton" />) : null}
			{!moans.length && !moanLoading ? (
				<Empty>
					<EmptyIcon>
						<FontAwesomeIcon size="2xl" color="rgba(255,255,255,.7)" icon={faFaceSmileWink} />
					</EmptyIcon>
					{selectedTags.length ? (
						<>
							<EmptyText>No moans posted with the selected tags: </EmptyText>
							<SelectedTagContainer>
								{selectedTags.map((tag) => (
									<Tag key={tag.slug} {...tag} selected={true} />
								))}
							</SelectedTagContainer>
						</>
					) : (
						<EmptyText>Suprisingly, even Dan hasn't posted a moan yet!</EmptyText>
					)}
				</Empty>
			) : null}
			{moans.map((moan, i) => (
				<MoanCard key={i} {...moan} />
			))}
		</List>
	);
};

export default MoanList;
