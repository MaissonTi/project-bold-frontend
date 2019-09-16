import React from 'react';
import { Link } from 'react-router-dom';

import { IoIosPerson } from 'react-icons/io';

import { useDispatch, useSelector } from 'react-redux';

import { NavDiv, NavUser } from './styles';
import logo from '../../assests/bold.png';

import { signOut } from '../../store/modules/auth/actions';

export default function Nav() {
  const dispatch = useDispatch();
  const user = useSelector(state => state.auth.user);

  function onSair() {
    dispatch(signOut());
  }

  return (
    <div className="section no-pad-bot" id="index-banner">
      <div className="container">
        <NavDiv>
          <div>
            <Link to="/">
              <img src={logo} alt="bold" />
            </Link>
          </div>
          <div>
            <ul id="nav-mobile" className="right hide-on-med-and-down">
              <li>
                <Link to="/" className="black-text">
                  Inicio
                </Link>
              </li>
              <li>
                <Link to="/cursos" className="black-text">
                  Cursos
                </Link>
              </li>

              {user.name ? (
                <li>
                  <NavUser>
                    <Link to="/dashboard" className="black-text">
                      <IoIosPerson size={50} />{' '}
                    </Link>
                    <div>
                      <Link to="/dashboard" className="black-text">
                        <span> {user.name}</span>
                      </Link>

                      <Link to="/dashboard" onClick={onSair} className="sair">
                        sair
                      </Link>
                    </div>
                  </NavUser>
                </li>
              ) : (
                <li>
                  <Link to="/login" className="black-text">
                    Login
                  </Link>
                </li>
              )}
            </ul>
          </div>
        </NavDiv>
      </div>
    </div>
  );
}
