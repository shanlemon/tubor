/**
 *
 * App.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './index.css';

import HomePage from 'containers/HomePage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import logo from '../../images/icon-128x128.png'
import tuborText from '../../images/Tubor-Text.png'
import blackBox from '../../images/blackbox.png'

export default function LearnPage() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light m-0 orange">
        <img src={logo} width="64" height="64" className="d-inline-block align-top" alt="" />

        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav" >
          <ul className="nav ml-2">
            <li className="nav-item">
              <a className="nav-link darkGreenText pt20 active" href="#">Learn <span className="sr-only">(current)</span></a>
            </li>
            <li className="nav-item">
              <a className="nav-link pt20 darkGreenText" href="#">Teach</a>
            </li>
          </ul>
        </div>
        <ul className="nav nav-pills ml-2">

          <li className="nav-item dropdown justify-content-end">
            <div>
              <a className="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">
                <img src={blackBox} width="64" height="64" className="d-inline-block" alt="" />
                <b className="align-middle ml-3 darkGreenText">Shan M</b>
              </a>
              <div className="dropdown-menu dropdown-menu-right">
                <a className="dropdown-item" href="#">My Profile</a>
                <a className="dropdown-item" href="#">Settings</a>
                <a className="dropdown-item" href="#">Help</a>
                <div className="dropdown-divider"></div>
                <a className="dropdown-item" href="#">Log out</a>
              </div>
            </div>
          </li>
        </ul>
      </nav>
      <Switch>
          <Route exact path="/" component={HomePage} />
          <Route component={NotFoundPage} />
        </Switch>
    </div>
  );
}
