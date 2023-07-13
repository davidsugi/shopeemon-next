import React from 'react';

import './styles.css';

export const dynamic = "force-dynamic";

function RootLayout({ children }) {
  const timestamp = new Date().toLocaleString();
  return (
    <>
        {children}
        <footer>Page rendered on {timestamp} </footer>
    </>
  );
}

export default RootLayout;
