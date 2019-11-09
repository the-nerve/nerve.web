import React from 'react'
import { graphql } from 'gatsby'

import {Layout} from '../components/Layout'
import {SEOPageMeta} from '../components/SEO'
import {getPrismicSlice} from '../__utility__/prismic';

const HomePage = ({data}) => {

	const pageMeta = getPrismicSlice( data.prismic.home_page.body, 'basic_seo' );

	return (

		<Layout pageMeta={pageMeta}>
			<SEOPageMeta metadata={pageMeta} />
			Coming soon...
		</Layout>

	)

}

export const query = graphql`
	query ShowsPageData {
		...AllShowsFragment
	}
`

export default HomePage
