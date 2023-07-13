'use client';
// /src/app/page.js
import React, { useState } from 'react';
import styles from "./counter.module.css";

function Censored({children}) {
  const [isRevealed, setIsRevealed ] = useState(false);

  const onClick = ()=>{
    setIsRevealed(!isRevealed);
  }

  return (
    <button className={isRevealed ? styles.censored : null}  onClick={onClick}>{children}</button>
  );
}

export default Censored;