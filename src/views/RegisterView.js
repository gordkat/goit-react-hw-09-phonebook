import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { authOperations } from '../redux/auth';

export default function RegisterView() {
  const dispatch = useDispatch();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChangeName = event => {
    setName(event.target.value);
  };
  const handleChangeEmail = event => {
    setEmail(event.target.value);
  };
  const handleChangePassword = event => {
    setPassword(event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    const credentials = { name, email, password };
    dispatch(authOperations.register(credentials));
    setName('');
    setEmail('');
    setPassword('');
  };

  return (
    <div>
      <h2>Registration</h2>
      <form onSubmit={handleSubmit} className="Form">
        <label className="Form__lable">
          Name
          <input
            type="text"
            name="name"
            value={name}
            onChange={handleChangeName}
          ></input>
        </label>
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
        <button type="submit">Register</button>
      </form>
    </div>
  );
}
