import { GatsbyPageContext, SanityDocument } from '@web/shared/types';

export interface SeasonReference {
    slug: {
        current: string;
    };
    title: string;
    // In some instances, we will want the full path to the season to be available
    path?: string;
}

export interface Season {
    slug: {
        current: string;
    };
    title: string;
    tagline?: string;
    description?: string;
}

export interface DecoratedSeason extends Season {
    // In some instances, we will want the full path to the season to be available
    path?: string;
    // what number season is it?
    number?: number;
}

export interface SeasonPage extends SanityDocument {
    tagline: string;
    description: string;
}

export interface SeasonPageContext extends GatsbyPageContext {
    seasonURL: string;
}
