import React from 'react';

import { useConfigContext } from '@nerve/shared/context';

import { InternalLink } from '@nerve/core/routing';
import { BodyText } from '@nerve/core/components';

import * as styled from './__styles';

const LinkItem: React.FC<{ slug: string; text: string }> = ({ slug, text }) => (
    <li>
        <InternalLink href={slug}>
            <BodyText as="span" size="m" weight="bold" color="light">
                {text}
            </BodyText>
        </InternalLink>
    </li>
);

export const DesktopNavBar: React.FC = () => {
    const {
        links: { archivePage },
    } = useConfigContext();

    return (
        <styled.DesktopNavBar
            aria-labelledby="mainmenulabel"
            data-nav-scope="desktop"
        >
            <p id="mainmenulabel" className="u-visually-hidden">
                Main Menu
            </p>
            <ul>
                {/* {currentSeason && (
                    <LinkItem
                        slug={currentSeason}
                        text="current season"
                        key="currentSeason"
                    />
                )} */}

                <LinkItem
                    slug={archivePage ?? ''}
                    text="the archive"
                    key="archive"
                />
                {/* <LinkItem slug={about} text="about" key="about" />
                <LinkItem slug={contact} text="connect" key="connect" />
                <li className="highlight">
                    <Button
                        size="s"
                        color="primary"
                        variant={fill}
                        href={supportUs}
                        key="support us"
                        className="button"
                        as={InternalLink}
                        animateOnClick
                    >
                        support us
                    </Button>
                </li> */}
            </ul>
        </styled.DesktopNavBar>
    );
};
