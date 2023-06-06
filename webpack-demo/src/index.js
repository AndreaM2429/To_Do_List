/* eslint-disable import/no-extraneous-dependencies */
import _ from 'lodash';
import './style.css';
/* eslint-enable import/no-extraneous-dependencies */

function component() {
  const element = document.createElement('div');

  // Lodash, Lodash, now imported by this script
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  element.classList.add('hello');

  return element;
}

document.body.appendChild(component());