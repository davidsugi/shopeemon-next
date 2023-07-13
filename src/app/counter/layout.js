import React from 'react';

import './styles.css';

export const dynamic = "force-dynamic";

function RootLayout({ children }) {
  const timestamp = new Date().toLocaleString();
  return (
    <html lang="en">
      <body suppressHydrationWarning={true}>
        {children}
        <footer>Page rendered on {timestamp} </footer>
      </body>
    </html>
  );
}

export default RootLayout;
