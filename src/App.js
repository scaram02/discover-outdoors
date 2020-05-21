import React from 'react';
import "bootstrap/dist/css/bootstrap.css"
import Landing from './components/Landing'
import Nav from './components/Nav'
import DiscoverList from './components/DiscoverList'
// import Wald from './components/Wald'
// import Mountain from './components/Mountain'
// import './App.css';


function App() {
  return (
    <div>
    <Nav />
    <Landing />

    {/* <Wald title="Discover the forest" 
    descrip="Welcome to the forest. Explore the trees, the moss, the mulch, the woody scents."
    />
    <Mountain title="Discover the mountains" 
    descrip="Breathe in. Breathe out. Look around."
    /> */}
<DiscoverList />

    </div>
  );
}

export default App;
