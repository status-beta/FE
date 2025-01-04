'use client';

import { ReactNode, useEffect, useState } from 'react';
import { ServerStyleSheet, ThemeProvider } from 'styled-components';
import { GlobalStyle } from './shared/globalStyles';
import { lightMode } from './shared/themes/light-theme';

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  const [styleTag, setStyleTag] = useState<ReactNode>(null);

  useEffect(() => {
    const sheet = new ServerStyleSheet();
    sheet.collectStyles(children); // 스타일 수집
    setStyleTag(sheet.getStyleElement()); // 스타일 요소 추가

    return () => {
      sheet.seal(); // 클린업
    };
  }, [children]);

  return (
    <ThemeProvider theme={lightMode}>
      <GlobalStyle />
      <html lang="en">
        <body>
          {styleTag} {/* SSR로 수집된 스타일 태그 삽입 */}
          {children}
        </body>
      </html>
    </ThemeProvider>
  );
}
