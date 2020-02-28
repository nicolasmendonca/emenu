import React from 'react';
import { useDispatch } from 'react-redux';
import { attemptLogin } from '../../redux/actions/authentication';

const LoginPage = () => {
  const dispatch = useDispatch();

  return (
    <div>
      <button type="button" onClick={() => dispatch(attemptLogin())}>
        Login
      </button>
    </div>
  );
};

export default LoginPage;
