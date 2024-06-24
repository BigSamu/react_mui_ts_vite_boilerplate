import { FaHome } from 'react-icons/fa';
import { FaGear } from 'react-icons/fa6';
import { styled } from '@mui/material/styles';

// Styled react-icons components
export const HomeIcon = styled(FaHome)(({ theme }) => ({
  fontSize: theme.typography.pxToRem(24),
  color: theme.palette.secondary.dark,
}));

export const SectionIcon = styled(FaGear)(({ theme }) => ({
  fontSize: theme.typography.pxToRem(24),
  color: theme.palette.secondary.dark,
}));

// Directly using MUI icons
export { default as InfoIcon } from '@mui/icons-material/Info';
