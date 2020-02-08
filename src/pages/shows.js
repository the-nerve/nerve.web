import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';

import { Layout } from '../components/Layout';
import { ShowsFeed } from '../components/show';

const ShowsPage = ({ data }) => {
	const shows = data?.prismic?.allShows?.edges;

	if (!shows) {
		return <></>;
	}

	return (
		<Layout>
			<ShowsFeed shows={shows} />
		</Layout>
	);
};

export const query = graphql`
	query ShowsPageData {
		...AllShowsFragment
	}
`;

/**
 * ----------
 * Prop Types
 * ----------
 */

ShowsPage.propTypes = {
	data: PropTypes.object.isRequired,
};

export default ShowsPage;
