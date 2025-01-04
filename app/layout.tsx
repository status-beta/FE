'use client';

import { ReactNode, useEffect, useState } from 'react';
import { ServerStyleSheet } from 'styled-components';

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
    <html lang="en">
      <body>
        {styleTag} {/* SSR로 수집된 스타일 태그 삽입 */}
        {children}
      </body>
    </html>
  );
}
