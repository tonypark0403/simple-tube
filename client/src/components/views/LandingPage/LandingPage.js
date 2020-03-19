import React, { useEffect } from "react";
import { FaCode } from "react-icons/fa";
import axios from "axios";

function LandingPage(props) {
  useEffect(() => {
    axios.get("/api/user/hello").then(res => console.log(res));
  }, []);

  return (
    <div style={{
      display: 'flex', justifyContent: 'center', alignItems: 'center',
      flexDirection: 'column', width: '100%', height: '100vh'
    }}>
      <div><FaCode style={{ fontSize: '4rem' }} /></div>
      <p style={{ fontSize: '2rem' }}>Let's Start Coding!</p>
    </div>
  );
}

export default LandingPage;
