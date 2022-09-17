import { ThemeProvider } from '@mui/material';
import React from 'react';
import theme from '../../styles/theme';
import Header from '../Header';

const Layout = (props) => {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      {props.children}
    </ThemeProvider>
  );
};

export default Layout;
