import React from 'react';
import {
  FaCircle,
  FaHome,
  FaPowerOff,
  FaSignInAlt,
  FaUserAlt,
} from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import * as actions from '../../store/modules/auth/actions';
import history from '../../services/history';

import { Nav } from './styled';

export default function Header() {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const dispath = useDispatch();

  const handleLogout = (e) => {
    e.preventDefault();
    dispath(actions.loginFailure());
    history.push('/');
  };
  return (
    <Nav>
      <Link to="/">
        <FaHome size={24} />
      </Link>
      <Link to="/register">
        <FaUserAlt size={24} />
      </Link>
      {isLoggedIn ? (
        <Link onClick={handleLogout} to="/login">
          <FaPowerOff size={24} />
        </Link>
      ) : (
        <Link to="/login">
          <FaSignInAlt size={24} />
        </Link>
      )}
      {isLoggedIn && <FaCircle size={24} color="#66ff33" />}
    </Nav>
  );
}
