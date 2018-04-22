/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react';
import { FormattedMessage } from 'react-intl';
import messages from './messages';
import './index.css';
import LearnPage from '../LearnPage';


export default class HomePage extends React.PureComponent {
  // eslint-disable-line react/prefer-stateless-function

  render() {
    return (
      <body>
        <div className="container-fluid mt-4">
          <h2> What type of tutor are you looking for?</h2>
         
        </div>
      </body>
    );
  }
}
