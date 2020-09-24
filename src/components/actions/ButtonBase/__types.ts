import { LinkProps } from '@components/utility';

export type ButtonSize = 's' | 'm';

export interface ButtonBaseProps {
    link?: LinkProps;
    size: ButtonSize;
    fullWidth?: true | undefined;
    animateClick?: true | undefined;
    className?: string;
}