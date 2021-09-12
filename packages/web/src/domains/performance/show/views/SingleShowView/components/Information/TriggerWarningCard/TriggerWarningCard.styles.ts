import { spacing } from '@web/ui/tokens';
import styled from 'styled-components';

import { InfoCard } from '../InfoCard/InfoCard';

export const TriggerWarningCard = styled(InfoCard)`
    .copy {
        margin-top: ${spacing.component.xs};
    }
`;
