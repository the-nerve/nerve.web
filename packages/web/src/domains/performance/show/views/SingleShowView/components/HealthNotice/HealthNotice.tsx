import React from 'react';
import {
    CardHeader,
    CardContent,
    BodyText,
    Divider,
    PortableText,
    Icon,
} from '@web/ui/core';

import * as styled from './HealthNotice.styles';

export const HealthNotice = ({ title, rawContent }: HealthNoticeProps) => {
    return (
        <styled.HealthNotice
            variant="outlined"
            borderColor="neutralDark"
            spacing={{ desktop: 'xl', mobile: 'm' }}
        >
            <CardHeader>
                {/* <Icon name="Covid" size="l" color="dangerLight" />
                <Icon name="Mask" size="l" color="dangerLight" /> */}
                <BodyText size="m" weight="bold" color="accentDark">
                    {title}
                </BodyText>
            </CardHeader>
            <Divider color="neutralDark" />
            <CardContent className="content">
                <PortableText
                    content={rawContent}
                    config={{ block: { bodyText: { size: 's' } } }}
                />
            </CardContent>
        </styled.HealthNotice>
    );
};

interface HealthNoticeProps {
    title: string;
    rawContent: any[];
}
