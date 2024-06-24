import { IconBaseProps } from 'react-icons';
import { SvgIconTypeMap } from '@mui/material';
import { OverridableComponent } from '@mui/material/OverridableComponent';
import { StyledComponent } from '@emotion/styled';

export type IconType = StyledComponent<IconBaseProps> | OverridableComponent<SvgIconTypeMap>;
