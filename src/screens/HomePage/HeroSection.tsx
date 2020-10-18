import React from 'react';
import styled from 'styled-components';

import { PrismicInternalLink } from '@type/prismic';
import { breakpoints, grid, spacing } from '@tokens';

import { useLinkMapContext } from '@context';
import { getChildPageSlug } from '@lib/url';

import { Container, Section, SectionProps } from '@components/layout';
import { BodyText, GrittyHeading, Icon } from '@components/foundations';
import { FillButton } from '@components/actions';

const StyledHeroSection = styled(Section)`
    padding: ${spacing.layout.l} 0 ${spacing.layout.xl} 0;
    ${breakpoints.m} {
        padding: ${spacing.layout.xxl} 0 ${spacing.layout.xxl} 0;
    }

    .title {
        margin-bottom: ${spacing.component.xl};
        max-width: ${grid.m};
    }
    .copy {
        margin-top: ${spacing.layout.m};
        max-width: ${grid.xs};
    }

    .action {
        margin-top: ${spacing.component.xxl};
    }
`;

export const HeroSection: React.FC<HeroSectionProps> = ({
    title,
    copy,
    bgImage,
    rebrandLink,
    rebrandLinkText,
}) => {
    const links = useLinkMapContext();
    const blogLink = getChildPageSlug(links.blog, rebrandLink.uid);

    return (
        <StyledHeroSection
            bgColor="extraDark"
            bgImage={bgImage}
            bgPosition="center center"
            overlay="dark85"
        >
            <Container>
                <GrittyHeading
                    tag="h1"
                    bgColor="light"
                    color="dark"
                    size="l"
                    className="title"
                >
                    {title}
                </GrittyHeading>
                <BodyText tag="p" color="light" size="l" className="copy">
                    {copy}
                </BodyText>
                <FillButton
                    to={blogLink}
                    color="primary"
                    size="m"
                    className="action"
                    endIcon={<Icon name="ArrowRight" size="xs" />}
                    animateIconOnHover
                    animateOnClick
                >
                    {rebrandLinkText}
                </FillButton>
            </Container>
        </StyledHeroSection>
    );
};

interface HeroSectionProps extends SectionProps {
    title: string;
    copy: string;
    rebrandLinkText: string;
    rebrandLink: PrismicInternalLink;
}
