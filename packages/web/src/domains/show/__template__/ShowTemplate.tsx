import React from 'react';
import { graphql, PageProps } from 'gatsby';
import { useConfigContext } from '@web/shared/context';
import { useGetMetaImage, useCurrentURL } from '@web/shared/hooks';

import { NewsSubscribeCTA, LegacyContentNotice } from '@web/ui/molecules';

import { PageBasicSEO, StructuredData } from '@web/domains/app/seo';

import { ShowPage, ShowPageContext } from '../types';
import { useShowStatus } from '../__hooks__';

const SingleShowLanding: React.FC<PageProps<PageData, ShowPageContext>> = ({
    data,
    pageContext,
    location,
}) => {
    const { sanityShow: show } = data;
    const { slug, seasonSlug, seasonURL } = pageContext;

    const url = useCurrentURL(location.pathname);
    const metaImage = useGetMetaImage('season', show.seo.image);

    const { status } = useShowStatus(show.performances);

    return (
        <>
            <PageBasicSEO
                url={url}
                title={show.seo.title}
                description={show.seo.description}
                image={metaImage}
                hideSEO={show.seo.hide}
            />
            {/* Do not output structured data if this page will be hidden from SEO */}
            {show.seo.hide ? null : (
                <StructuredData
                    pageSchemaData={{
                        pageURL: url,
                        title: show.seo.title,
                        description: show.seo.description,
                        image: metaImage,
                        datePublished: show.seo.publishedAt,
                        dateModified: show._updatedAt,
                    }}
                />
            )}
            <LegacyContentNotice
                title={show.title}
                subTitle={`by ${show.author.name}`}
                contentType="show"
                legacyURL={`https://theplaygroundtheatre.org/shows/${slug}`}
                legacyURLText="see show on old website"
            />

            <NewsSubscribeCTA />
        </>
    );
};

export const showQuery = graphql`
    query showData($id: String!) {
        sanityShow(_id: { eq: $id }) {
            # Toggles
            # toggles {
            #     isCollaboration
            # }

            # # Selectors
            # selectors {
            #     type
            #     status
            # }

            # # Core Info
            # heroImage {
            #     asset {
            #         fluid(maxWidth: 1600) {
            #             ...GatsbySanityImageFluid
            #         }
            #     }
            # }
            title
            author {
                name
                bioLink
                scriptLink
            }

            # Performance Details
            openDate
            closeDate

            # location {
            #     googleTitle
            #     address {
            #         city
            #         state
            #         stateCode
            #         street
            #         zipcode
            #     }
            #     Geolocation {
            #         lat
            #         lng
            #     }
            #     _rawDirections(resolveReferences: { maxDepth: 10 })
            #     _rawParking(resolveReferences: { maxDepth: 10 })
            # }

            # rating
            # runtimeHours
            # runtimeMinutes
            # intermissionCount

            # contentAdvisory {
            #     _rawModalContent(resolveReferences: { maxDepth: 10 })
            #     copy
            #     hasModal
            # }

            # effectsAdvisory {
            #     _rawModalContent(resolveReferences: { maxDepth: 10 })
            #     copy
            #     hasModal
            # }

            # additionalDetails {
            #     title
            #     copy
            #     icon
            #     hasModal
            #     modalTriggerText
            #     _rawModalContent(resolveReferences: { maxDepth: 10 })
            # }

            ## SEO Settings
            _createdAt
            _updatedAt
            seo {
                title
                hide
                description
                image {
                    alt
                    asset {
                        url
                    }
                }
                publishedAt
            }
        }
    }
`;

/**
 * ----------
 * Prop Types
 * ----------
 */

interface PageData {
    sanityShow: ShowPage;
}

export default SingleShowLanding;
