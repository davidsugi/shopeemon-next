'use client';
// /src/app/page.js
export const dynamic = "force-dynamic";

import React, { useEffect, useState } from 'react';

const DATABASE_PATH = 'src/app/counter/database.json';

function Counter() {
  const [hits,setHits]=useState(null)

  useEffect(()=>{
    let cachhit = window.localStorage.getItem("hits") || 0;
    cachhit=Number(cachhit)+1;
    setHits(cachhit);
    window.localStorage.setItem("hits",cachhit);
  },[])

  return hits ? hits : "-";
}

export default Counter;