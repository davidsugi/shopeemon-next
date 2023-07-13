// /src/app/page.js
export const dynamic = "force-dynamic";

import React from 'react';
import {
  readFile,
  writeFile,
} from './helpers';

const DATABASE_PATH = 'src/app/counter/database.json';

function Counter() {
  let { hits } = JSON.parse(
    readFile(DATABASE_PATH)
  );

  hits += 1;

  writeFile(
    DATABASE_PATH,
    JSON.stringify({ hits })
  );

  return hits;
}

export default Counter;