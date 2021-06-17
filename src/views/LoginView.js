import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { authOperations } from '../redux/auth';

export default function LoginView() {
  const dispatch = useDispatch();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChangeEmail = event => {
    setEmail(event.target.value);
  };
  const handleChangePassword = event => {
    setPassword(event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    const credentials = { email, password };
    dispatch(authOperations.logIn(credentials));
    setEmail('');
    setPassword('');
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit} className="Form">
        <label className="Form__lable">
          Mail
          <input
            type="email"
            name="email"
            value={email}
            onChange={handleChangeEmail}
          ></input>
        </label>
        <label className="Form__lable">
          Password
          <input
            type="password"
            name="password"
            value={password}
            onChange={handleChangePassword}
          ></input>
        </label>
        <button type="submit">Enter</button>
      </form>
    </div>
  );
}
