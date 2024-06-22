import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

export default function Chat() {
  return (
    <div>
      {/* <h2>Chat Page</h2> */}
      <div className="chat-container">
       <Navbar/>
      </div>
      <Footer/>
    </div>
  );
}
