import styled from 'styled-components';
import { Section } from '@web/ui/core';
import {
    breakpoints,
    spacing,
    containerGutter,
    totalContainerGutter,
    borders,
} from '@web/ui/tokens';
import { rgba } from 'polished';

export const Performances = styled(Section)<{ performancesCount: number }>`
    --gutter-width: ${spacing.component.s};
    --scroll-padding: ${spacing.component.m};
    --total-container-gutter: ${totalContainerGutter}%;
    --list-margin-correction: -${containerGutter}%;
    --list-item-outer-margin: ${containerGutter}%;
    --list-item-width: 200px;
    --totalPerformances: ${(props) => props.performancesCount};

    padding: ${spacing.layout.m} 0;

    ${breakpoints.s} {
        padding: ${spacing.layout.l} 0;
    }

    .health-notice {
        max-width: 900px;
        margin: 0 auto ${spacing.layout.l};
    }

    .lead-in {
        margin-bottom: ${spacing.layout.s};
    }

    .lead-in .remaining {
        margin-top: ${spacing.component.s};
    }

    .performances-list {
        align-items: flex-start;
        display: flex;
        list-style: none;
        margin-left: var(--list-margin-correction);
        margin-right: var(--list-margin-correction);
        min-width: 100%;
        overflow: auto hidden;
        -webkit-overflow-scrolling: touch;
        -ms-overflow-style: none; /* IE and Edge */
        scrollbar-width: none; /* Firefox */

        /* Chrome, Safari, Opera */
        &::-webkit-scrollbar {
            display: none;
        }

        ${breakpoints.s} {
            display: grid;
            grid-gap: var(--gutter-width);
            grid-template-columns: repeat(4, 1fr);
            grid-auto-flow: row;
            margin-left: 0;
            margin-right: 0;
        }

        ${breakpoints.l} {
            grid-template-columns: repeat(5, 1fr);
        }

        li {
            align-self: stretch;
            flex: 0 0 var(--list-item-width);
            position: relative;
            width: 100%;
        }
        li:not(:first-child) {
            margin-left: calc(var(--gutter-width) / 2);
            ${breakpoints.s} {
                margin-left: 0;
            }
        }
        li:not(:last-child) {
            margin-right: calc(var(--gutter-width) / 2);
            ${breakpoints.s} {
                margin-right: 0;
            }
        }

        li:first-child {
            margin-left: var(--list-item-outer-margin);
            ${breakpoints.s} {
                margin-left: 0;
            }
        }

        li:last-child:after {
            content: '';
            height: 1px;
            left: 100%;
            position: absolute;
            top: 0px;
            width: var(--total-container-gutter);
            ${breakpoints.s} {
                display: none;
            }
        }
    }

    .get-tickets-callout {
        background-color: ${({ theme }) => theme.surfaces.paper};
        border: 2px dashed ${({ theme }) => theme.surfaces.accentDark};
        border-radius: ${borders.modalRadius};
        box-shadow: ${rgba('#F25C05', 0.25)} 0px 4px 24px;
        text-align: center;
        padding: ${spacing.layout.s} ${spacing.component.l};

        .button {
            margin-top: ${spacing.layout.xs};
        }
    }

    .ticket-provider {
        margin: ${spacing.layout.s} auto 0;
        max-width: 575px;
        text-align: center;

        .general-ticket-link,
        .provider-phone {
            color: ${({ theme }) => theme.typography.light};
            text-decoration: underline;
        }
    }
`;
