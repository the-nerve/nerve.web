import { AvailableGridSize } from '@web/ui/tokens';

export type AvailableContainerType = 'full' | 'contained';

export interface ContainerProps {
    maxWidth?: AvailableGridSize;
    type?: AvailableContainerType;
    className?: string;
    others?: any;
}
