// /src/app/page.js
import React from 'react';
import Counter from "./Counter";
import Censored from "./Censored";

function Home() {

  return (
    <main>
      <h1>Welcome!</h1>
      <p>You are visitor number  {` `}
        <Censored>
          <Counter />
      </Censored>
      </p>
    </main>
  );
}

export default Home;