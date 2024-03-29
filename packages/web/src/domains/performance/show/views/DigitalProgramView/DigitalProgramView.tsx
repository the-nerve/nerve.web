import React from 'react';

import { Divider } from '@web/ui/core';
import { DigitalProgramPageProps } from './types';
import {
    AlsoThisSeason,
    DirectorNote,
    Header,
    LandAcknowledgement,
    LicenseAgreementText,
    SponsorsShowcase,
    SpotifyCallout,
    SupportUsCTA,
    TeamBioGallery,
} from './components';

export const DigitalProgramView = ({ show }: DigitalProgramViewProps) => {
    return (
        <>
            {show.artists?.directors?.length > 0 && (
                <Header title={show.title} author={show.author} />
            )}
            {show._rawDirectorsNote?.length > 0 && (
                <>
                    <DirectorNote content={show._rawDirectorsNote} />
                    <Divider color="paper" />
                </>
            )}
            {show.location.indigenousLandAcknowledgement && (
                <>
                    <LandAcknowledgement {...show.location} />
                    <Divider color="paper" />
                </>
            )}
            {(show.artists?.actors ||
                show.artists?.crewMembers ||
                show.artists?.designers ||
                show.artists?.shadows) && (
                <>
                    <TeamBioGallery artists={show.artists} />
                    <Divider color="neutralDark" />
                </>
            )}
            {show.promo.soundtrack?.provider === 'spotify' &&
                show.promo.soundtrack.link && (
                    <SpotifyCallout playlistLink={show.promo.soundtrack.link} />
                )}
            {(show.sponsors?.official ||
                show.sponsors?.highlight ||
                show.sponsors?._rawSpecialThanks) && (
                <>
                    <SponsorsShowcase sponsors={show.sponsors} />
                    <Divider color="paper" />
                </>
            )}
            <SupportUsCTA />
            <Divider color="paper" />
            {show.license && show.license.length > 0 && (
                <>
                    <LicenseAgreementText text={show.license} />
                    <Divider color="paper" />
                </>
            )}
            <AlsoThisSeason />
        </>
    );
};

interface DigitalProgramViewProps {
    show: DigitalProgramPageProps;
    slug: string;
    seasonSlug: string;
    url: string;
}
