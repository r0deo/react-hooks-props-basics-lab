// App.js
import React from 'react';
import Home from './Home';
import About from './About';

import user from '../data/user'; // Assuming the user object is in a file named user.js

function App() {
  return (
    <div>
      <Home name={user.name} city={user.city} color={user.color} />
      <About bio={user.bio} links={user.links} />
    </div>
  );
}

export default App;
