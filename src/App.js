import React from 'react'

import { Benefits, Demo, Feedback, Footer, Header, Joinus, Whyus} from './containers';
import { Navbar, Feature } from './components';
import './App.css';

const App = () => {
  return (
    <div>
        <div className="APP">
          <Navbar />
          <Header />
          <Feature />
          <Benefits />
          <Demo />
          <Whyus />
          <Feedback />
          <Joinus />
          <Footer />
        </div>
    </div>
  )
}

export default App