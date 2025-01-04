'use client';

import Start from '@/components/Start/Start';
import { ThemeProvider } from 'styled-components';
import { lightMode } from './shared/themes/light-theme';
import { GlobalStyle } from './shared/globalStyles';

export default function Home() {
  return (
    <>
      <ThemeProvider theme={lightMode}>
        <GlobalStyle />
        <Start />
      </ThemeProvider>
    </>
  );
}
