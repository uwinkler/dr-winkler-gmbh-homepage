import { SxProps, Theme } from '@mui/material';
import React from 'react';

export type WithChildren<T> = React.PropsWithChildren<T> & {
  sx?: SxProps<Theme>;
};
