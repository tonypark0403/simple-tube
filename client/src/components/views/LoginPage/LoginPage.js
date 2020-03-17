import React, { useState } from 'react'
import { loginUser } from '../../../_actions/user_action';
import Axios from 'axios';

function LoginPage() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const onEmailHandler = (event) => {
    setEmail(event.currentTarget.value)
  }

  const onPasswordHandler = (event) => {
    setPassword(event.currentTarget.value)
  }

  const onSubmitHandler = (event) => {
    event.preventDefault();

    let body = {
      email,
      password
    }

    Axios.post('/api/user/login', body).
      then(res => console.log(res));
  }

  return (
    <div style={{
      display: 'flex', justifyContent: 'center', alignItems: 'center'
      , width: '100%', height: '100vh'
    }}>
      <form style={{ display: 'flex', flexDirection: 'column' }}
        onSubmit={onSubmitHandler}
      >
        <label>Email</label>
        <input type="email" value={email} onChange={onEmailHandler} />
        <label>Password</label>
        <input type="password" value={password} onChange={onPasswordHandler} />
        <br />
        <button type="submit">
          Login
          </button>
      </form>
    </div>
  );
}

export default LoginPage;
