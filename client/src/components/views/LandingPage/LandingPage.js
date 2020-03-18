import React, { useEffect } from "react";
import axios from "axios";
function LandingPage(props) {
  useEffect(() => {
    axios.get("/api/user/hello").then(res => console.log(res));
  }, []);

  const onClickHandler = () => {
    axios.get(`/api/user/logout`)
      .then(res => {
        if (res.data.success) {
          props.history.push("/login");
        } else {
          alert('Fail to logout!!!');
        }
      });
  }

  return (
    <div style={{
      display: 'flex', justifyContent: 'center', alignItems: 'center',
      flexDirection: 'column', width: '100%', height: '100vh'
    }}>
      <h2>LandingPage</h2>
      <div>
        <button onClick={onClickHandler}>
          Logout
        </button>
      </div>
    </div>
  );
}

export default LandingPage;
