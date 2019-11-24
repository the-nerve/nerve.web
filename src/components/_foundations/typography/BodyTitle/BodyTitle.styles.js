import styled from 'styled-components';
import { typography } from '../../../../__tokens__';

export const bodyTitleColors = {
	dark: '',
	light: '',
	// dark: props => props.theme.ui.typography.dark,
	// light: props => props.theme.ui.typography.light,
};

export const bodyTitleSizes = {
	l: typography.bodyBold.Large,
	m: typography.bodyBold.Medium,
	s: typography.bodyBold.Small,
};

export const BodyTitle = styled.p`
	${props => bodyTitleSizes[props.size]};
	text-transform: uppercase;
`;
/* color: ${props => commonTextColors[props.color]}; */
