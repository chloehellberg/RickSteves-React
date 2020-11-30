import React from 'react';
import  Header from './Header';
import MerchControl from './MerchControl';
import Footer from './Footer';
import "../index.css"


function App() {
  return (
  <React.Fragment>
    <div class="totally-not-skatune">
    <Header/>
    <MerchControl />
    <Footer />
    </div>
  </React.Fragment>
  );
}

export default App;
